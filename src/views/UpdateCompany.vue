<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const companyId = route.params.id
const isLoading = ref(true)

const token = localStorage.getItem('auth_token')

const company = ref({
  name: '',
  logo: '',
  number_of_employees: '',
  industry: '',
  address: '',
  latitude: '',
  longitude: '',
  description: '',
  email_company: '',
  n_siret: '',
})

const loadCompany = async () => {
  const token = localStorage.getItem('auth_token')

  try {
    const response = await axios.get(`http://127.0.0.1:8000/api/companyById/${companyId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    // Détecte automatiquement si les données sont dans "data" ou pas
    const data = response.data.data ? response.data.data : response.data

    company.value.name = data.name
    company.value.logo = data.logo
    company.value.number_of_employees = data.number_of_employees
    company.value.industry = data.industry
    company.value.address = data.address
    company.value.latitude = data.latitude
    company.value.longitude = data.longitude
    company.value.description = data.description
    company.value.email_company = data.email_company
    company.value.n_siret = data.n_siret

    console.log(data)
    console.log(company)
  } catch (error) {
    console.error('Erreur lors du chargement de la société :', error)
    alert('Impossible de charger la société à modifier.')
  } finally {
    isLoading.value = false
  }
}

const updateCompany = async () => {
  try {
    await axios.post(
      `http://127.0.0.1:8000/api/companyUpdate/${companyId}`,
      {
        name: company.value.name,
        logo: company.value.logo,
        number_of_employees: company.value.number_of_employees,
        industry: company.value.industry,
        address: company.value.address,
        latitude: company.value.latitude,
        longitude: company.value.longitude,
        description: company.value.description,
        email_company: company.value.email_company,
        n_siret: company.value.n_siret,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    )

    alert('✅ Société mise à jour avec succès')
    router.push('/Dashboard_Company')
  } catch (error) {
    console.error('Erreur lors de la mise à jour :', error)
    alert('❌ Erreur lors de la mise à jour de la société.')
  }
}

onMounted(loadCompany)
</script>

<template>
  <main class="update-container">
    <div class="update-header">
      <h1 class="update-title">
        <!-- Remplacement de l'icône FontAwesome par une SVG pour être auto-contenu -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="icon-pencil"
        >
          <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
        </svg>
        MODIFIER LA SOCIÉTÉ
      </h1>
      <p class="update-description">Mettez à jour les informations de la société ci-dessous.</p>
    </div>

    <!-- Message de chargement ou d'erreur/succès -->
    <div v-if="isLoading" class="loading-state">Chargement des informations actuelles...</div>

    <div v-if="message.text" :class="['alert', message.type]">
      {{ message.text }}
    </div>

    <form class="update-form" @submit.prevent="updateCompany" v-if="!isLoading">
      <!-- 1. Nom -->
      <div class="form-group">
        <label for="inputNom" class="form-label">Nom</label>
        <input
          type="text"
          id="inputNom"
          v-model="company.name"
          class="form-input"
          placeholder="Nom de la société"
          required
        />
      </div>

      <!-- 2. Nombre d'employés -->
      <div class="form-group">
        <label for="inputNbEmploye" class="form-label">Nombre d’employés</label>
        <!-- On utilise input au lieu de textarea pour les nombres -->
        <input
          type="number"
          id="inputNbEmploye"
          v-model.number="company.number_of_employees"
          class="form-input"
          placeholder="Ex : 150"
          required
        />
      </div>

      <!-- 3. Domaine -->
      <div class="form-group">
        <label for="inputDomaine" class="form-label">Domaine</label>
        <input
          type="text"
          id="inputDomaine"
          v-model="company.industry"
          class="form-input"
          placeholder="Ex : Technologie, Finance..."
          required
        />
      </div>

      <!-- 4. Adresse -->
      <div class="form-group">
        <label for="inputAdresse" class="form-label">Adresse</label>
        <input
          type="text"
          id="inputAdresse"
          v-model="company.address"
          class="form-input"
          placeholder="Adresse complète"
          required
        />
      </div>

      <!-- 5 & 6. Géo-localisation (utilisé pour que les champs puissent être nuls dans le payload) -->
      <div class="form-group-inline">
        <div class="form-group">
          <label for="inputLatitude" class="form-label">Latitude</label>
          <input
            type="text"
            id="inputLatitude"
            v-model="company.latitude"
            class="form-input"
            placeholder="Ex : 48.8566 (Optionnel)"
          />
        </div>
        <div class="form-group">
          <label for="inputLongitude" class="form-label">Longitude</label>
          <input
            type="text"
            id="inputLongitude"
            v-model="company.longitude"
            class="form-input"
            placeholder="Ex : 2.3522 (Optionnel)"
          />
        </div>
      </div>

      <!-- 7. Description -->
      <div class="form-group">
        <label for="inputDescription" class="form-label">Description</label>
        <textarea
          id="inputDescription"
          v-model="company.description"
          class="form-textarea"
          rows="4"
          placeholder="Brève description de l’entreprise"
          required
        ></textarea>
      </div>

      <!-- 8. Email (Ajouté car c'est un champ important) -->
      <div class="form-group">
        <label for="inputEmail" class="form-label">Email de contact</label>
        <input
          type="email"
          id="inputEmail"
          v-model="company.email_company"
          class="form-input"
          placeholder="contact@societe.com"
          required
        />
      </div>

      <!-- 9. Numéro SIRET -->
      <div class="form-group">
        <label for="inputSiret" class="form-label">Numéro SIRET</label>
        <input
          type="text"
          id="inputSiret"
          v-model="company.n_siret"
          class="form-input"
          placeholder="Ex : 12345678900010"
          required
        />
      </div>

      <!-- 10. Logo -->
      <div class="form-group">
        <label for="inputLogo" class="form-label">Logo (URL)</label>
        <input
          type="text"
          id="inputLogo"
          v-model="company.logo"
          class="form-input"
          placeholder="https://exemple.com/logo.png (Laissez vide pour garder l'ancien)"
        />
      </div>

      <div class="form-actions">
        <button type="submit" class="btn-update" :disabled="isLoading">Mettre à jour</button>
      </div>
    </form>
  </main>
</template>

<style scoped>
/* Couleurs */
:root {
  --primary-color: #007bff;
  --primary-hover: #0056b3;
  --success-color: #28a745;
  --error-color: #dc3545;
  --bg-light: #f8f9fa;
  --white: #fff;
  --gray-dark: #333;
  --gray-medium: #666;
  --border-color: #ccc;
}

.update-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--bg-light);
  min-height: 100vh;
  padding: 50px 20px;
}

/* En-tête */
.update-header {
  text-align: center;
  margin-bottom: 30px;
}

.update-title {
  margin-top: 0;
  font-size: 2.3rem;
  font-weight: 700;
  color: var(--gray-dark);
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-pencil {
  color: var(--primary-color);
  margin-right: 10px;
  width: 28px;
  height: 28px;
}

.update-description {
  color: var(--gray-medium);
  font-size: 1.1rem;
}

/* Formulaire */
.update-form {
  background: var(--white);
  padding: 35px 45px;
  border-radius: 16px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

/* Groupes de champs */
.form-group {
  display: flex;
  flex-direction: column;
}

.form-group-inline {
  display: flex;
  gap: 20px;
}

.form-group-inline .form-group {
  flex: 1;
}

.form-label {
  font-weight: 600;
  color: var(--gray-dark);
  margin-bottom: 8px;
}

.form-input,
.form-textarea {
  border: 1.5px solid var(--border-color);
  border-radius: 10px;
  padding: 10px 15px;
  font-size: 1rem;
  transition:
    border-color 0.3s ease,
    box-shadow 0.3s ease;
  width: 100%;
  box-sizing: border-box; /* Assure que le padding n'augmente pas la taille totale */
}

.form-input:focus,
.form-textarea:focus {
  border-color: var(--primary-color);
  box-shadow: 0 0 8px rgba(0, 123, 255, 0.2);
  outline: none;
}

.form-textarea {
  resize: vertical;
}

/* Bouton */
.form-actions {
  text-align: center;
  margin-top: 15px;
}

.btn-update {
  background: var(--primary-color);
  color: var(--white);
  font-weight: 600;
  padding: 12px 28px;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 6px 15px rgba(0, 123, 255, 0.25);
  min-width: 200px;
}

.btn-update:hover:not(:disabled) {
  background: var(--primary-hover);
  transform: translateY(-2px);
}

.btn-update:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

/* Messages d'état */
.loading-state {
  text-align: center;
  font-size: 1.2rem;
  color: var(--primary-color);
  padding: 20px;
}

.alert {
  padding: 15px;
  margin-bottom: 20px;
  border-radius: 8px;
  font-weight: 600;
  text-align: center;
}

.alert.success {
  background-color: #d4edda;
  color: var(--success-color);
  border: 1px solid #c3e6cb;
}

.alert.error {
  background-color: #f8d7da;
  color: var(--error-color);
  border: 1px solid #f5c6cb;
}

/* Responsive */
@media (max-width: 600px) {
  .update-form {
    width: 100%;
    padding: 25px 15px;
  }

  .update-title {
    font-size: 1.8rem;
  }

  .btn-update {
    width: 100%;
  }

  .form-group-inline {
    flex-direction: column;
  }
}
</style>
