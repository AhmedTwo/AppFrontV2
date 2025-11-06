<script setup></script>

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
        <input
          type="text"
          name="inputTitre"
          id="inputTitre"
          class="form-input"
          placeholder="Ex: Développeur Web"
        />
      </div>

      <div class="form-group">
        <label for="inputPoste" class="form-label">Poste</label>
        <input
          type="text"
          name="inputPoste"
          id="inputPoste"
          class="form-input"
          placeholder="Ex: Front-End"
        />
      </div>

      <div class="form-group">
        <label for="inputAdresse" class="form-label">Adresse</label>
        <input
          type="text"
          name="inputAdresse"
          id="inputAdresse"
          class="form-input"
          placeholder="Ex: Paris, France"
        />
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
        <textarea
          name="inputMission"
          id="inputMission"
          class="form-textarea"
          rows="4"
          placeholder="Décrivez la mission..."
        ></textarea>
      </div>

      <div class="form-group">
        <label for="inputDescription" class="form-label">Description</label>
        <textarea
          name="inputDescription"
          id="inputDescription"
          class="form-textarea"
          rows="4"
          placeholder="Description détaillée de l'offre..."
        ></textarea>
      </div>

      <div class="form-group">
        <label for="inputTechnologie" class="form-label">Technologie(s)</label>
        <input
          type="text"
          name="inputTechnologie"
          id="inputTechnologie"
          class="form-input"
          placeholder="Ex: Vue.js, Laravel, Docker"
        />
      </div>

      <div class="form-group">
        <label for="inputPositif" class="form-label">Points positifs</label>
        <textarea
          name="inputPositif"
          id="inputPositif"
          class="form-textarea"
          rows="2"
          placeholder="Ambiance, flexibilité, avantages..."
        ></textarea>
      </div>

      <div class="form-group">
        <label for="inputNombreParticipant" class="form-label">Nombre de participants</label>
        <input
          type="number"
          name="inputNombreParticipant"
          id="inputNombreParticipant"
          class="form-input"
          min="1"
          placeholder="Ex: 5"
        />
      </div>

      <div class="form-group">
        <label for="inputDateCreation" class="form-label">Date de création</label>
        <input type="date" name="inputDateCreation" id="inputDateCreation" class="form-input" />
      </div>

      <div class="form-group">
        <label for="inputImage" class="form-label">Image (URL)</label>
        <input
          type="text"
          name="inputImage"
          id="inputImage"
          class="form-input"
          placeholder="https://example.com/image.jpg"
        />
      </div>

      <div class="form-actions">
        <button type="submit" class="btn-update" title="Modifier">Mettre à jour</button>
        <a href="/Dashboard_Company" class="btn-cancel">Annuler</a>
      </div>
    </form>
  </div>
</template>

<style scoped>
/* COULEURS */
/* Bleu principal (Primaire): #0d6efd */
/* Fond de page/carte: #f8f9fa / #ffffff */
/* Texte: #212529 */

/* -------------------
   CONTENEUR GLOBAL ET CARTE
   ------------------- */

.update-container {
  background-color: #ffffff; /* Fond blanc */
  border-radius: 12px;
  padding: 30px; /* Padding réduit */
  margin: 30px auto; /* Marge réduite */
  width: 90%;
  max-width: 850px; /* Largeur optimale pour 2 colonnes */
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1); /* Ombre légère */
  min-height: 80vh; /* Ajustement visuel pour le centrage */
}

/* -------------------
   EN-TÊTE
   ------------------- */
.update-entete {
  text-align: center;
  margin-bottom: 20px; /* Marge réduite */
  padding-bottom: 10px;
  border-bottom: 1px solid #e9ecef;
}

.update-title {
  font-size: 1.8rem; /* Titre plus petit */
  color: #0d6efd;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin: 0;
}

.update-description {
  font-size: 0.95rem;
  color: #64748b; /* Gris subtil */
  margin-top: 5px;
}

/* -------------------
   FORMULAIRE (GRILLE 2 COLONNES)
   ------------------- */

.update-form {
  display: flex;
  flex-wrap: wrap;
  gap: 15px 25px; /* Gap vertical et horizontal ajusté */
  justify-content: space-between;
}

.form-group {
  display: flex;
  flex-direction: column;
  /* La plupart des champs tiennent sur 2 colonnes, sauf les textareas */
  flex: 1 1 calc(50% - 12.5px);
}

/* Textareas (Mission, Description, Points Positifs) prennent toute la largeur */
.form-group:nth-child(5), /* Mission */
.form-group:nth-child(6), /* Description */
.form-group:nth-child(8) /* Points positifs */ {
  flex: 1 1 100%;
}

.form-label {
  font-weight: 600;
  color: #212529;
  margin-bottom: 5px;
  font-size: 0.9rem; /* Label plus petit */
}

.form-input,
.form-select,
.form-textarea {
  border: 1px solid #ced4da;
  border-radius: 6px; /* Coins légèrement plus petits */
  padding: 10px 12px; /* Padding réduit */
  font-size: 0.95rem;
  transition: all 0.3s ease;
  outline: none;
  background-color: white;
  width: 95%;
}

.form-input:focus,
.form-select:focus,
.form-textarea:focus {
  border-color: #0d6efd;
  box-shadow: 0 0 4px rgba(13, 110, 253, 0.3);
}

/* -------------------
   ACTIONS ET BOUTONS
   ------------------- */

.form-actions {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 25px;
  width: 100%; /* Prend toute la largeur de la grille */
}

.btn-update {
  background-color: #0d6efd;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 10px 20px; /* Padding ajusté */
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  box-shadow: 0 2px 8px rgba(13, 110, 253, 0.3);
}

.btn-cancel {
  background-color: #6c757d; /* Gris pour l'annulation */
  color: white;
  border: none;
  border-radius: 8px;
  padding: 10px 20px;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
}

.btn-update:hover {
  background-color: #0b5ed7;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(13, 110, 253, 0.4);
}

.btn-cancel:hover {
  background-color: #5a6268;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

/* -------------------
   RESPONSIVE
   ------------------- */

@media (max-width: 768px) {
  .update-container {
    padding: 20px;
    width: 95%;
  }

  .update-title {
    font-size: 1.6rem;
  }

  /* Tous les champs passent en une seule colonne */
  .form-group {
    flex: 1 1 100%;
  }
}
</style>
