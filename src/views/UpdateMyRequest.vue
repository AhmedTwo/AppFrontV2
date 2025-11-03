<script setup>
</script>

<template>
  <div class="update-container">
    <!-- En-tête -->
    <div class="header-section">
      <h1>MODIFIER MA DEMANDE</h1>
      <p class="subtitle">Mettez à jour les informations de votre demande</p>
    </div>

    <!-- Formulaire -->
    <form class="update-form">
      <!-- Informations utilisateur -->
      <div class="form-group">
        <label for="name">Nom complet</label>
        <input type="text" id="name" value="Julien Dupont" />
      </div>

      <div class="form-group">
        <label for="type">Type de demande</label>
        <select id="type">
          <option selected>Stage</option>
          <option>Alternance</option>
          <option>CDI</option>
          <option>CDD</option>
        </select>
      </div>

      <!-- Détails de la demande -->
      <div class="form-group">
        <label for="title">Titre de la demande</label>
        <input type="text" id="title" value="Demande de stage" />
      </div>

      <div class="form-group">
        <label for="description">Description</label>
        <textarea id="description" rows="5">
        Recherche un stage en développement web pour 6 mois.
        </textarea>
      </div>

      <!-- Boutons d'action -->
      <div class="action-buttons">
        <button type="submit" class="btn-save">
            <a href="/MyRequest" style="text-decoration: none; color: white;">Enregistrer les modifications</a>
        </button>
        <a href="/MyRequest" class="btn-cancel">Annuler</a>
      </div>
    </form>
  </div>
</template>

<style scoped>
.update-container {
  max-width: 800px;
  margin: 50px auto;
  background: white;
  padding: 40px;
  border-radius: 20px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

/* En-tête */
.header-section {
  text-align: center;
  margin-bottom: 40px;
}

h1 {
  font-size: 2rem;
  font-weight: 700;
  color: black;
}

.subtitle {
  font-size: 1rem;
  color: #666;
  font-weight: 500;
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
  gap: 6px;
}

.form-group-inline {
  display: flex;
  gap: 20px;
  justify-content: space-between;
}

.form-group.small {
  flex: 1;
}

label {
  font-weight: 600;
  color: #333;
}

input,
select,
textarea {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 10px 14px;
  font-size: 1rem;
  transition: border 0.3s ease;
}

input:focus,
select:focus,
textarea:focus {
  border-color: #0066ff;
  outline: none;
  box-shadow: 0 0 4px rgba(0, 102, 255, 0.3);
}

/* Boutons */
.action-buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;
}

.btn-save {
  background: #0066ff;
  color: white;
  border: none;
  border-radius: 10px;
  padding: 12px 24px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 10px rgba(0, 102, 255, 0.4);
}

.btn-save:hover {
  background: #0052cc;
  transform: translateY(-2px);
}

.btn-cancel {
  background: white;
  color: #666;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 12px 24px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
}

.btn-cancel:hover {
  background: #f5f5f5;
  color: black;
}

/* Responsive */
@media (max-width: 768px) {
  .update-container {
    padding: 25px;
  }

  .form-group-inline {
    flex-direction: column;
  }

  .btn-save,
  .btn-cancel {
    width: 100%;
    text-align: center;
  }
}
</style>
