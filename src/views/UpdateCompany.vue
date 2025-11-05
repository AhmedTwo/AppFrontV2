<script setup>
import { ref } from 'vue'

const company = ref({
  name: '',
  number_of_employees: '',
  industry: '',
  address: '',
  latitude: '',
  longitude: '',
  description: '',
  n_siret: '',
  logo: '',
})
</script>

<template>
  <main class="update-container">
    <div class="update-header">
      <h1 class="update-title"><i class="fa-solid fa-pen-to-square"></i> MODIFIER LA SOCIÉTÉ</h1>
      <p class="update-description">Mettez à jour les informations de la société ci-dessous.</p>
    </div>

    <form class="update-form">
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

      <div class="form-group">
        <label for="inputNbEmploye" class="form-label">Nombre d’employés</label>
        <textarea
          id="inputNbEmploye"
          v-model="company.number_of_employees"
          class="form-textarea"
          rows="2"
          placeholder="Ex : 150 employés"
          required
        ></textarea>
      </div>

      <div class="form-group">
        <label for="inputDomaine" class="form-label">Domaine</label>
        <textarea
          id="inputDomaine"
          v-model="company.industry"
          class="form-textarea"
          rows="2"
          placeholder="Ex : Technologie, Finance..."
          required
        ></textarea>
      </div>

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

      <div class="form-group">
        <label for="inputLatitude" class="form-label">Latitude</label>
        <input
          type="text"
          id="inputLatitude"
          v-model="company.latitude"
          class="form-input"
          placeholder="Ex : 48.8566"
          required
        />
      </div>

      <div class="form-group">
        <label for="inputLongitude" class="form-label">Longitude</label>
        <input
          type="text"
          id="inputLongitude"
          v-model="company.longitude"
          class="form-input"
          placeholder="Ex : 2.3522"
          required
        />
      </div>

      <div class="form-group">
        <label for="inputDescription" class="form-label">Description</label>
        <input
          type="text"
          id="inputDescription"
          v-model="company.description"
          class="form-input"
          placeholder="Brève description de l’entreprise"
          required
        />
      </div>

      <div class="form-group">
        <label for="inputSiret" class="form-label">Numéro SIRET</label>
        <input
          type="text"
          id="inputSiret"
          v-model="company.n_siret"
          class="form-input"
          placeholder="Ex : 123 456 789 00010"
          required
        />
      </div>

      <div class="form-group">
        <label for="inputLogo" class="form-label">Logo (URL)</label>
        <input
          type="text"
          id="inputLogo"
          v-model="company.logo"
          class="form-input"
          placeholder="https://exemple.com/logo.png"
        />
      </div>

      <div class="form-actions">
        <button type="submit" class="btn-update">Mettre à jour</button>
      </div>
    </form>
  </main>
</template>

<style scoped>
.update-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f8f9fa;
  min-height: 100vh;
  padding: 50px 0;
}

/* En-tête */
.update-header {
  text-align: center;
}

.update-title {
  margin-top: -4%;
  font-size: 2.3rem;
  font-weight: 700;
}

.update-title i {
  color: #007bff;
  margin-right: 10px;
}

.update-description {
  color: #666;
  font-size: 1.1rem;
}

/* Formulaire */
.update-form {
  background: #fff;
  padding: 35px 45px;
  border-radius: 16px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  width: 80%;
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

.form-label {
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
}

.form-input,
.form-textarea {
  border: 1.5px solid #ccc;
  border-radius: 10px;
  padding: 10px 15px;
  font-size: 1rem;
  transition:
    border-color 0.3s ease,
    box-shadow 0.3s ease;
}

.form-input:focus,
.form-textarea:focus {
  border-color: #007bff;
  box-shadow: 0 0 8px rgba(0, 123, 255, 0.2);
  outline: none;
}

/* Bouton */
.form-actions {
  text-align: center;
  margin-top: 15px;
}

.btn-update {
  background: #007bff;
  color: white;
  font-weight: 600;
  padding: 12px 28px;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 6px 15px rgba(0, 123, 255, 0.25);
}

.btn-update:hover {
  background: #0056b3;
  transform: translateY(-2px);
}

/* Responsive */
@media (max-width: 600px) {
  .update-form {
    width: 90%;
    padding: 25px;
  }

  .update-title {
    font-size: 1.8rem;
  }

  .btn-update {
    width: 100%;
  }
}
</style>
