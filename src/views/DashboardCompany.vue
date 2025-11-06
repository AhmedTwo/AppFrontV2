<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'

// ref est une syntaxe qui permet de dynamiser une variable pour l'afficher dans le html
const offers = ref([])

// console.log('Je suis dans la console')

const readOffer = async () => {
  // temps de chargement front plus rapide, avec la donnée qui arrive
  try {
    const responses = await axios.get('http://127.0.0.1:8000/api/allOffer')
    offers.value = responses.data.data
    // console.log(offers.value)
  } catch (err) {
    console.log(err)
  }
}

onMounted(readOffer)
</script>

<template>
  <div class="header-section">
    <h1>MES OFFRES</h1>
    <p class="subtitle">Découvrez ici les offres de ta société !</p>
  </div>

  <div class="offers-grid">
    <div class="offer-card" v-for="offer in offers.slice(0, 2)" :key="offer.id">
      <div class="card-image">
        <img :src="offer.image_url" alt="Image offre" />
        <div class="image-overlay">
          <span class="badge badge-employment">{{ offer.employment_type.name }}</span>
          <span class="badge badge-category">{{ offer.category }}</span>
        </div>
      </div>

      <div class="card-body">
        <h3 class="offer-title">{{ offer.title }}</h3>
        <p class="offer-description">{{ offer.description }}</p>

        <div class="offer-details">
          <div class="detail-row">
            <svg
              class="icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span>{{ offer.location }}</span>
          </div>

          <div class="detail-row">
            <svg
              class="icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
            <span>{{ offer.participants_count }} postulants</span>
          </div>

          <div class="detail-row">
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
            <span>{{ offer.created_at }}</span>
          </div>
        </div>

        <div class="mission-section" v-if="offer.mission">
          <strong>Mission :</strong>
          <p>{{ offer.mission }}</p>
        </div>

        <div class="benefits-section" v-if="offer.benefits">
          <strong>Avantages :</strong>
          <p>{{ offer.benefits }}</p>
        </div>
      </div>

      <div class="card-footer">
        <a href="/offers/UpdateOffer" class="btn btn-update">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293z"
            />
            <path
              d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 
        0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 
        0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 
        1.5 0 0 0 1 2.5z"
            />
          </svg>
          Modifier
        </a>

        <button type="button" class="btn btn-delete" title="Supprimer cette demande">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 
        1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 
        0 2-2V4h.5a1 1 0 0 0 1-1V2a1 
        1 0 0 0-1-1H10a1 1 0 0 
        0-1-1H7a1 1 0 0 0-1 1zm3 
        4a.5.5 0 0 1 .5.5v7a.5.5 
        0 0 1-1 0v-7a.5.5 0 
        0 1 .5-.5M8 5a.5.5 0 
        0 1 .5.5v7a.5.5 0 
        0 1-1 0v-7A.5.5 0 
        0 1 8 5m3 .5v7a.5.5 
        0 0 1-1 0v-7a.5.5 
        0 0 1 1 0"
            />
          </svg>
          Supprimer
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* COULEURS UTILES */
/* Primaire (Modif/Accentuation) : #3498db (Bleu) */
/* Secondaire (Supprimer) : #dc3545 (Rouge) */
/* Fond de carte : #ffffff */
/* Fond de page : #f8f9fa (implicite par l'absence de couleur de fond globale) */

/* -------------------
   EN-TÊTE
   ------------------- */
.header-section {
  text-align: center;
  margin-bottom: 50px;
  padding: 0 20px;
}

h1 {
  font-size: 2.2rem;
  font-weight: 700;
  color: #1e293b; /* Couleur de titre sombre */
  letter-spacing: -0.5px;
}

.subtitle {
  font-size: 1.1rem;
  color: #64748b;
  font-weight: 400;
  letter-spacing: 0.3px;
}

/* -------------------
   GRILLE DES OFFRES
   ------------------- */
.offers-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 28px;
  max-width: 1100px;
  margin: 20px auto 60px;
  padding: 0 24px;
}

/* -------------------
   CARTE D'OFFRE (DESIGN MODERNE)
   ------------------- */
.offer-card {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border: 1px solid #e2e8f0;
  display: flex;
  flex-direction: column;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
  position: relative;
}

.offer-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #3498db, #2ecc71, #3498db);
  background-size: 200% 100%;
  opacity: 0;
  transition: opacity 0.4s ease;
  z-index: 10;
}

.offer-card:hover::before {
  opacity: 1;
  animation: shimmer 2s infinite;
}

@keyframes shimmer {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}

.offer-card:hover {
  transform: translateY(-12px) scale(1.02);
  box-shadow:
    0 25px 50px -12px rgba(52, 152, 219, 0.25),
    0 12px 24px -8px rgba(0, 0, 0, 0.1);
  border-color: #3498db;
}

/* Image de la carte */
.card-image {
  position: relative;
  height: 160px; /* Taille ajustée */
  overflow: hidden;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.card-image::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.4) 100%);
  pointer-events: none;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.offer-card:hover .card-image img {
  transform: scale(1.1) rotate(1deg);
}

.image-overlay {
  position: absolute;
  top: 15px;
  right: 15px;
  z-index: 5;
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-end;
}

/* Badges */
.badge {
  padding: 8px 16px;
  border-radius: 20px;
  font-weight: 600;
  font-size: 0.8rem;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.badge-category {
  background: linear-gradient(135deg, rgba(52, 152, 219, 0.9) 0%, rgba(41, 128, 185, 0.9) 100%);
  color: white;
}

.badge-employment {
  background: linear-gradient(135deg, rgba(46, 204, 113, 0.9) 0%, rgba(39, 174, 96, 0.9) 100%);
  color: white;
}

/* Corps de carte */
.card-body {
  padding: 16px 18px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1;
  background: white;
}

.offer-title {
  font-size: 1.15rem;
  font-weight: 700;
  color: #1e293b;
  margin: 0;
  line-height: 1.3;
  letter-spacing: -0.3px;
  transition: color 0.3s ease;
}

.offer-card:hover .offer-title {
  color: #3498db;
}

.offer-description {
  font-size: 0.85rem;
  color: #64748b;
  line-height: 1.5;
  margin: 0;
}

/* Détails de l'offre (icônes) */
.offer-details {
  display: flex;
  flex-direction: column;
  gap: 6px; /* Espace réduit */
  margin-top: 2px;
}

.detail-row {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 10px; /* Padding réduit */
  background: #f8fafc;
  border-radius: 6px;
  font-size: 0.8rem; /* Taille de police réduite */
  transition: all 0.3s ease;
}

.detail-row:hover {
  background: #e9f3fe; /* Changement de fond au survol */
  transform: translateX(3px); /* Effet plus subtil */
}

.icon {
  width: 16px; /* Icône plus petite */
  height: 16px;
  color: #3498db;
  flex-shrink: 0;
}

.detail-row span {
  color: #475569;
  font-weight: 500;
}

/* Sections mission et avantages */
.mission-section,
.benefits-section {
  margin-top: 2px;
  padding: 10px; /* Padding réduit */
  background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
  border-radius: 8px;
  font-size: 0.78rem; /* Taille de police très réduite */
  border: 1px solid #bae6fd;
}

.mission-section strong,
.benefits-section strong {
  color: #0c4a6e;
  display: block;
  margin-bottom: 3px;
  font-size: 0.8rem;
  font-weight: 700;
}

.mission-section p,
.benefits-section p {
  margin: 0;
  color: #0369a1;
  line-height: 1.4;
}

/* -------------------
   PIED DE CARTE (BOUTONS)
   ------------------- */

.card-footer {
  padding: 14px 18px;
  border-top: 1px solid #f1f5f9;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(180deg, transparent 0%, #f8fafc 100%);
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
  font-size: 0.9rem; /* Taille de police ajustée */
  border-radius: 8px;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 10px 18px; /* Padding standard pour les boutons */
}

.btn svg {
  transition: transform 0.3s ease;
}

/* ==== Bouton Modifier (Bleu) ==== */
.btn-update {
  background: white;
  color: #3498db;
  border: 2px solid #3498db;
  box-shadow: 0 2px 8px rgba(52, 152, 219, 0.3);
}

.btn-update:hover {
  background: #3498db;
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(52, 152, 219, 0.4);
}

/* ==== Bouton Supprimer (Rouge) ==== */
.btn-delete {
  background: transparent;
  color: #dc3545;
  border: 2px solid #dc3545;
  box-shadow: 0 2px 6px rgba(220, 53, 69, 0.2);
}

.btn-delete:hover {
  background: #dc3545;
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(220, 53, 69, 0.3);
}

/* -------------------
   RESPONSIVE
   ------------------- */

@media (max-width: 1024px) {
  .offers-grid {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 20px;
  }
}

@media (max-width: 768px) {
  h1 {
    font-size: 1.8rem;
  }

  .offers-grid {
    grid-template-columns: 1fr;
    padding: 0 16px;
    gap: 24px;
  }

  .card-image {
    height: 180px;
  }

  .card-footer {
    flex-direction: column;
    gap: 10px;
  }

  .btn {
    width: 100%;
    justify-content: center;
  }
}
</style>
