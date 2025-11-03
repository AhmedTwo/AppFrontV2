<script setup></script>

<template>
  <div class="header-section">
    <h1>MON TABLEAU DE BORD</h1>
    <p class="subtitle">Gérez vos utilisateurs, offres et sociétés en un seul endroit</p>
  </div>

  <div class="dashboard-container">
    <!-- Section Utilisateurs -->
    <div class="table-section">
      <div class="section-header">
        <h2>LES UTILISATEURS</h2>
      </div>
      
      <div class="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>NOM</th>
              <th>PRÉNOM</th>
              <th>EMAIL</th>
              <th>RÔLE</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Dupont</td>
              <td>Jean</td>
              <td>jean.dupont@example.com</td>
              <td><span class="badge badge-admin">Admin</span></td>
              <td class="actions-cell">
                <a href="/dashboard/updateUser/1" title="Modifier">
                  <button class="btn-action btn-edit">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                      <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                    </svg>
                  </button>
                </a>
                <button class="btn-action btn-delete" title="Supprimer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/>
                  </svg>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Section Offres -->
    <div class="table-section">
      <div class="section-header">
        <h2>LES OFFRES</h2>
      </div>
      
      <div class="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>TITRE</th>
              <th>ADRESSE</th>
              <th>DOMAINE</th>
              <th>DATE DE CRÉATION</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Développeur Frontend</td>
              <td>Paris</td>
              <td>Informatique</td>
              <td>20-Oct-2025</td>
              <td class="actions-cell">
                <a href="/offers/UpdateOffer" title="Modifier">
                <button class="btn-action btn-edit" title="Modifier">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                  </svg>
                </button>
                </a>
                <a href="/offers/DeleteOffer" title="Supprimer">
                <button class="btn-action btn-delete" title="Supprimer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/>
                  </svg>
                </button>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Section Sociétés -->
    <div class="table-section">
      <div class="section-header">
        <h2>LES SOCIÉTÉS</h2>
      </div>
      
      <div class="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>NOM</th>
              <th>ADRESSE</th>
              <th>DOMAINE</th>
              <th>N° SIRET</th>
              <th>STATUT</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>TechNova</td>
              <td>Paris</td>
              <td>Informatique</td>
              <td>123456789</td>
              <td>
                <button class="btn-status btn-validated">Status Toggle ?</button>
              </td>
              <td class="actions-cell">
                <a href="/companys/CompanyDetails" title="Détails">
                <button class="btn-action btn-info" title="Détails">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
                  </svg>
                </button>
                </a>
                <a href="/Dashboard_Admin/UpdateCompany" title="Modifier">
                <button class="btn-action btn-edit" title="Modifier">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                  </svg>
                </button>
                </a>
                <a href="/companys/DeleteCompany" title="Supprimer">
                <button class="btn-action btn-delete" title="Supprimer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/>
                  </svg>
                </button>
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
/* En-tête principal */
.header-section {
  text-align: center;
  margin-top: 3%;
  margin-bottom: 40px;
}

h1 {
  font-size: 2.2rem;
  font-weight: 700;
  color: black;
  letter-spacing: -0.5px;
  margin-bottom: 8px;
}

.subtitle {
  font-size: 1rem;
  color: #666;
  font-weight: 500;
}

/* Container principal */
.dashboard-container {
  max-width: 1400px;
  margin: 0 auto;
  margin-bottom: 2%;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  gap: 40px;
}

/* Section de tableau */
.table-section {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.table-section:hover {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

/* En-tête de section */
.section-header {
  background: linear-gradient(135deg, #0052cc 50%, #0066ff 50%);
  padding: 20px 30px;
  border-bottom: 3px solid #010203;
}

.section-header h2 {
  margin: 0;
  font-size: 1.4rem;
  font-weight: 700;
  color: white;
  letter-spacing: 0.5px;
}

/* Wrapper du tableau */
.table-wrapper {
  overflow-x: auto;
  padding: 20px;
}

/* Tableau */
table {
  width: 100%;
  border-collapse: collapse;
  background: white;
}

thead {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
}

thead th {
  padding: 16px 20px;
  text-align: left;
  font-weight: 700;
  font-size: 0.85rem;
  color: #495057;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  border-bottom: 2px solid #dee2e6;
}

tbody td {
  padding: 16px 20px;
  border-bottom: 1px solid #f0f0f0;
  color: #4a4a4a;
  font-size: 0.95rem;
}

tbody tr {
  transition: all 0.2s ease;
}

tbody tr:hover {
  background: #f8f9ff;
  transform: scale(1.005);
}

tbody tr:last-child td {
  border-bottom: none;
}

/* Badges */
.badge {
  display: inline-block;
  padding: 5px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
}

.badge-admin {
  background: #e3f2fd;
  color: #1976d2;
}

.badge-client {
  background: #f3e5f5;
  color: #7b1fa2;
}

/* Boutons de statut */
.btn-status {
  padding: 6px;
}
</style>