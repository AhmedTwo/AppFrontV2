<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

const router = useRouter()

const loading = ref(false)
const error = ref(null)
const success = ref(false)

const companyData = ref({
  name: '',
  number_of_employees: '',
  industry: '',
  address: '',
  latitude: '',
  longitude: '',
  description: '',
  email_company: '',
  n_siret: '',
  logo: null,
})

const userData = ref({
  nom: '',
  prenom: '',
  telephone: '',
  ville: '',
  code_postal: '',
  photo: null,
  // company_id sera rempli dynamiquement après la création de la société
})

const handlePhotoUpload = (event) => {
  const file = event.target.files ? event.target.files[0] : null
  userData.value.photo = file
}

const handleLogoUpload = (event) => {
  const file = event.target.files ? event.target.files[0] : null
  companyData.value.logo = file
}

// FONCTION DE SOUMISSION (Société + Utilisateur)
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

  try {
    // AJOUT DE LA SOCIÉTÉ (AddCompany)
    console.log('Étape 1 : Envoi des données de la société...')

    const companyFormData = new FormData()

    companyFormData.append('name', companyData.value.name)
    companyFormData.append('number_of_employees', companyData.value.number_of_employees)
    companyFormData.append('industry', companyData.value.industry)
    companyFormData.append('address', companyData.value.address)
    companyFormData.append('latitude', companyData.value.latitude)
    companyFormData.append('longitude', companyData.value.longitude)
    companyFormData.append('description', companyData.value.description)
    companyFormData.append('email_company', companyData.value.email_company)
    companyFormData.append('n_siret', companyData.value.n_siret)

    // Ajout du fichier logo s'il existe
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

    const newCompanyId = companyResponse.data.data.id

    if (!newCompanyId) {
      throw new Error("L'API n'a pas retourné l'ID de la société créée.")
    }

    console.log(`ID de la société récupéré : ${newCompanyId}.`)

    // AJOUT DE L'UTILISATEUR
    console.log("Étape 2 : Envoi des données de l'utilisateur (avec Company ID)...")

    // Génération des champs automatiques
    const slugName = companyData.value.name.toLowerCase().replace(/\s/g, '-')
    const autoEmail = `${slugName}@company.com`
    const autoPassword = 'password'

    const userFormData = new FormData()

    userFormData.append('nom', userData.value.nom)
    userFormData.append('prenom', userData.value.prenom)
    userFormData.append('telephone', userData.value.telephone)
    userFormData.append('ville', userData.value.ville)
    userFormData.append('code_postal', userData.value.code_postal)
    userFormData.append('company_id', newCompanyId) // Liaison

    // Champs automatiques
    userFormData.append('email', autoEmail)
    userFormData.append('password', autoPassword)
    userFormData.append('disponibilite', 0) // 0 ou 1 si le champ est 'boolean'

    // Ajout du fichier photo s'il existe
    if (userData.value.photo) {
      userFormData.append('photo', userData.value.photo)
    }

    const userResponse = await axios.post('http://127.0.0.1:8000/api/addUser', userFormData)

    console.log('Utilisateur ajoutée (Réponse API) :', userResponse.data) // SUCCÈS

    success.value = true
    setTimeout(() => {
      router.push('/SignIn')
    }, 1000)
  } catch (err) {
    // ... (gestion des erreurs) ...
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
