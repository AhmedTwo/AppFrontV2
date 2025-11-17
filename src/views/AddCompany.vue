<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

// Initialisation du routeur Vue pour la redirection
const router = useRouter()

// --- État de l'interface utilisateur ---
const loading = ref(false) // Indicateur de chargement / Soumission en cours
const error = ref(null) // Stocke les messages d'erreur à afficher
const success = ref(false) // Indicateur de succès

// --- Données du formulaire SOCIÉTÉ ---
const companyData = ref({
  name: '',
  number_of_employees: '',
  industry: '',
  address: '',
  latitude: '',
  longitude: '',
  description: '',
  email_company: '', // Email de contact de la société
  n_siret: '',
  logo: null, // Fichier logo
})

// --- Données du formulaire UTILISATEUR (Administrateur de la société) ---
const userData = ref({
  nom: '',
  prenom: '',
  telephone: '',
  ville: '',
  code_postal: '',
  photo: null, // Fichier photo
  // company_id sera lié après l'étape 1
})

// Gestion de l'upload de la photo utilisateur
const handlePhotoUpload = (event) => {
  const file = event.target.files ? event.target.files[0] : null
  userData.value.photo = file
}

// Gestion de l'upload du logo de la société
const handleLogoUpload = (event) => {
  const file = event.target.files ? event.target.files[0] : null
  companyData.value.logo = file
}

// --- Fonction Utilitaire ---
/**
 * Génère une chaîne aléatoire de la longueur spécifiée.
 * @param {number} length Longueur du mot de passe (min 8 recommandé).
 * @returns {string} Le mot de passe généré.
 */
const generateRandomPassword = (length = 8) => {
  // Caractères autorisés : minuscules, majuscules, chiffres et quelques symboles
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+'
  let password = ''
  for (let i = 0; i < length; i++) {
    // Sélectionne un caractère aléatoire
    password += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return password
}

// =======================================================================
// FONCTION DE SOUMISSION PRINCIPALE (Société -> Utilisateur -> E-mails)
// =======================================================================
const submitForm = async () => {
  // DÉBUT DE LA VALIDATION SIRET PERSONNALISÉE
  if (companyData.value.n_siret.length !== 14) {
    error.value = 'Le numéro SIRET doit contenir exactement 14 chiffres.'
    return // Arrête l'envoi
  }
  // FIN DE LA VALIDATION SIRET

  loading.value = true
  error.value = null
  success.value = false

  // Variables pour stocker les données générées
  let autoEmail = ''
  let autoPassword = ''
  let newCompanyId = null

  try {
    // -------------------------------------------------------------------
    // ÉTAPE 1 : AJOUT DE LA SOCIÉTÉ (API: /api/addCompany)
    // -------------------------------------------------------------------
    console.log('Étape 1 : Envoi des données de la société...')

    const companyFormData = new FormData()
    // Remplissage des données de la société
    companyFormData.append('name', companyData.value.name)
    companyFormData.append('number_of_employees', companyData.value.number_of_employees)
    companyFormData.append('industry', companyData.value.industry)
    companyFormData.append('address', companyData.value.address)
    companyFormData.append('latitude', companyData.value.latitude)
    companyFormData.append('longitude', companyData.value.longitude)
    companyFormData.append('description', companyData.value.description)
    companyFormData.append('email_company', companyData.value.email_company)
    companyFormData.append('n_siret', companyData.value.n_siret)

    if (companyData.value.logo) {
      companyFormData.append('logo', companyData.value.logo)
    } else {
      companyFormData.append('logo', '')
    }

    const companyResponse = await axios.post(
      'http://127.0.0.1:8000/api/addCompany',
      companyFormData,
    )
    console.log('Société ajoutée (Réponse API) :', companyResponse.data)

    // Récupération de l'ID pour la liaison avec l'utilisateur
    newCompanyId = companyResponse.data.data.id

    if (!newCompanyId) {
      throw new Error("L'API n'a pas retourné l'ID de la société créée.")
    }
    console.log(`ID de la société récupéré : ${newCompanyId}.`)

    // -------------------------------------------------------------------
    // ÉTAPE 2 : AJOUT DE L'UTILISATEUR (API: /api/addUser)
    // -------------------------------------------------------------------
    console.log("Étape 2 : Envoi des données de l'utilisateur (avec Company ID)...")

    // Génération des identifiants (Email et Mot de passe brut)
    const slugName = companyData.value.name.toLowerCase().replace(/\s/g, '-')
    autoEmail = `${slugName}@company.com`
    autoPassword = generateRandomPassword(8)

    const userFormData = new FormData()
    // Remplissage des données utilisateur
    userFormData.append('nom', userData.value.nom)
    userFormData.append('prenom', userData.value.prenom)
    userFormData.append('telephone', userData.value.telephone)
    userFormData.append('ville', userData.value.ville)
    userFormData.append('code_postal', userData.value.code_postal)
    userFormData.append('company_id', newCompanyId) // Liaison avec l'ID de la société

    // Champs automatiques (nécessaires pour la BDD et l'e-mail)
    userFormData.append('email', autoEmail)
    userFormData.append('password', autoPassword) // Mot de passe brut
    userFormData.append('disponibilite', 0)

    if (userData.value.photo) {
      userFormData.append('photo', userData.value.photo)
    }

    const userResponse = await axios.post('http://127.0.0.1:8000/api/addUser', userFormData)
    console.log('Utilisateur ajouté (Réponse API) :', userResponse.data)

    // -------------------------------------------------------------------
    // ÉTAPE 3 : ENVOI DES IDENTIFIANTS PAR EMAIL (API: /api/send-identifiants-company)
    // -------------------------------------------------------------------
    console.log("Étape 3 : Déclenchement de l'envoi des identifiants par e-mail...")

    const emailPayload = {
      company_name: companyData.value.name,
      company_email: companyData.value.email_company, // Email où sera envoyé le mail des identifiants
      user_login_email: autoEmail, // Login généré
      user_raw_password: autoPassword, // Mot de passe généré
      user_full_name: `${userData.value.prenom} ${userData.value.nom}`,
    }

    const emailResponse = await axios.post(
      'http://127.0.0.1:8000/api/send-identifiants-company',
      emailPayload,
    )
    console.log('E-mails envoyés (Réponse API) :', emailResponse.data.message)

    // Finalisation
    success.value = true
    setTimeout(() => {
      // Redirection après succès
      router.push('/SignIn')
    }, 1000)
  } catch (err) {
    // GESTION DES ERREURS
    console.error('Erreur de soumission complète:', err)

    if (err.response) {
      // Erreur serveur (4xx ou 5xx)
      const status = err.response.status
      const data = err.response.data

      if (status === 422 && data.errors) {
        // Erreur de validation Laravel (champs manquants ou invalides)
        error.value = 'Erreur de validation. Veuillez vérifier tous les champs du formulaire.'
        // Optionnel : Vous pouvez loguer les erreurs spécifiques de Laravel pour le développeur
        console.error('Erreurs de validation de Laravel:', data.errors)
      } else if (status === 500) {
        // Erreur interne du serveur (y compris les échecs PHPMailer)
        error.value =
          data.error ||
          data.message ||
          `Erreur serveur inattendue (Code 500) à l'étape ${newCompanyId ? '2 ou 3' : '1'}.`
        // Si l'erreur se produit après l'étape 1, il peut y avoir des données orphelines.
      } else {
        // Autres erreurs de statut HTTP (404, 401, etc.)
        error.value = data.message || `Erreur serveur (Code ${status}).`
      }
    } else if (err.message === "L'API n'a pas retourné l'ID de la société créée.") {
      error.value = "Échec critique à l'étape de création de la société."
    } else {
      // Erreur réseau ou timeout (aucune réponse serveur)
      error.value = 'Erreur de connexion réseau. Veuillez vérifier votre accès à internet.'
    }
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div id="containerFirst">
    <div id="containerSecond">
      <h1 class="h1AddCompany">AJOUT D'UNE NOUVELLE SOCIÉTÉ !</h1>

      <form id="addCompanyForm" @submit.prevent="submitForm">
        <div class="divAdd">
          <label for="inputNom">NOM (SOCIÉTÉ)</label>
          <input type="text" id="inputNom" v-model="companyData.name" required />
        </div>

        <div class="divAdd">
          <label for="inputNbEmploye">NOMBRE EMPLOYEES (SOCIÉTÉ)</label>
          <input
            type="text"
            id="inputNbEmploye"
            v-model="companyData.number_of_employees"
            required
          />
        </div>

        <div class="divAdd">
          <label for="inputDomaine">DOMAINE (SOCIÉTÉ)</label>
          <input type="text" id="inputDomaine" v-model="companyData.industry" required />
        </div>

        <div class="divAdd">
          <label for="inputAdresse">ADRESSE POSTALE SOCIETE (SOCIÉTÉ)</label>
          <input type="text" id="inputAdresse" v-model="companyData.address" required />
        </div>

        <div class="divAdd">
          <label for="inputLatitutde">LATITUDE (SOCIÉTÉ)</label>
          <input type="text" id="inputLatitutde" v-model="companyData.latitude" required />
        </div>

        <div class="divAdd">
          <label for="inputLongitude">LONGITUDE (SOCIÉTÉ)</label>
          <input type="text" id="inputLongitude" v-model="companyData.longitude" required />
        </div>

        <div class="divAdd">
          <label for="inputDescription">DESCRIPTIF (SOCIÉTÉ)</label>
          <input type="text" id="inputDescription" v-model="companyData.description" required />
        </div>

        <div class="divAdd">
          <label for="inputEmail">EMAIL (SOCIÉTÉ)</label>
          <input type="email" id="inputEmail" v-model="companyData.email_company" required />
        </div>

        <div class="divAdd">
          <label for="inputSiret">N_SIRET (SOCIÉTÉ)</label>
          <input
            type="text"
            id="inputSiret"
            v-model="companyData.n_siret"
            inputmode="numeric"
            pattern="\d{14}"
            maxlength="14"
            required
          />
        </div>

        <div class="divAdd">
          <label for="inputLogo">LOGO (SOCIÉTÉ)</label>
          <input type="file" id="inputLogo" accept="image/*" @change="handleLogoUpload" />
        </div>

        <div class="divAdd">
          <label for="inputLogo">NOM (UTILISATEUR)</label>
          <input type="text" id="inputFirstName" v-model="userData.nom" required />
        </div>

        <div class="divAdd">
          <label for="inputLogo">PRENOM (UTILISATEUR)</label>
          <input type="text" id="inputLastName" v-model="userData.prenom" required />
        </div>

        <div class="divAdd">
          <label for="telephone">TELEPHONE (UTILISATEUR)</label>
          <input type="text" id="telephone" v-model="userData.telephone" required />
        </div>

        <div class="divAdd">
          <label for="ville">VILLE (UTILISATEUR)</label>
          <input type="text" id="ville" v-model="userData.ville" required />
        </div>

        <div class="divAdd">
          <label for="zipcode">CODE POSTAL (UTILISATEUR)</label>
          <input type="text" id="zipcode" v-model="userData.code_postal" required />
        </div>

        <div class="divAdd">
          <label for="photo">Photo (UTILISATEUR)</label>
          <input type="file" id="photo" accept="image/*" @change="handlePhotoUpload" />
        </div>

        <div v-if="error" class="divAdd message error-message">❌ {{ error }}</div>
        <div v-if="success" class="divAdd message success-message">
          ✅ Utilisateur et Société ajouté avec succès !
        </div>

        <button
          type="submit"
          class="btn"
          onclick="return confirm('Es-tu sûr de vouloir envoyer cette société à Admin ?')"
          title="Envoyer"
          :disabled="loading"
        >
          <span v-if="loading">Ajout en cours...</span>
          <span v-else>Envoyer</span>
        </button>
      </form>
    </div>
  </div>
</template>

<style scoped>
/* COULEURS */
/* Bleu principal: #0d6efd */
/* Couleur de fond de page: #f8f9fa */
/* Couleur de texte: #212529 */
/* Bordure input: #ced4da */
/* Ombre carte: 0 5px 12px rgba(0, 0, 0, 0.05) */

/* -------------------
   CONTENEUR GLOBAL
   ------------------- */

#containerFirst {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f8f9fa;
  padding: 35px 0;
}

/* -------------------
   CARTE DU FORMULAIRE COMPACT
   ------------------- */

#containerSecond {
  background-color: #ffffff;
  padding: 20px; /* Réduction du padding */
  border: none;
  border-radius: 10px;
  box-shadow: 0 5px 12px rgba(0, 0, 0, 0.05); /* Ombre très légère */
  width: 95%;
  max-width: 950px; /* Augmenté légèrement pour étaler les 16 champs */
  margin: 0;
}

/* Titre */
.h1AddCompany {
  text-align: center;
  font-size: 1.8rem; /* Titre plus petit */
  color: #212529;
  font-weight: 700;
  margin-bottom: 15px; /* Réduction de la marge */
  padding-bottom: 10px;
  border-bottom: 1px solid #e9ecef;
}

/* -------------------
   GRILLE DU FORMULAIRE (2 COLONNES)
   ------------------- */

#addCompanyForm {
  display: flex;
  flex-wrap: wrap;
  gap: 10px; /* Très petit gap entre les champs pour économiser de l'espace */
  justify-content: space-between;
}

.divAdd {
  /* Assure 2 colonnes sur desktop */
  flex: 1 1 calc(50% - 5px); /* Calcul adapté au gap de 10px */
  display: flex;
  flex-direction: column;
}

.divAdd label {
  font-weight: 600;
  margin-bottom: 3px; /* Marge minimale */
  color: #212529;
  font-size: 0.85rem; /* Très petit label */
  text-transform: uppercase;
}

.divAdd input {
  padding: 8px 8px; /* Padding minimaliste */
  border: 1px solid #ced4da;
  border-radius: 4px;
  font-size: 0.9rem;
  transition:
    border-color 0.3s,
    box-shadow 0.3s;
}

.divAdd input:focus {
  border-color: #0d6efd;
  box-shadow: 0 0 0 2px rgba(13, 110, 253, 0.2);
  outline: none;
}

/* -------------------
   ÉLÉMENTS PLEINE LARGEUR
   ------------------- */

/* Le dernier élément (bouton) prend toute la largeur */
.btn {
  flex: 1 1 100%;
}

/* Gestion du champ de fichier (pour qu'il ne soit pas trop haut) */
.divAdd input[type='file'] {
  padding: 6px 8px;
}

/* -------------------
   BOUTON
   ------------------- */

.btn {
  padding: 10px;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  transition: background-color 0.3s ease;
  border: none;
  border-radius: 6px;
  color: white;
  background-color: #0d6efd;
  box-shadow: 0 2px 5px rgba(13, 110, 253, 0.2);
  margin-top: 15px;
}

.btn:hover {
  background-color: #0b5ed7;
  box-shadow: 0 4px 8px rgba(13, 110, 253, 0.3);
}

/* -------------------
   RESPONSIVE (Mode Colonne Ultra-Compact)
   ------------------- */

@media (max-width: 900px) {
  /* Passage à une seule colonne pour maximiser la hauteur verticale disponible */
  .divAdd {
    flex: 1 1 100%;
  }
}

@media (max-width: 600px) {
  #containerSecond {
    padding: 15px;
    max-width: 95%;
  }

  .h1AddCompany {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }
}
</style>
