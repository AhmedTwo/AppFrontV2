<script setup>
import { onMounted, ref } from 'vue';
import axios from 'axios'

const companys = ref([]);

const readCompany = async () => {
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
    <h1>TOUTES LES SOCIÉTÉS</h1>
    <p class="subtitle">Découvrez toutes nos sociétés inscrites à Portal_Job</p>
  </div>

  <div class="company-grid">
    <div class="company-card" v-for="company in companys" :key="company.id">
      <!-- En-tête avec logo -->
      <div class="card-header">
        <div class="logo-container">
          <a href="offers/offerCompany">
            <img :src="company.logo" :alt="`Logo ${company.name}`" />
          </a>
        </div>
      </div>
      
      <!-- Corps de carte -->
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
      
      <!-- Pied de carte -->
      <div class="card-footer">
        <a href="/companys/companyDetails" class="btn-details">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
            <path d="M8.93 6.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
          </svg>
          Voir les détails
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* En-tête */
.header-section {
  text-align: center;
  margin-top: 3%;
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

/* Grille de cartes */
.company-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Carte société */
.company-card {
  background: white;
  border-radius: 8%;
  overflow: hidden;
  transition: all 0.3s;
  border: 1px solid rgba(0, 0, 0, 0.253);
  display: flex;
  flex-direction: column;
  height: 100%;
}

.company-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.445);
  border-color: #0066ff;
}

/* En-tête de carte avec logo */
.card-header {
  padding: 30px 20px;
  background: linear-gradient(135deg, #ffffff 50%, #d3d7ec 0%);
  border-bottom: 2px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo-container {
  width: 140px;
  height: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border-radius: 30%;
  padding: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.685);
  transition: transform 0.3s ease;
  border: 3px solid white;
}

.logo-container:hover {
  transform: scale(1.08) rotate(2deg);
}

.logo-container img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

/* Corps de carte */
.card-body {
  padding: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.company-name {
  font-size: 1.2rem;
  font-weight: 600;
  color: black;
  margin: 0;
  text-align: center;
  line-height: 1.3;
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
  padding: 10px 12px;
  background: #f8f9fa;
  border-radius: 8px;
  transition: all 0.2s ease;
}

.info-item:hover {
  background: #e9ecef;
  transform: translateX(4px);
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
  padding: 16px 20px;
  border-top: 2px solid #f0f0f0;
  display: flex;
  justify-content: center;
}

.btn-details {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  background: white;
  color: #0066ff;
  border: 2px solid #0066ff;
  border-radius: 10px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 102, 255, 0.3);
}

.btn-details:hover {
  background: #0066ff;
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 102, 255, 0.4);
}

.btn-details svg {
  transition: transform 0.3s ease;
}

.btn-details:hover svg {
  transform: scale(1.15);
}

/* Responsive */
@media (max-width: 1024px) {
  .company-grid {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
}

@media (max-width: 768px) {
  h1 {
    font-size: 1.8rem;
  }

  .company-grid {
    grid-template-columns: 1fr;
    padding: 0 15px;
  }

  .logo-container {
    width: 120px;
    height: 120px;
  }
}

@media (max-width: 480px) {
  h1 {
    font-size: 1.6rem;
  }

  .card-header {
    padding: 25px 15px;
  }

  .logo-container {
    width: 100px;
    height: 100px;
  }
}
</style>