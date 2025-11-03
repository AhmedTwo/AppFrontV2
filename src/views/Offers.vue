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
    <h1>TOUTES LES OFFRES !</h1>
    <p class="p">Découvre toutes nos opportunités publiées</p>


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
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0;
}
/* Titres */
h1 {
  text-align: center;
  color: black;
  font-size: 2.3rem;
  margin-bottom: 10px;
  margin-top: 2%;
}

.p {
  color: #666;
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 40px;
}

/* p de favoris */
.if_no_favoris {
  margin-top: 3%;
  text-align: center;
  color: red;
  font-size: 30px;
}

strong a {
  color: blue;
  font-size: 40px;
}
/* p de favoris */

/* Bouton Ajouter une offre */
.admin-add-offer {
  margin-bottom: 25px;
}

.admin-add-offer a {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  border: 2px solid #007bff;
  color: #007bff;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
}

.admin-add-offer a:hover {
  background-color: #007bff;
  color: white;
}

.admin-add-offer svg {
  transition: 0.3s ease;
}

.admin-add-offer:hover svg {
  transform: rotate(90deg);
}

/* Conteneur principal de chaque offre */
.offer-row {
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  justify-content: flex-start;
  gap: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 10px 8px 18px rgba(0, 0, 0, 0.2);
  margin: 0 15px 35px;
  width: 70%;
  transition: transform 0.3s ease;
}

.offer-row:hover {
  transform: translateY(-3px);
}

/* Bloc gauche : image + bouton postuler */
.offer-card {
  flex: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  justify-content: space-between;
}

/* Supprimer les limites de hauteur */
.offer-card img {
  margin-bottom: 2%;
  width: 100%;
  height: 130px;
  border-radius: 8px;
  object-fit: cover;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.26);
}

.offer-card img:hover {
  transform: scale(1.05);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.774);
}

/* Bouton postuler */
.apply-btn {
  display: inline-block;
  padding: 8px 18px;
  background-color: #3498db;
  color: white;
  border-radius: 30px;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 600;
  transition: all 0.25s ease;
}

.apply-btn:hover {
  background-color: #2980b9;
  transform: scale(1.05);
}

/* Détails droite */
.offer-details {
  flex: 2 1 400px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 8px;
  overflow-y: auto;
  max-height: 210px;
}

.offer-details h3 {
  color: black;
  margin-top: 0;
  font-size: 1.2rem;
}

/* Détails individuels */
.detail-item {
  font-size: 0.95rem;
  color: #2c3e50;
  line-height: 1.5;
}

.detail-item strong {
  color: black;
}

/* Bouton cœur (favoris) */
.btn-heart {
  text-decoration: none;
  color: #ccc;
  margin-right: 10px;
}

.btn-details {
  display: inline-block;
  margin: 5px;
  padding: 10px 12px;
  border-radius: 5px;
  text-decoration: none;
  color: white;
  background-color: #0d6efd;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.btn-details:hover {
  background-color: #084298;
}

/* Responsive */
@media (max-width: 900px) {
  .offer-row {
    flex-direction: column;
    align-items: center;
    width: 90%;
  }

  .offer-card,
  .offer-details {
    width: 100%;
    max-height: none;
  }

  .offer-card img {
    height: 180px;
  }
}
</style>
