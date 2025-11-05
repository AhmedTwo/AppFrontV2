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
/* En-tête */
.header-section {
  text-align: center;
  margin-bottom: 30px;
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

/* Grille des offres */
.offers-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 24px;
  max-width: 1300px;
  margin: 20px auto;
  margin-bottom: 2%;
}

/* Carte d'offre */
.offer-card {
  background: white;
  border-radius: 8%;
  overflow: hidden;
  transition: all 0.3s;
  border: 1px solid rgba(0, 0, 0, 0.253);
  display: flex;
  flex-direction: column;
}

.offer-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.445);
  border-color: #3498db;
}

/* Image de la carte */
.card-image {
  position: relative;
  height: 200px;
  overflow: hidden;
  background: linear-gradient(135deg, #ffffff 50%, #d3d7ec 0%);
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
}

.offer-card:hover .card-image img {
  transform: scale(1.05);
}

.image-overlay {
  position: absolute;
  top: 15px;
  right: 15px;
}

/* Corps de carte */
.card-body {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex: 1;
}

.offer-title {
  font-size: 1.2rem;
  font-weight: 600;
  color: black;
  margin: 0;
}

.offer-description {
  font-size: 0.9rem;
  color: #666;
  line-height: 1.5;
  margin: 0;
}

/* Détails de l'offre */
.offer-details {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 8px;
}

.detail-row {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #666;
  font-size: 0.9rem;
}

.icon {
  width: 18px;
  height: 18px;
  color: #3498db;
  flex-shrink: 0;
}

/* Sections mission et avantages */
.mission-section,
.benefits-section {
  margin-top: 8px;
  padding: 12px;
  background: #f8f9fa;
  border-radius: 8px;
  font-size: 0.85rem;
}

.mission-section strong,
.benefits-section strong {
  color: black;
  display: block;
  margin-bottom: 4px;
}

.mission-section p,
.benefits-section p {
  margin: 0;
  color: #666;
  line-height: 1.4;
}

/* Badges */
.badge {
  padding: 6px 14px;
  border-radius: 20px;
  font-weight: 600;
  font-size: 0.85rem;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.badge-category {
  background: #e3f2fd;
  color: #1976d2;
}

.badge-employment {
  background: #e3f2fd;
  color: #1976d2;
}

/* Pied de carte */
.card-footer {
  padding: 16px 20px;
  border-top: 2px solid #f0f0f0;
  display: flex;
  justify-content: center;
  gap: 12px;
}

/* ==== Boutons de base ==== */
.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
  font-size: 0.95rem;
  border-radius: 10px;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn svg {
  transition: transform 0.3s ease;
}

/* ==== Bouton Modifier ==== */
.btn-update {
  padding: 12px 24px;
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

.btn-update:hover svg {
  transform: translateY(2px);
}

/* ==== Bouton Supprimer ==== */
.btn-delete {
  padding: 10px 20px;
  background: transparent;
  color: #dc3545;
  border: 2px solid #dc3545;
  border-radius: 10px;
  font-size: 0.9rem;
  box-shadow: 0 2px 6px rgba(220, 53, 69, 0.2);
}

.btn-delete:hover {
  background: #dc3545;
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(220, 53, 69, 0.3);
}

/* Bouton cœur (favoris) */
.btn-heart {
  text-decoration: none;
  color: #ccc;
}

/* Responsive */
@media (max-width: 1024px) {
  .offers-grid {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  }
}

@media (max-width: 768px) {
  h1 {
    font-size: 1.8rem;
  }

  .offers-grid {
    grid-template-columns: 1fr;
    padding: 0 15px;
  }

  .card-image {
    height: 180px;
  }
}
</style>
