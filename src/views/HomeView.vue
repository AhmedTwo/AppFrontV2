<script setup>
import { onMounted, ref } from 'vue';
import ImagesLogo from '../assets/images/imagePortal.png'
import axios from 'axios'

// ref est une syntaxe qui permet de dynamiser une variable pour l'afficher
const nbUser = ref([]);
const nbOffer = ref([]);
const nbCompany = ref([]);
const offers = ref([]);

// console.log('Je suis dans la console')

const count = async () => {
  // temps de chargement front plus rapide, avec la donnée qui arrive
  try {
    const responses = await axios.get('http://127.0.0.1:8000/api/count')
    // console.log(responses.data)
    nbUser.value = responses.data.User
    nbOffer.value = responses.data.Offer
    nbCompany.value = responses.data.Company
  } catch (err) {
    console.log(err)
  }
}

onMounted(count)

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
  <img :src="ImagesLogo" alt="fond logo portal job" class="background-logo" />
  <main class="hero">
    <div class="hero-content">
      <h1>Votre avenir professionnel commence ici !</h1>
      <h1></h1>
      <p>
        Explorez les opportunités dans les secteurs en forte croissance : Tech, IA, Transition
        écologique, Santé... Profitez des options en télétravail, des postes hybrides, et des CDI à
        pourvoir immédiatement.
      </p>
      <div class="stats-container">
        <div class="stat-item">
          <span class="stat-number">{{ nbUser }}</span>
          <span class="stat-label">Utilisateurs inscrits</span>
        </div>
        <div class="stat-item">
          <span class="stat-number">{{ nbOffer }}</span>
          <span class="stat-label">Offres disponibles</span>
        </div>
        <div class="stat-item">
          <span class="stat-number">{{ nbCompany }}</span>
          <span class="stat-label">Sociétés inscrites</span>
        </div>
      </div>
    </div>
  </main>

  <div class="offers-section">
    <h1>Pourquoi choisir Portal Job ?</h1>
    <p class="p-pres">Portal Job est bien plus qu’un simple site d’offres d’emploi...,</p>
    <ul class="pres-ul">
      <li>✅ Accédez à des offres exclusives publiées chaque jour ✅</li>
      <li>🚀 Profitez d’un espace personnel intuitif pour gérer vos candidatures 🚀</li>
      <li>💼 Collaborez avec des entreprises innovantes 💼</li>
      <li>🌍 Découvrez les possibilités de télétravail 🌍</li>
    </ul>
  </div>

  <div class="offers-section">
    <h1>Tiens un avant gout de nos offres en ligne !!</h1>

    <div class="offer-row" v-for="offer in offers.slice(0, 2)" :key="offer.id">
      <!-- Carte de l'offre -->
      <div class="offer-card">
        <h3>IMAGE OFFRE</h3>
        <img :src="offer.image_url" alt="Image offre" />
        <!-- en Vue il ne faut pas mettre de double moustaches {{ }} dans un binding dynamique (:) -->

        <div class="more-section">
          <a href="/SignIn" class="more-btn" title="Voir plus d'offre">
            Voir plus !
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
  </div>
</template>

<style scoped>
.background-logo {
  position: absolute;
  top: 0;
  left: 0;
  width: 99vw;
  height: 99vh;
  object-fit: cover;
  opacity: 0.1; /* ajuste la transparence à mon goût */
  z-index: 1;
  margin-top: -2%;
}

.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 2rem;
  text-align: center;
}

.hero h1 {
  font-size: 3rem;
  font-weight: 700;
  background: linear-gradient(135deg, #7c7373, #007bff);
  color: white;
  border-radius: 20px;
  padding: 5%;
  margin-top: -1%;
}

.hero p {
  font-size: 1.3rem;
  color: black;
  margin-bottom: 2rem;
}

.stats-container {
  display: flex;
  gap: 5rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 2rem;
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 700;
  color: black;
}

.offers-section {
  padding: 4rem 2rem;
  background: var(--bg-light);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
}

.offers-section h1 {
  font-size: 2rem;
  background: linear-gradient(135deg, #007bff, #7c7373);
  color: white;
  border-radius: 20px;
  padding: 10px 20%;
}

/* Section Présentation */
/* Titre */
.h1-pres {
  font-size: 2.8rem;
  font-weight: 800;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-align: center;
  margin-bottom: 1rem;
  position: relative;
  z-index: 1;
}

.h1-pres::after {
  content: '';
  position: absolute;
  bottom: -15px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, #667eea, #764ba2);
  border-radius: 2px;
}

/* Paragraphe */
.p-pres {
  text-align: center;
  color: black;
  font-size: 1.2rem;
  position: relative;
}

/* Liste */
.pres-ul {
  font-size: 1rem;
  width: 80%;
  display: grid;
  gap: 1rem;
}

.pres-ul li {
  padding: 1.2rem 1.8rem;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.712);
  font-size: 1rem;
  color: black;
  text-align: center;
  font-weight: 500;
  list-style: none;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
}

.pres-ul li:nth-child(1) {
  border-left-color: rgb(45, 226, 211);
  border-right-color: rgb(45, 226, 211);
}

.pres-ul li:nth-child(2) {
  border-left-color: rgb(20, 44, 252);
  border-right-color: rgb(20, 44, 252);
}

.pres-ul li:nth-child(3) {
  border-left-color: rgb(45, 226, 211);
  border-right-color: rgb(45, 226, 211);
}

.pres-ul li:nth-child(4) {
  border-left-color: rgb(20, 44, 252);
  border-right-color: rgb(20, 44, 252);
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

.more-section {
  margin-top: auto;
}

.more-btn {
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

.more-btn:hover {
  background-color: #2980b9;
  transform: scale(1.05);
}
</style>
