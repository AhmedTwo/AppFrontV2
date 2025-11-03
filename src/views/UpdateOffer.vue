<script setup>
</script>

<template>
  <div class="update-container">
    <div class="update-entete">
      <h1 class="update-title"><i class="fa-solid fa-pen-to-square"></i> MODIFIER L'OFFRE !</h1>
      <p class="update-description">Mettez à jour les informations de l'offre ci-dessous</p>
    </div>

    <form method="POST" class="update-form" action="/offers/updateOffer">
      <input type="hidden" name="id" value="1" />

      <div class="form-group">
        <label for="inputTitre" class="form-label">Titre</label>
        <input type="text" name="inputTitre" id="inputTitre" class="form-input" placeholder="Ex: Développeur Web" />
      </div>

      <div class="form-group">
        <label for="inputPoste" class="form-label">Poste</label>
        <input type="text" name="inputPoste" id="inputPoste" class="form-input" placeholder="Ex: Front-End" />
      </div>

      <div class="form-group">
        <label for="inputAdresse" class="form-label">Adresse</label>
        <input type="text" name="inputAdresse" id="inputAdresse" class="form-input" placeholder="Ex: Paris, France" />
      </div>

      <div class="form-group">
        <label for="inputContrat" class="form-label">Type de contrat</label>
        <select id="inputContrat" name="inputContrat" class="form-select" required>
          <option>CDI</option>
          <option>CDD</option>
          <option>Stage</option>
          <option>Alternance</option>
        </select>
      </div>

      <div class="form-group">
        <label for="inputMission" class="form-label">Mission</label>
        <textarea name="inputMission" id="inputMission" class="form-textarea" rows="4" placeholder="Décrivez la mission..."></textarea>
      </div>

      <div class="form-group">
        <label for="inputDescription" class="form-label">Description</label>
        <textarea name="inputDescription" id="inputDescription" class="form-textarea" rows="4" placeholder="Description détaillée de l'offre..."></textarea>
      </div>

      <div class="form-group">
        <label for="inputTechnologie" class="form-label">Technologie(s)</label>
        <input type="text" name="inputTechnologie" id="inputTechnologie" class="form-input" placeholder="Ex: Vue.js, Laravel, Docker" />
      </div>

      <div class="form-group">
        <label for="inputPositif" class="form-label">Points positifs</label>
        <textarea name="inputPositif" id="inputPositif" class="form-textarea" rows="2" placeholder="Ambiance, flexibilité, avantages..."></textarea>
      </div>

      <div class="form-group">
        <label for="inputNombreParticipant" class="form-label">Nombre de participants</label>
        <input type="number" name="inputNombreParticipant" id="inputNombreParticipant" class="form-input" min="1" placeholder="Ex: 5" />
      </div>

      <div class="form-group">
        <label for="inputDateCreation" class="form-label">Date de création</label>
        <input type="date" name="inputDateCreation" id="inputDateCreation" class="form-input" />
      </div>

      <div class="form-group">
        <label for="inputImage" class="form-label">Image (URL)</label>
        <input type="text" name="inputImage" id="inputImage" class="form-input" placeholder="https://example.com/image.jpg" />
      </div>

      <div class="form-actions">
        <button type="submit" class="btn-update" title="Modifier">Mettre à jour</button>
        <a href="/Dashboard_Company" class="btn-cancel">Annuler</a>
      </div>
    </form>
  </div>
</template>

<style scoped>
.update-container {
  background-color: #f8f9fa;
  border-radius: 15px;
  padding: 40px;
  margin: 40px auto;
  width: 80%;
  max-width: 900px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

/* Entête */
.update-entete {
  text-align: center;
  margin-bottom: 30px;
}

.update-title {
  font-size: 2rem;
  color: #0d6efd;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.update-description {
  font-size: 1rem;
  color: #555;
}

/* Message d’erreur */
.update-error {
  color: red;
  font-weight: 600;
  text-align: center;
  background-color: #ffe5e5;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 25px;
}

/* Formulaire */
.update-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-label {
  font-weight: 600;
  color: #222;
  margin-bottom: 5px;
}

.form-input,
.form-select,
.form-textarea {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 10px 14px;
  font-size: 1rem;
  transition: all 0.3s ease;
  outline: none;
  background-color: white;
}

.form-input:focus,
.form-select:focus,
.form-textarea:focus {
  border-color: #0d6efd;
  box-shadow: 0 0 5px rgba(13, 110, 253, 0.4);
}

/* Bouton Mettre à jour */
.form-actions {
  display: flex;
  justify-content: center;
  margin-top: 15px;
}

.btn-update, .btn-cancel {
  background-color: #0d6efd;
  color: white;
  border: none;
  border-radius: 10px;
  padding: 12px 25px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: flex;
}

.btn-update:hover, .btn-cancel:hover {
  background-color: #084298;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(13, 110, 253, 0.4);
}

/* Responsive */
@media (max-width: 768px) {
  .update-container {
    padding: 25px;
    width: 90%;
  }

  .update-title {
    font-size: 1.6rem;
  }

  .form-input,
  .form-select,
  .form-textarea {
    font-size: 0.95rem;
  }
}
</style>
