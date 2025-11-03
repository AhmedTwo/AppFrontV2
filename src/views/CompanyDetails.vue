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
  <div class="main">
    <div class="header-section">
      <h1>Détails de la société</h1>
      <p class="subtitle">Informations complètes et détaillées</p>
    </div>

    <div class="table-wrapper">
      <div class="table-container">
        <table class="company-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nom</th>
              <th>Domaine</th>
              <th>Lieu</th>
              <th>Employés</th>
              <th>Latitude</th>
              <th>Longitude</th>
              <th>Description</th>
              <th>N° Siret</th>
              <th>Status</th>
              <th>Logo</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="company in companys" :key="company.id">
              <td data-label="ID">
                <span class="badge badge-id">{{ company.id }}</span>
              </td>
              <td data-label="Nom">
                <strong class="company-name">{{ company.name }}</strong>
              </td>
              <td data-label="Domaine">{{ company.industry }}</td>
              <td data-label="Lieu">
                <div class="location">
                  <svg class="icon-small" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  {{ company.address }}
                </div>
              </td>
              <td data-label="Employés">
                <span class="badge badge-employees">{{ company.number_of_employees }}</span>
              </td>
              <td data-label="Latitude">{{ company.latitude }}</td>
              <td data-label="Longitude">{{ company.longitude  }}</td>
              <td data-label="Description">
                <div class="description">{{ company.description }}</div>
              </td>
              <td data-label="N° Siret">
                <code class="siret">{{ company.n_siret }}</code>
              </td>
              <td data-label="Status">
                <span :class="['badge', 'badge-status', company.status === 'active' ? 'badge-active' : 'badge-inactive']">
                  {{ company.status }}
                </span>
              </td>
              <td data-label="Logo" class="logo-cell">
                <a href="/offers/offerCompany" class="logo-link">
                  <img :src="company.logo" :alt="`Logo ${company.name}`" />
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main {
  width: 90%;
  margin: 40px auto;
  padding: 0 20px;
}

/* En-tête */
.header-section {
  text-align: center;
  margin-bottom: 35px;
}

h1 {
  font-size: 2.2rem;
  font-weight: 700;
  color: black;
  margin-bottom: 8px;
  letter-spacing: -0.5px;
}

.subtitle {
  font-size: 1rem;
  color: #666;
  font-weight: 500;
}

/* Conteneur du tableau */
.table-wrapper {
  background: white;
  border-radius: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.719);
  border: 5px solid rgba(0, 0, 0, 0.301);
}

/* Tableau */
.company-table {
  width: 100%;
  font-size: 0.9rem;
}

.company-table thead {
  background: linear-gradient(135deg, #a5afe7 0%, #f4f4f7 100%);
}

.company-table th {
  padding: 16px;
  font-weight: 600;
  font-size: 0.85rem;
  color: black;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.company-table td {
  padding: 16px;
  color: black;
}

/* Styles spécifiques */
.company-name {
  color: black;
  font-size: 1.08rem;
}

.location {
  display: flex;
  align-items: center;
  gap: 6px;
}

.icon-small {
  width: 20px;
  height: 20px;
  color: #0066ff;
  flex-shrink: 0;
}

.description {
  max-width: 300px;
  line-height: 1.5;
  color: black;
}

.siret {
  background: #e3f2fd;
  padding: 4px 8px;
  border-radius: 6px;
  color: #1976d2;
}

/* Badges */
.badge {
  padding: 4px 12px;
  border-radius: 120px;
  font-weight: 600;
}

.badge-id {
  background: #c2c4c7;
  color: black;
}

.badge-employees {
  background: #e3f2fd;
  color: #1976d2;
}

.badge-status {
  text-transform: capitalize; /* premiere lettre majuscule */
}

.badge-active {
  background: #d4edda;
  color: #155724;
}

.badge-inactive {
  background: #f8d7da;
  color: #721c24;
}

/* Logo */
.logo-link {
  display: inline-block;
  height: 80px;
  padding: 4%;
  background: rgba(128, 128, 128, 0.199);
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(10, 10, 10, 0.959);
}

.logo-link:hover {
  transform: scale(1.1);
}

.logo-link img {
  width: 100%;
  height: 100%;
}

/* Responsive */
@media (max-width: 768px) {
  .main {
    margin: 20px auto;
    padding: 0 15px;
  }

  h1 {
    font-size: 1.8rem;
  }

  .table-wrapper {
    border-radius: 12px;
  }

  /* Mode carte pour mobile */
  .company-table thead {
    display: none;
  }

  .company-table tbody tr {
    display: block;
    margin-bottom: 20px;
    border: 1px solid #e9ecef;
    border-radius: 12px;
    padding: 16px;
    background: white;
  }

  .company-table tbody tr:hover {
    transform: none;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  .company-table td {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    border-bottom: 1px solid #f0f0f0;
  }

  .company-table td:last-child {
    border-bottom: none;
  }

  .company-table td::before {
    content: attr(data-label);
    font-weight: 600;
    color: #495057;
    text-transform: uppercase;
    font-size: 0.75rem;
    letter-spacing: 0.5px;
  }

  .logo-cell {
    justify-content: center;
  }

  .logo-link {
    width: 100px;
    height: 100px;
  }

  .description {
    max-width: 100%;
    text-align: right;
  }
}
</style>
