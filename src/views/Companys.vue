<script setup>

import { onMounted, ref } from 'vue';
import axios from 'axios'

// ref est une syntaxe qui permet de dynamiser une variable pour l'afficher dans le html
const companys = ref([]);

// console.log('Je suis dans la console')

const readCompany = async () => {
  // temps de chargement front plus rapide, avec la donnée qui arrive
  try {
    const responses = await axios.get('http://127.0.0.1:8000/api/allCompany')
    companys.value = responses.data.data
  } catch (err) {
    console.log(err)
  }
  }

onMounted(readCompany)
</script>

<template>
    <div class="header-section">
      <h1>TOUTES LES SOCIETES</h1>
      <p class="subtitle">Découvre toutes nos sociétés inscrites à Portal_Job</p>
    </div>

    <div class="company-grid" id="companyContainer">
      <div class="company-card" v-for="company in companys" :key="company.id">
        <div class="card-header">
          <div class="logo-container">
            <a href="offers/offerCompany">
              <img :src="company.logo" :alt="`Logo ${company.name}`" />
            </a>
          </div>
        </div>
        
        <div class="card-body">
          <h3 class="company-name">{{ company.name }}</h3>
          
          <div class="company-info">
            <div class="info-item">
              <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="3" width="18" height="18" rx="2"/>
                <path d="M3 9h18M9 21V9"/>
              </svg>
              <span>{{ company.industry }}</span>
            </div>
            
            <div class="info-item">
              <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              <span>{{ company.address }}</span>
            </div>
          </div>
        </div>
        
        <div class="card-footer">
          <a href="companys/companyDetails" class="btn-details">
            Voir les détails
            <svg class="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
</template>

<style scoped>

/* En-tête */
.header-section {
  text-align: center;
  margin-bottom: 35px;
}

h1 {
  font-size: 2.2rem;
  font-weight: 700;
  color: black;
  margin-top: 3%;
  letter-spacing: -0.5px;
}

.subtitle {
  font-size: 1rem;
  color: #666;
  font-weight: 500;
}

/* Grille de cartes */
.company-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  /* creation auto, d'autant de colonne possible dans l'espace dispo, chacune fait min 260px et max une part egal de l'espace restant */
  gap: 24px;
  max-width: 1300px;
  margin: 0 auto;
}

/* Carte société */
.company-card {
  background: white;
  border-radius: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  flex-direction: column;
  height: 100%;
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.company-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.16);
  border-color: #0066ff;
}

/* En-tête de carte avec logo */
.card-header {
  padding: 20px 16px 16px;
  background: linear-gradient(135deg, #f8f9ff 0%, #ffffff 100%);
  border-bottom: 1px solid #f0f0f0;
}

.logo-container {
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(21, 59, 224);
  border-radius: 5px;
  padding: 5%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.925);
  transition: transform 0.3s ease;
}

.logo-container:hover {
  transform: scale(1.05); /* aggrandissement du logo */
}

.logo-container img {
  max-width: 100%;
  max-height: 100%;
}

/* Corps de carte */
.card-body {
  padding: 18px 16px;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.company-name {
  font-size: 1.15rem;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0;
  line-height: 1.3;
  text-align: center;
}

.company-info {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 10px;
  background: #f8f9fa;
  border-radius: 8px;
  transition: background 0.2s ease;
}

.info-item:hover {
  background: #e9ecef;
}

.icon {
  width: 18px;
  height: 18px;
  color: #0066ff;
  flex-shrink: 0;
}

.info-item span {
  font-size: 0.9rem;
  color: #495057;
  line-height: 1.4;
}

/* Pied de carte */
.card-footer {
  padding: 20px;
  border-top: 1px solid #f0f0f0;
}

.btn-details {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  padding: 12px 20px;
  background: #0066ff;
  color: white;
  border-radius: 10px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 102, 255, 0.2);
}

.btn-details:hover {
  background: #0052cc;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 102, 255, 0.3);
}

.arrow-icon {
  width: 18px;
  height: 18px;
  transition: transform 0.3s ease;
}

.btn-details:hover .arrow-icon {
  transform: translateX(4px);
}

/* Responsive */
@media (max-width: 1024px) {
  .company-grid {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 25px;
  }
}

@media (max-width: 768px) {
  main {
    padding: 40px 15px;
  }

  h1 {
    font-size: 2.2rem;
  }

  .subtitle {
    font-size: 1rem;
  }

  .company-grid {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 20px;
  }
}

@media (max-width: 480px) {
  h1 {
    font-size: 1.8rem;
  }

  .company-grid {
    grid-template-columns: 1fr;
  }

  .card-header {
    padding: 25px 15px 15px;
  }

  .logo-container {
    height: 100px;
  }
}
</style>
