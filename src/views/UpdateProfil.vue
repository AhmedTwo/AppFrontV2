<script setup></script>

<template>
  <div class="page-background">
    <div class="update-profil-container">
      <h2 class="form-header">Modifier mon Profil</h2>

      <form class="profil-form">
        <div class="photo-upload-section">
          <input type="file" id="photoInput" accept="image/jpeg, image/png" style="display: none" />

          <button
            type="button"
            onclick="document.getElementById('photoInput').click()"
            class="btn-change-photo"
          >
            Changer la photo
          </button>
        </div>

        <hr class="separator" />

        <div class="form-group">
          <label for="prenomNom">Nom & Prénom</label>
          <input id="prenomNom" type="text" value="Seghiri Ahmed" required />
        </div>

        <div class="form-group">
          <label for="email">Email</label>
          <input id="email" type="email" value="seghiriahmed9@gmail.com" required />
        </div>

        <div class="form-group">
          <label for="telephone">Téléphone</label>
          <input id="telephone" type="tel" value="06 12 34 56 78" />
        </div>

        <div class="form-group">
          <label for="ville">Ville</label>
          <input id="ville" type="text" value="Paris (75000)" />
        </div>

        <div class="form-group">
          <label for="qualification">Qualification / Poste</label>
          <input id="qualification" type="text" value="Ingénieur logiciel" />
        </div>

        <div class="form-group cv-upload-group">
          <label for="cv-upload" class="cv-label">Mettre à jour mon CV</label>
          <input id="cv-upload" type="file" accept=".pdf,.doc,.docx" />
          <p class="current-cv-status">
            CV actuel : <span class="cv-filename">CV_Seghiri_Ahmed.pdf</span>
          </p>
        </div>

        <div class="form-group checkbox-group">
          <label for="disponible">
            <input id="disponible" type="checkbox" checked />
            Disponible immédiatement pour de nouvelles opportunités
          </label>
        </div>

        <div class="form-actions">
          <button type="submit" class="btn-save">Enregistrer les modifications</button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
/* COULEURS */
/* Bleu principal: #0d6efd */
/* Fond de page: #f8f9fa */
/* Vert Succès: #28a745 */
/* Texte: #212529 */

/* -------------------
   CONTENEUR GLOBAL
   ------------------- */
.page-background {
  background-color: #f8f9fa;
  padding: 20px 0;
  min-height: 100vh;
}

.update-profil-container {
  background-color: #ffffff;
  border-radius: 12px;
  padding: 30px 25px; /* Padding réduit pour la compacité */
  max-width: 500px; /* Largeur réduite */
  margin: 30px auto;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
}

.form-header {
  font-size: 1.8rem; /* Titre réduit */
  color: #0d6efd;
  margin-bottom: 20px;
  text-align: center;
  font-weight: 700;
  padding-bottom: 10px;
  border-bottom: 1px solid #e9ecef;
}

/* -------------------
   FORMULAIRE GÉNÉRAL
   ------------------- */
.profil-form {
  display: flex;
  flex-direction: column;
  gap: 15px; /* Espacement réduit */
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group label {
  font-weight: 600;
  color: #212529;
  margin-bottom: 5px; /* Marge réduite */
  font-size: 0.95rem;
}

/* Styles des Inputs/Fichiers */
.form-group input:not([type='checkbox']):not([type='file']) {
  padding: 10px 12px;
  border: 1px solid #ced4da;
  border-radius: 6px;
  font-size: 0.95rem;
  transition:
    border-color 0.3s,
    box-shadow 0.3s;
}

.form-group input:focus {
  border-color: #0d6efd;
  box-shadow: 0 0 0 2px rgba(13, 110, 253, 0.2);
  outline: none;
}

/* Séparateur */
.separator {
  border: 0;
  height: 1px;
  background: #e9ecef;
  margin: 10px 0 20px;
}

/* -------------------
   SECTION PHOTO DE PROFIL
   ------------------- */
.photo-upload-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
}

.photo-preview-wrapper {
  position: relative;
  width: 100px; /* Taille réduite */
  height: 100px;
  margin-bottom: 5px;
}

.profil-photo-preview {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #0d6efd;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.btn-change-photo {
  background-color: #0d6efd;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background-color 0.3s;
}

.btn-change-photo:hover {
  background-color: #0a58ca;
}

/* -------------------
   SECTION CV & DISPONIBILITÉ
   ------------------- */
.cv-upload-group input[type='file'] {
  /* Style pour que le champ de fichier soit visible et stylé */
  border: 1px solid #ced4da;
  border-radius: 6px;
  padding: 8px;
  background-color: #f8f9fa;
}

.current-cv-status {
  font-size: 0.85rem;
  color: #6c757d;
  margin-top: 5px;
}

.cv-filename {
  font-weight: 500;
  color: #28a745;
}

/* Checkbox (Disponibilité) */
.checkbox-group label {
  display: flex;
  align-items: center;
  font-weight: normal; /* moins d'emphase sur le label de la checkbox */
  cursor: pointer;
}

.checkbox-group input[type='checkbox'] {
  width: 16px;
  height: 16px;
  margin-right: 10px;
  accent-color: #0d6efd;
  cursor: pointer;
}

/* -------------------
   BOUTONS D'ACTION
   ------------------- */
.form-actions {
  margin-top: 20px;
  text-align: center;
}

.btn-save {
  background: linear-gradient(
    135deg,
    #198754,
    #157347
  ); /* Changement de couleur au vert pour l'enregistrement */
  color: #fff;
  padding: 10px 25px; /* Padding ajusté */
  font-size: 1rem;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 10px rgba(25, 135, 84, 0.3);
  font-weight: 700;
  width: 100%;
}

.btn-save:hover {
  background: linear-gradient(135deg, #157347, #0f5132);
  transform: translateY(-2px);
  box-shadow: 0 6px 14px rgba(25, 135, 84, 0.45);
}

.btn-save a {
  color: inherit; /* Utilise la couleur du bouton (blanc) */
  text-decoration: none;
  display: block;
}

/* -------------------
   MEDIA QUERIES COMPACTES
   ------------------- */
@media (max-width: 550px) {
  .update-profil-container {
    max-width: 95%;
    padding: 20px 15px;
  }
}
</style>
