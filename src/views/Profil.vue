<script setup>
import ImagesUser from '../assets/images/userDefault.jpeg'

import { onMounted, ref } from 'vue'
import axios from 'axios'
// on importe useRoute de vue-router pour accéder aux paramètres de l'URL
import { useRoute } from 'vue-router'

const route = useRoute()
const token = localStorage.getItem('auth_token')

// on change le nom de la variable pour stocker un seul objet
const user = ref(null)

const readCompany = async () => {
  const userId = route.params.id

  if (!userId) {
    console.error('ID de user non trouvé dans les paramètres de la route.')
    return
  }

  try {
    // on apl l'endpoint spécifique par ID (selon votre API Laravel)
    const responses = await axios.get(`http://127.0.0.1:8000/api/userById/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    // on stock l'objet unique dans la variable 'user'
    user.value = responses.data.data
    console.log(user.value)
  } catch (err) {
    console.log('Erreur lors de la récupération des détails de user par ID :', err)
  }
}

onMounted(readCompany)
</script>

<template>
  <div class="page-background-profil" v-if="user">
    <div class="profil-container">
      <div class="photo-edit-zone">
        <img class="profil-photo" :src="ImagesUser" alt="Photo de profil" />
        <a
          :href="`/Profil/UpdateProfil/${user.id}`"
          class="btn-edit-float"
          title="Modifier le profil"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zM12 14c-2.67 0-8 1.34-8 4v2h8.5l1.5-1.5V14zM20.7 14.35l-1.05-1.05c-.2-.2-.51-.2-.71 0l-4.34 4.34V20h2.36l4.34-4.34c.19-.2.19-.51 0-.71z"
            />
          </svg>
        </a>
      </div>

      <div class="profil-info">
        <h2 class="user-name">{{ user.nom }} {{ user.prenom }}</h2>
        <p class="user-qualification">{{ user.qualification }}</p>

        <hr class="separator" />

        <div class="info-group">
          <p class="info-item">
            <svg class="info-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
                fill="currentColor"
              />
            </svg>
            <span>Email :</span>
            <a href="mailto:seghiriahmed9@gmail.com" class="info-value email-link">{{
              user.email
            }}</a>
          </p>
          <p class="info-item">
            <svg class="info-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.46.57 3.57.12.35.03.74-.25 1.02l-2.2 2.2z"
                fill="currentColor"
              />
            </svg>
            <span>Téléphone :</span>
            <span class="info-value">{{ user.telephone }}</span>
          </p>
          <p class="info-item">
            <svg class="info-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                fill="currentColor"
              />
            </svg>
            <span>Ville :</span>
            <span class="info-value">{{ user.ville }} ({{ user.code_postal }})</span>
          </p>
        </div>

        <hr class="separator" />

        <div class="status-group">
          <p class="info-item">
            <svg class="info-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"
                fill="currentColor"
              />
            </svg>
            <span>CV :</span>
            <a href="#" target="_blank" class="cv-link">Télécharger</a>
          </p>
          <p class="info-item status-display">
            <svg class="info-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                fill="currentColor"
              />
            </svg>
            <span>Disponible :</span>
            <span class="status-badge badge-unavailable">{{ user.disponibilite }}</span>
          </p>
          <p class="info-item status-display">
            <svg class="info-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                fill="currentColor"
              />
            </svg>
            <span>Rôle :</span>
            <span class="status-badge badge-admin">{{ user.role }}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 🎨 PALETTE Mise à jour pour un look plus moderne */
:root {
  --primary-blue: #0d6efd;
  --success-green: #198754;
  --danger-red: #dc3545;
  --background-light: #f4f7f6; /* Fond plus doux */
  --card-white: #ffffff;
  --text-dark: #212529;
  --text-muted: #6c757d; /* Gris pour les labels */
  --border-light: #e9ecef;
}

/* 🌐 CONTENEUR GLOBAL */
.page-background-profil {
  background: var(--background-light);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 20px;
}

.profil-container {
  background: var(--card-white);
  border-radius: 15px;
  padding: 30px 25px;
  width: 50%;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  text-align: center;
  transition:
    transform 0.4s ease,
    box-shadow 0.4s ease;

  /* 👇 ajoute ceci */
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center; /* centre le contenu verticalement */
}

.profil-container:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 40px rgba(13, 110, 253, 0.15);
}

/* 👤 PHOTO DE PROFIL */
.photo-edit-zone {
  position: relative;
  display: inline-block;
  margin-bottom: 20px;
}

.profil-photo {
  width: 110px;
  height: 90px;
  border-radius: 50%;
  object-fit: cover;
  border: 5px solid var(--primary-blue);
  box-shadow: 0 0 20px rgba(13, 110, 253, 0.2);
  transition:
    transform 0.3s ease,
    border-color 0.3s ease;
}

.profil-photo:hover {
  transform: scale(1.08);
  border-color: #0b5ed7;
}

/* ✏️ BOUTON ÉDITION */
.btn-edit-float {
  bottom: 0; /* Alignement ajusté */
  right: -5px;
  background-color: var(--primary-blue);
  width: 35px;
  height: 35px;
  transition: all 0.3s ease;
}

.btn-edit-float:hover {
  background-color: #0b5ed7;
  transform: scale(1.2) rotate(5deg);
}

.btn-edit-float svg {
  width: 16px;
  height: 16px;
}

/* 📋 INFOS UTILISATEUR */
.profil-info {
  text-align: left;
}

.user-name {
  color: var(--text-dark);
  font-size: 1.8rem;
  font-weight: 800;
  margin-bottom: 5px;
  text-align: center;
}

.user-qualification {
  color: var(--text-muted);
  font-size: 1rem;
  font-style: italic;
  margin-bottom: 20px;
  text-align: center;
}

.separator {
  background: var(--border-light);
  margin: 15px 0 25px;
}

.info-group,
.status-group {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.info-item {
  font-size: 0.95rem;
  color: var(--text-dark);
  display: flex; /* Active flexbox pour l'alignement */
  align-items: center;
}

.info-item span:first-of-type {
  /* Le label (Email, Téléphone, etc.) */
  font-weight: 600;
  color: var(--text-muted);
  display: inline-block;
  min-width: 100px; /* Largeur min pour les labels */
  margin-right: 10px;
}

.info-value {
  font-weight: 500;
  color: var(--text-dark);
}

.email-link {
  color: var(--primary-blue);
  text-decoration: none;
}

.email-link:hover {
  text-decoration: underline;
}

/* 📱 Icônes */
.info-icon {
  width: 18px;
  height: 18px;
  margin-right: 10px;
  color: var(--primary-blue); /* Couleur d'accentuation */
  flex-shrink: 0;
}

/* 🔗 LIEN CV */
.cv-link {
  color: var(--success-green);
  font-weight: 700;
  text-decoration: none;
  border-bottom: 2px solid var(--success-green);
  padding-bottom: 2px;
  transition: all 0.3s ease;
}

.cv-link:hover {
  color: #157347;
  letter-spacing: 0.5px;
}

/* 🏷️ BADGES */
.status-group {
  margin-top: 25px;
  padding-top: 20px;
  border-top: 1px solid var(--border-light);
}

.status-display {
  justify-content: space-between; /* Pour pousser le badge à droite */
}

.status-badge {
  padding: 4px 10px;
  border-radius: 15px;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.badge-admin {
  background-color: var(--primary-blue);
  color: var(--card-white);
}

.badge-unavailable {
  background-color: var(--danger-red);
  color: var(--card-white);
}

.badge-available {
  background-color: var(--success-green);
  color: var(--card-white);
}

/* 📱 RESPONSIVE */
@media (max-width: 400px) {
  .profil-container {
    width: 100%;
    padding: 20px 15px;
  }
}
</style>
