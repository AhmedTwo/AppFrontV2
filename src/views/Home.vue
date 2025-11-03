<script setup>
import { onMounted, ref } from 'vue';
import axios from 'axios'

// ref est une syntaxe qui permet de dynamiser une variable pour l'afficher dans le html
const offers = ref([]);

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
  <main>
    <h1>LES 3 OFFRES LES PLUS RECENTES</h1>
    <p class="p">Découvrez les dernières opportunités publiées</p>

    <div class="offer-row" v-for="offer in offers" :key="offer.id">
      <!-- Carte de l'offre -->
      <div class="offer-card">
        <h3>IMAGE OFFRE</h3>
        <img :src="offer.image_url" alt="Image offre" />
        <!-- en Vue il ne faut pas mettre de double moustaches {{ }} dans un binding dynamique (:) -->

        <div class="apply-section">
          <a href="/Home/apply" class="apply-btn" title="Voir les détails">
            Postuler à l'offre
          </a>
        </div>
      </div>

      <!-- Détails de l'offre -->
      <div class="offer-details">
        <h3>Détails de l'offre</h3>
        <div class="detail-item"><strong>Titre :</strong> {{ offer.title }}</div>
        <div class="detail-item"><strong>Description :</strong> {{ offer.description }}</div>
        <div class="detail-item"><strong>Mission :</strong> {{ offer.mission }}</div>
        <div class="detail-item"><strong>Lieu :</strong> {{ offer.location }}</div>
        <div class="detail-item"><strong>Poste :</strong> {{ offer.category }}</div>
        <div class="detail-item"><strong>Postulants :</strong> {{ offer.participants_count }}</div>
        <div class="detail-item"><strong>Avantages :</strong> {{ offer.benefits }}</div>
        <div class="detail-item"><strong>Crée le:</strong> {{ offer.created_at }}</div>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  flex: 1; /* Remplit l'espace avant le footer */
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Titres */
h1 {
  text-align: center;
  margin-top: 40px;
  color: black;
  font-size: 2.3rem;
}

.p {
  text-align: center;
  color: #666;
  margin-bottom: 4%;
  font-size: 1rem;
  font-weight: 500;
}

/* Container des offres */
.offer-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 15px;
  margin: 0 15px 30px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 10px 8px 18px rgba(0, 0, 0, 0.575); /* comme si il flotte */
  transition: transform 0.5s;
  overflow-y: auto; /* scroll si contenu trop long */
  max-height: 400px; /* limite la longueur des blocs */
  width: 65%;
}

.offer-row:hover {
  transform: translateY(-3px);
}

/* Carte de l'offre */
.offer-card {
  flex: 1 1 200px;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  height: 100%;
}

.offer-card img {
  width: 100%;
  border-radius: 6px;
  margin-bottom: 10px;
  object-fit: cover;
  height: 120px;
}

.apply-section {
  margin-top: auto;
}

.apply-btn {
  display: inline-block;
  padding: 8px 16px;
  background-color: #3498db;
  color: #fff;
  border-radius: 50px;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 600;
  transition:
    background-color 0.25s,
    transform 0.2s;
}

.apply-btn:hover {
  background-color: #2980b9;
  transform: scale(1.05);
}

/* Détails de l'offre */
.offer-details {
  display: flex;
  flex-direction: column; /* empile verticalement les informations */
  flex: 2 1 300px; /* prend plus d'espace que l'image */
  padding: 15px;
  gap: 6px; /* espace entre chaque detail-item */
}

.offer-details h3 {
  margin-top: 0;
  color: black;
  font-size: 1.1rem;
  text-align: center;
}

/* Chaque ligne de détail */
.detail-item {
  font-size: 0.9rem;
  line-height: 1.4;
  color: #2c3e50;
}

.detail-item strong {
  color: black;
}

/* Responsive */
@media (max-width: 900px) {
  .offer-row {
    flex-direction: column;
    align-items: center;
  }

  .offer-details,
  .offer-card {
    width: 90%;
    max-height: none; /* plus besoin de limiter sur mobile */
  }
}

/* Pour éviter que le footer chevauche le contenu */
body::after {
  content: '';
  display: block;
  height: 80px; /* hauteur approximative du footer */
}
</style>
