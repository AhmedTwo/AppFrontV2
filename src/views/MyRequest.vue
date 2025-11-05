<script setup>
import ImagesLogo from '../assets/images/logo_portal_job.png'
</script>

<template>
  <div class="header-section">
    <h1>MES DEMANDES</h1>
    <p class="subtitle">Gérez toutes vos demandes en un seul endroit</p>
  </div>

  <div class="action-bar">
    <a href="/myRequest/AddMyRequest" class="btn-add">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        fill="currentColor"
        viewBox="0 0 16 16"
      >
        <path
          d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"
        />
        <path
          d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"
        />
      </svg>
      Ajouter une demande
    </a>
  </div>

  <div class="requests-grid">
    <!-- Exemple demande utilisateur -->
    <div class="request-card">
      <div class="card-header">
        <div class="user-avatar">
          <img :src="ImagesLogo" alt="Photo Utilisateur" />
        </div>
        <div class="user-info">
          <h3 class="user-name">Julien Dupont</h3>
          <span class="badge badge-type">Stage</span>
        </div>
      </div>

      <div class="card-body">
        <h4 class="request-title">Demande de stage</h4>
        <p class="request-description">Recherche un stage en développement web pour 6 mois.</p>

        <div class="request-meta">
          <div class="meta-item">
            <svg
              class="icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l4 2" />
            </svg>
            <span>15/10/2025</span>
          </div>
          <span class="badge badge-pending">En attente</span>
        </div>
      </div>

      <div class="card-footer">
        <button type="button" class="btn-update" title="Modifier cette demande">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-pencil-square"
            viewBox="0 0 16 16"
          >
            <path
              d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
            />
            <path
              fill-rule="evenodd"
              d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
            />
          </svg>
          <a href="/myRequest/UpdateMyRequest" style="text-decoration: none">Modifier</a>
        </button>
        <button type="button" class="btn-delete" title="Supprimer cette demande">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"
            />
          </svg>
          Supprimer
        </button>
      </div>
    </div>

    <!-- Exemple demande entreprise -->
    <div class="request-card">
      <div class="card-header">
        <div class="user-avatar">
          <img :src="ImagesLogo" alt="Logo Entreprise" />
        </div>
        <div class="user-info">
          <h3 class="user-name">TechNova</h3>
          <span class="badge badge-type">CDI</span>
        </div>
      </div>

      <div class="card-body">
        <h4 class="request-title">Recrutement développeur</h4>
        <p class="request-description">
          Recherche un développeur fullstack pour renforcer l'équipe.
        </p>

        <div class="request-meta">
          <div class="meta-item">
            <svg
              class="icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l4 2" />
            </svg>
            <span>20/10/2025</span>
          </div>
          <span class="badge badge-active">En cours</span>
        </div>
      </div>

      <div class="card-footer">
        <button type="button" class="btn-update" title="Modifier cette demande">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-pencil-square"
            viewBox="0 0 16 16"
          >
            <path
              d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
            />
            <path
              fill-rule="evenodd"
              d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
            />
          </svg>
          <a href="/myRequest/UpdateMyRequest" style="text-decoration: none">Modifier</a>
        </button>
        <button type="button" class="btn-delete" title="Supprimer cette demande">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"
            />
          </svg>
          Supprimer
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* En-tête */
.header-section {
  text-align: center;
  margin-top: 3%;
}

h1 {
  font-size: 2.2rem;
  font-weight: 700;
  color: black;
  letter-spacing: -0.5px;
}

.subtitle {
  font-size: 1rem;
  color: #666;
  font-weight: 500;
}

/* Barre d'action */
.action-bar {
  max-width: 67%;
  margin: 0 auto 30px;
}

.btn-add {
  display: inline-flex;
  gap: 8px;
  padding: 12px 20px;
  background: white;
  color: #0066ff;
  border: 2px solid #0066ff;
  border-radius: 10px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 102, 255, 0.521);
}

.btn-add:hover {
  background: #0066ff;
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 102, 255, 0.3);
}

.btn-add svg {
  transition: transform 0.3s ease;
}

.btn-add:hover svg {
  transform: rotate(90deg);
}

/* Grille de demandes */
.requests-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  /* creation auto, d'autant de colonne possible dans l'espace dispo, chacune fait min 260px et max une part egal de l'espace restant */
  gap: 24px;
  max-width: 1300px;
  margin: 0 auto;
}

/* Carte de demande */
.request-card {
  background: white;
  border-radius: 8%;
  overflow: hidden;
  transition: all 0.3s;
  border: 1px solid rgba(0, 0, 0, 0.253);
}

.request-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.445);
  border-color: #0066ff;
}

/* En-tête de carte */
.card-header {
  padding: 20px;
  background: linear-gradient(135deg, #ffffff 50%, #d3d7ec 0%);
  border-bottom: 2px solid black;
  display: flex;
  align-items: center;
}

.user-avatar {
  width: 90px;
  height: 80px;
  border-radius: 30%;
  border: 3px solid white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.685);
}

.user-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* optionnel */
}

.user-info {
  flex: 1;
  flex-direction: column;
}

.user-name {
  font-size: 1.1rem;
  font-weight: 600;
  color: black;
  margin: 0;
}

/* Corps de carte */
.card-body {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.request-title {
  font-size: 1.15rem;
  font-weight: 600;
  color: black;
  margin: 0;
}

.request-description {
  font-size: 0.9rem;
  color: #666;
}

.request-meta {
  display: flex;
  justify-content: space-between;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 6px;
  color: #666;
}

.icon {
  width: 20px;
  height: 20px;
  color: #0066ff;
}

/* Badges */
.badge {
  padding: 4px 12px;
  border-radius: 20px;
  font-weight: 600;
}

.badge-type {
  background: #e3f2fd;
  color: #1976d2;
}

.badge-pending {
  background: #fff3cd;
  color: #856404;
}

.badge-active {
  background: #d4edda;
  color: #155724;
}

/* Pied de carte */
.card-footer {
  padding: 20px 25px;
  border-top: 2px solid #f0f0f0;
  display: flex;
  justify-content: space-evenly;
}

.btn-delete {
  display: flex;
  gap: 6px;
  padding: 8px 16px;
  background: transparent;
  color: #dc3545;
  border: 1px solid #dc3545;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-delete:hover {
  background: #dc3545;
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(220, 53, 69, 0.3);
}

.btn-update {
  /* Propriétés de base communes à .btn-delete */
  display: flex;
  gap: 6px;
  padding: 8px 16px;
  background: transparent;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  /* Couleur spécifique pour l'édition/mise à jour (bleu primaire) */
  color: #007bff; /* Bleu standard */
  border: 1px solid #007bff;
}

.btn-update:hover {
  /* Effet au survol */
  background: #007bff;
  color: white; /* Texte blanc sur fond bleu */
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 123, 255, 0.3); /* Ombre avec la couleur bleue */
}

/* Responsive */
@media (max-width: 1024px) {
  .requests-grid {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  }
}

@media (max-width: 768px) {
  .main-content {
    padding: 30px 15px;
  }

  h1 {
    font-size: 1.8rem;
  }

  .requests-grid {
    grid-template-columns: 1fr;
  }

  .action-bar {
    justify-content: center;
  }

  .btn-add {
    width: 100%;
    justify-content: center;
  }
}
</style>
