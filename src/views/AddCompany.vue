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
  logo: '',
})

const userData = ref({
  nom: '',
  prenom: '',
  telephone: '',
  ville: '',
  code_postal: '',
  // company_id sera rempli dynamiquement après la création de la société
})

// FONCTION DE SOUMISSION UNIQUE (Combinant Société + Utilisateur)

const submitForm = async () => {
  loading.value = true
  error.value = null
  success.value = false

  try {
    // AJOUT DE LA SOCIÉTÉ (AddCompany)
    console.log('Étape 1 : Envoi des données de la société...')

    const companyPayload = {
      name: companyData.value.name,
      number_of_employees: companyData.value.number_of_employees,
      industry: companyData.value.industry,
      address: companyData.value.address,
      latitude: companyData.value.latitude,
      longitude: companyData.value.longitude,
      description: companyData.value.description,
      email_company: companyData.value.email_company,
      n_siret: companyData.value.n_siret,
      logo: companyData.value.logo,
    }

    const companyResponse = await axios.post('http://127.0.0.1:8000/api/addCompany', companyPayload)

    console.log('Société ajoutée (Réponse API) :', companyResponse.data)

    const newCompanyId = companyResponse.data.id

    if (!newCompanyId) {
      throw new Error("L'API n'a pas retourné l'ID de la société créée.")
    }

    console.log(`ID de la société récupéré : ${newCompanyId}.`)

    // AJOUT DE L'UTILISATEUR (AddUser)
    console.log("Étape 2 : Envoi des données de l'utilisateur (avec Company ID)...")

    const userPayload = {
      nom: userData.value.nom,
      prenom: userData.value.prenom,
      telephone: userData.value.telephone,
      ville: userData.value.ville,
      code_postal: userData.value.code_postal,
      company_id: newCompanyId, // LIAISON CRUCIALE
    }

    const userResponse = await axios.post('http://127.0.0.1:8000/api/addUser', userPayload)

    console.log('Utilisateur ajoutée (Réponse API) :', userResponse.data)

    // SUCCÈS
    success.value = true
    setTimeout(() => {
      router.push('/SignIn')
    }, 1000)
  } catch (err) {
    // GESTION DES ERREURS
    console.error("Erreur lors de l'ajout (Société ou Utilisateur) :", err.response?.data || err)
    error.value =
      err.response?.data?.message || "Échec de l'ajout. Vérifiez le formulaire et l'API."
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div id="containerFirst">
    <div id="containerSecond">
      <h1 class="h1AddCompany">AJOUT D'UNE NOUVELLE SOCIÉTÉ !</h1>

      <form id="addCompanyForm" @submit.prevent="submitForm" onsubmit="return validerSiret()">
        <div class="divAdd">
          <label for="inputNom">NOM DE LA SOCIÉTÉ</label>
          <input type="text" id="inputNom" v-model="companyData.name" required />
        </div>
        <div class="divAdd">
          <label for="inputNbEmploye">NOMBRE EMPLOYEES</label>
          <input
            type="text"
            id="inputNbEmploye"
            v-model="companyData.number_of_employees"
            required
          />
        </div>
        <div class="divAdd">
          <label for="inputDomaine">DOMAINE</label>
          <input type="text" id="inputDomaine" v-model="companyData.industry" required />
        </div>
        <div class="divAdd">
          <label for="inputAdresse">ADRESSE POSTALE SOCIETE</label>
          <input type="text" id="inputAdresse" v-model="companyData.address" required />
        </div>
        <div class="divAdd">
          <label for="inputLatitutde">LATITUDE</label>
          <input type="text" id="inputLatitutde" v-model="companyData.latitude" required />
        </div>
        <div class="divAdd">
          <label for="inputLongitude">LONGITUDE</label>
          <input type="text" id="inputLongitude" v-model="companyData.longitude" required />
        </div>
        <div class="divAdd">
          <label for="inputDescription">DESCRIPTIF</label>
          <input type="text" id="inputDescription" v-model="companyData.description" required />
        </div>
        <div class="divAdd">
          <label for="inputEmail">EMAIL</label>
          <input type="email" id="inputEmail" v-model="companyData.email_company" required />
        </div>
        <div class="divAdd">
          <!-- inputmode="numeric" → pavé numérique sur smartphone
                 pattern="\d{14}" → exactement 14 chiffres
                 maxlength="14" → limite de saisie -->
          <label for="inputSiret">N_SIRET</label>
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
          <label for="inputLogo">LIEN DU LOGO</label>
          <input type="text" id="inputLogo" name="inputLogo" required />
        </div>

        <div class="divAdd">
          <label for="inputLogo">NOM</label>
          <input type="text" id="inputFirstName" v-model="userData.nom" required />
        </div>

        <div class="divAdd">
          <label for="inputLogo">PRENOM</label>
          <input type="text" id="inputLastName" v-model="userData.prenom" required />
        </div>

        <div class="divAdd">
          <label for="telephone">TELEPHONE</label>
          <input type="text" id="telephone" v-model="userData.telephone" required />
        </div>

        <div class="divAdd">
          <label for="ville">VILLE</label>
          <input type="text" id="ville" v-model="userData.ville" required />
        </div>

        <div class="divAdd">
          <label for="zipcode">CODE POSTAL</label>
          <input type="text" id="zipcode" v-model="userData.code_postal" required />
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
