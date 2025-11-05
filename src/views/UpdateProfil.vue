<template>
  <div class="update-profil-container">
    <h2>Modifier mon Profil</h2>

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

      <hr />

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

      <div class="form-group cv-upload">
        <label for="cv-upload">Mettre à jour mon CV</label>
        <input id="cv-upload" type="file" accept=".pdf,.doc,.docx" />
        <p class="current-cv-status">CV actuel : <span>CV_Seghiri_Ahmed.pdf</span></p>
      </div>

      <div>
        <label for="disponible">Disponibilité : </label>
        <input id="disponible" type="checkbox" checked />
      </div>

      <div class="form-actions">
        <button type="submit" class="btn-save">
          <a href="/Profil">Enregistrer les modifications</a>
        </button>
      </div>
    </form>
  </div>
</template>

<style scoped>
.update-profil-container {
  background-color: #ffffff;
  border-radius: 15px;
  padding: 2.5rem 3rem;
  max-width: 600px;
  margin: 3% auto;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.update-profil-container h2 {
  font-size: 2rem;
  color: #0d6efd;
  margin-bottom: 2rem;
  text-align: center;
  font-weight: 700;
}

.profil-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group label {
  font-weight: 600;
  color: #333;
  margin-bottom: 0.4rem;
  font-size: 1rem;
}

.form-group input[type='text'],
.form-group input[type='email'],
.form-group input[type='tel'],
.form-group input[type='file'] {
  padding: 10px 15px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  transition:
    border-color 0.3s,
    box-shadow 0.3s;
}

.form-group input:focus {
  border-color: #0d6efd;
  box-shadow: 0 0 0 3px rgba(13, 110, 253, 0.2);
  outline: none;
}

/* Photo Upload Section */
.photo-upload-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.profil-photo-preview {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #0d6efd;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.btn-change-photo {
  background-color: #0d6efd;
  color: white;
  padding: 8px 18px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 0.95rem;
  transition: background-color 0.3s;
}

.btn-change-photo:hover {
  background-color: #0a58ca;
}

/* CV Upload Section */
.current-cv-status {
  font-size: 0.9rem;
  color: #666;
  margin-top: 0.5rem;
}

.current-cv-status span {
  font-weight: 500;
  color: #28a745;
}

/* Boutons d'action */
.form-actions {
  margin-top: 2rem;
  text-align: center;
}

.btn-save {
  background: linear-gradient(135deg, #0d6efd, #0a58ca);
  color: #fff;
  padding: 12px 30px;
  font-size: 1.1rem;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(13, 110, 253, 0.3);
  font-weight: 600;
}

.btn-save:hover {
  background: linear-gradient(135deg, #0a58ca, #0942a1);
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(13, 110, 253, 0.45);
}

.btn-save a {
  color: #fff;
  text-decoration: none;
}

/* Media Queries */
@media (max-width: 768px) {
  .update-profil-container {
    max-width: 90%;
    padding: 2rem 1.5rem;
  }
}
@media (max-width: 480px) {
  .update-profil-container {
    padding: 1.5rem 1rem;
    margin-top: 5%;
  }

  .update-profil-container h2 {
    font-size: 1.5rem;
  }

  .btn-save {
    width: 100%;
    padding: 10px;
    font-size: 1rem;
  }
}
</style>

<script setup></script>
