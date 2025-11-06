<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'

// ref est une syntaxe qui permet de dynamiser une variable pour l'afficher dans le html
const companys = ref([])

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
                <svg
                  class="icon-small"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                {{ company.address }}
              </div>
            </td>
            <td data-label="Employés">
              <span class="badge badge-employees">{{ company.number_of_employees }}</span>
            </td>
            <td data-label="Latitude">{{ company.latitude }}</td>
            <td data-label="Longitude">{{ company.longitude }}</td>
            <td data-label="Description">
              <div class="description">{{ company.description }}</div>
            </td>
            <td data-label="N° Siret">
              <code class="siret">{{ company.n_siret }}</code>
            </td>
            <td data-label="Status">
              <span
                :class="[
                  'badge',
                  'badge-status',
                  {
                    'badge-active': company.status === 'Approuvée',
                    'badge-pending': company.status === 'En_attente',
                    'badge-inactive': company.status === 'Refusée',
                  },
                ]"
              >
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
</template>

<style scoped>
/* === Global layout === */
.main {
  width: 90%;
  margin: 40px auto;
  padding: 25px 25px;
  font-family: 'Inter', 'Segoe UI', sans-serif;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.527);
  border-radius: 20px;
}

/* === Header === */
.header-section {
  text-align: center;
  margin-bottom: 40px;
}

h1 {
  font-size: 2.4rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 8px;
}

.subtitle {
  font-size: 1rem;
  color: #64748b;
  font-weight: 500;
}

/* === Table container === */
.table-wrapper {
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  transition: all 0.3s ease;
  border: 1px solid #e2e8f0;
}

.table-wrapper:hover {
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.08);
}

/* === Table === */
.company-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.95rem;
}

.company-table thead {
  background: linear-gradient(135deg, #2563eb 0%, #60a5fa 100%);
  color: white;
}

.company-table th {
  padding: 14px 16px;
  font-weight: 600;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.6px;
  text-align: left;
}

.company-table td {
  padding: 14px 16px;
  color: #1e293b;
  border-bottom: 1px solid #f1f5f9;
}

.company-table tbody tr {
  transition: background 0.2s ease;
}

.company-table tbody tr:hover {
  background: #f9fafb;
}

/* === Specific styles === */
.company-name {
  color: #1e3a8a;
  font-weight: 600;
  font-size: 1.05rem;
}

.location {
  display: flex;
  align-items: center;
  gap: 6px;
  color: #475569;
}

.icon-small {
  width: 18px;
  height: 18px;
  color: #2563eb;
  flex-shrink: 0;
}

.description {
  max-width: 320px;
  line-height: 1.5;
  color: #475569;
}

.siret {
  background: #eff6ff;
  padding: 4px 8px;
  border-radius: 6px;
  color: #1d4ed8;
  font-weight: 500;
}

/* === Badges === */
.badge {
  padding: 4px 12px;
  border-radius: 9999px;
  font-weight: 600;
  font-size: 0.85rem;
  display: inline-block;
  text-align: center;
}

.badge-id {
  background: #e2e8f0;
  color: #1e293b;
}

.badge-employees {
  background: #dbeafe;
  color: #1e40af;
}

.badge-status {
  text-transform: capitalize;
}

/* 🟢 STATUT ACTIF / APPROUVÉ */
.badge-active,
.badge-status:is([class*='Approuvée']) {
  background: #dcfce7; /* Vert clair */
  color: #166534; /* Vert foncé */
}

/* 🟡 STATUT EN ATTENTE */
/* Cette classe sera appliquée quand company.status vaut 'en_Attente' et qu'il reçoit 'badge-inactive' */
.badge-pending,
.badge-status:is([class*='En_attente']) {
  background: #dcec92; /* Vert clair */
  color: #2c3b06; /* Vert foncé */
}

/* 🔴 STATUT INACTIF / REFUSÉ (Le statut par défaut des non-actifs) */
.badge-inactive {
  background: #fee2e2; /* Rouge clair */
  color: #991b1b; /* Rouge foncé */
}

/* === Logo === */
.logo-cell {
  text-align: center;
}

.logo-link {
  display: inline-block;
  width: 80px;
  height: 80px;
  border-radius: 12px;
  overflow: hidden;
  background: #f1f5f9;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.logo-link:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
}

.logo-link img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

/* === Responsive === */
@media (max-width: 768px) {
  .main {
    margin: 20px auto;
    padding: 0 10px;
  }

  h1 {
    font-size: 1.8rem;
  }

  .company-table thead {
    display: none;
  }

  .company-table tbody tr {
    display: block;
    margin-bottom: 16px;
    border: 1px solid #e2e8f0;
    border-radius: 12px;
    padding: 14px;
    background: white;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  }

  .company-table td {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 0;
    border-bottom: 1px solid #f1f5f9;
  }

  .company-table td:last-child {
    border-bottom: none;
  }

  .company-table td::before {
    content: attr(data-label);
    font-weight: 600;
    color: #475569;
    text-transform: uppercase;
    font-size: 0.75rem;
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
