<script setup>
import ImagesLogo from '../assets/images/imagePortal.png'
</script>

<template>
  <div class="profil-container">
    <img
      class="profil-photo"
      :src="ImagesLogo"
      accept=".jpg, .png"
      alt="Photo de profil"
      width="300px"
    />
    <a href="/Profil/UpdateProfil">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-pencil-square"
        viewBox="0 0 16 16"
      >
        <path
          d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
        />
        <path
          fill-rule="evenodd"
          d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
        />
      </svg>
    </a>

    <div class="profil-info">
      <h3>Seghiri Ahmed</h3>
      <p><span>Email :</span> seghiriahmed9@gmail.com</p>
      <p><span>Téléphone :</span> 06 12 34 56 78</p>
      <p><span>Ville :</span> Paris (75000)</p>
      <p>
        <span>CV :</span>
        <a href="#" target="_blank">\'Voir le CV'/</a>
      </p>
      <p><span>Qualification :</span> Etudiant</p>
      <p><span>Disponible :</span> NON</p>
      <p><span>Rôle :</span> Admin</p>
    </div>
  </div>
</template>

<style scoped>
/* Container */
.profil-container {
  background: #ffffff;
  border-radius: 16px;
  padding: 2.5rem;
  max-width: 450px;
  margin: 2rem auto;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.08);
  text-align: center;
  transition: box-shadow 0.3s ease;
}

.profil-container:hover {
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
}

/* Image profil */
.profil-photo {
  width: 140px;
  height: 140px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #f0f0f0;
  margin-bottom: 1.5rem;
  transition: transform 0.3s ease;
}

.profil-photo:hover {
  transform: scale(1.05);
}

/* Nom */
.profil-info h3 {
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: #2c3e50;
}

/* Infos */
.profil-info p {
  font-size: 1rem;
  margin: 0.85rem 0;
  color: #5a6c7d;
  line-height: 1.6;
}

.profil-info span {
  font-weight: 600;
  color: #2c3e50;
}

/* Lien CV */
.profil-info a {
  display: inline-block;
  margin-top: 1.25rem;
  color: #0d6efd;
  font-weight: 600;
  text-decoration: none;
  border-bottom: 2px solid transparent;
  transition: border-color 0.3s ease;
}

.profil-info a:hover {
  border-bottom-color: #0d6efd;
}

/* Bouton */
.profil-actions {
  margin-top: 2rem;
}

.btn-edit-profil {
  background: #0d6efd;
  color: #fff;
  padding: 12px 32px;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-edit-profil:hover {
  background: #0b5ed7;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(13, 110, 253, 0.3);
}

.btn-edit-profil:active {
  transform: translateY(0);
}

/* Responsive */
@media (max-width: 768px) {
  .profil-container {
    max-width: 90%;
    padding: 2rem;
  }

  .profil-photo {
    width: 120px;
    height: 120px;
  }

  .profil-info h3 {
    font-size: 1.5rem;
  }

  .btn-edit-profil {
    width: 100%;
  }
}

@media (max-width: 480px) {
  .profil-container {
    padding: 1.5rem;
  }

  .profil-photo {
    width: 100px;
    height: 100px;
  }

  .profil-info h3 {
    font-size: 1.3rem;
  }

  .profil-info p {
    font-size: 0.95rem;
  }
}
</style>
