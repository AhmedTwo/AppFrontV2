<script setup></script>

<template>
  <main class="page-container compact">
    <div class="content-wrapper">
      <div class="contact-card-pure">
        <h1 class="main-title compact-title">Contactez-nous 💬</h1>

        <div class="contact-content-flex">
          <div class="contact-info-panel">
            <h2 class="section-title compact-section-title">Nos Informations</h2>

            <div class="contact-grid">
              <div class="info-item-pure compact-info">
                <i class="bi bi-telephone-fill icon icon-success compact-icon"></i>
                <div>
                  <h5 class="info-title compact-info-title">Téléphone</h5>
                  <p class="info-text compact-info-text">+33 1 23 45 67 89</p>
                </div>
              </div>

              <div class="info-item-pure compact-info">
                <i class="bi bi-envelope-fill icon icon-danger compact-icon"></i>
                <div>
                  <h5 class="info-title compact-info-title">Email</h5>
                  <p class="info-text compact-info-text">contact@portal_job.com</p>
                </div>
              </div>

              <div class="info-item-pure compact-info">
                <i class="bi bi-clock-fill icon icon-warning compact-icon"></i>
                <div>
                  <h5 class="info-title compact-info-title">Horaires</h5>
                  <p class="info-text compact-info-text">Lun. - Ven.: 9h-18h / Samedi: 10h-14h</p>
                </div>
              </div>
            </div>
          </div>

          <div class="contact-form-panel">
            <h2 class="section-title compact-section-title">Un message pour Portal_Job ?</h2>
            <form @submit.prevent="submitForm" class="contact-form compact-form">
              <div class="form-group full-width compact-form-group">
                <label for="name">Nom :</label>
                <input type="text" id="name" required />
              </div>

              <div class="form-group full-width compact-form-group">
                <label for="email">Email :</label>
                <input type="email" id="email" required />
              </div>

              <div class="form-group full-width compact-form-group">
                <label for="subject">Sujet :</label>
                <input type="text" id="subject" required />
              </div>

              <div class="form-group full-width compact-form-group">
                <label for="message">Message :</label>
                <textarea id="message" rows="3" required></textarea>
              </div>

              <div class="form-group full-width submit-group compact-submit-group">
                <button type="submit" class="submit-button compact-button">Envoyer</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
/* -------------------
   STRUCTURE GÉNÉRALE
   ------------------- */

.page-container {
  padding: 70px 0; /* Réduction du padding général */
  background-color: #f8f9fa;
  display: flex;
  justify-content: center;
}

.content-wrapper {
  width: 100%;
  max-width: 1000px; /* Légère réduction de la largeur max */
  padding: 0 10px; /* Réduction du padding latéral */
}

/* -------------------
   CARTE DE CONTACT & TITRES
   ------------------- */

.contact-card-pure {
  background-color: white;
  padding: 30px; /* Réduction du padding de la carte */
  border-radius: 12px; /* Léger ajustement du radius */
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
}

.main-title {
  text-align: center;
  font-size: 2.2rem; /* Réduction de la taille du titre principal */
  color: #0d6efd;
  font-weight: bold;
  margin-bottom: 30px; /* Réduction de la marge */
  padding-bottom: 10px;
  border-bottom: 2px solid #0d6efd; /* Bordure plus fine */
}

.section-title {
  font-size: 1.5rem; /* Réduction de la taille des sous-titres */
  color: #343a40;
  margin-bottom: 20px;
  font-weight: 600;
  padding-bottom: 8px;
  border-bottom: 1px solid #e9ecef;
}

/* -------------------
   DISPOSITION CÔTE À CÔTE (FLEXBOX)
   ------------------- */

.contact-content-flex {
  display: flex;
  gap: 30px; /* Réduction de l'espace entre les colonnes */
}

.contact-info-panel {
  flex: 1;
  min-width: 250px;
}

.contact-form-panel {
  flex: 1.5;
}

/* -------------------
   GRILLE D'INFORMATIONS (Coordonnées)
   ------------------- */

.contact-grid {
  display: flex;
  flex-direction: column;
  gap: 15px; /* Réduction de l'espace entre les éléments d'info */
}

.info-item-pure {
  display: flex;
  align-items: center;
  background-color: #e9ecef;
  padding: 15px; /* Réduction du padding de l'info item */
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.icon {
  font-size: 2rem; /* Réduction de la taille de l'icône */
  margin-right: 15px;
  min-width: 40px;
}

.info-title {
  font-weight: bold;
  margin-bottom: 3px;
  font-size: 1rem; /* Réduction de la taille du titre d'info */
}

.info-text {
  margin: 0;
  color: #6c757d;
  font-size: 0.9rem; /* Réduction de la taille du texte d'info */
}

/* -------------------
   FORMULAIRE DE CONTACT
   ------------------- */

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 10px; /* Réduction de l'espace entre les champs */
}

.form-group {
  display: flex;
  flex-direction: column;
  width: 100%;
}

label {
  margin-bottom: 5px;
  font-weight: 600;
  color: #343a40;
  font-size: 0.95rem;
}

input,
textarea {
  padding: 10px; /* Réduction du padding des inputs */
  border: 1px solid #ced4da;
  border-radius: 5px;
  font-size: 0.95rem;
}

textarea {
  resize: vertical;
  rows: 3; /* Réduction des lignes par défaut dans le HTML */
}

.submit-group {
  margin-top: 15px;
}

.submit-button {
  background-color: #0d6efd;
  color: white;
  padding: 10px 20px; /* Réduction du padding du bouton */
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  font-weight: bold;
}

/* -------------------
   COULEURS DES ICÔNES & HOVERS
   ------------------- */
.contact-card-pure:hover {
  transform: none;
} /* Suppression de l'effet de survol pour la compacité */
.icon-success {
  color: #198754;
}
.icon-danger {
  color: #dc3545;
}
.icon-warning {
  color: #ffc107;
}
.submit-button:hover {
  background-color: #0b5ed7;
}
input:focus,
textarea:focus {
  border-color: #0d6efd;
  box-shadow: 0 0 0 0.2rem rgba(13, 110, 253, 0.2);
}

/* -------------------
   RESPONSIVE PURE CSS
   ------------------- */

@media (max-width: 992px) {
  /* Le mode colonne est conservé pour les écrans de taille moyenne */
  .contact-content-flex {
    flex-direction: column;
    gap: 20px;
  }
}

@media (max-width: 768px) {
  .contact-card-pure {
    padding: 20px;
  }
}

/* Le responsive pour les icônes en mode colonne sur très petit écran est conservé */
@media (max-width: 480px) {
  .info-item-pure {
    flex-direction: column;
    text-align: center;
  }
  .icon {
    margin: 0 0 8px 0;
  }
}
</style>
