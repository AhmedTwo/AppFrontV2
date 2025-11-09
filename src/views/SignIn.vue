<script setup>
import ImagesPortal from '../assets/images/Portal.png'
import ImagesLogo from '../assets/images/imagePortal.png'

// --- 2. Importations des Librairies et Fonctions Vue/Externes ---
import { ref } from 'vue' // 'ref', fonction pour créer des variables réactives (qui mettent à jour l'interface automatiquement).
import api from '@/services/api' // instance d'Axios personnalisée pour faire les requêtes HTTP.
import { useRouter } from 'vue-router' // 'useRouter' permet de naviguer entre les pages après une action.
import { useUserStore } from '@/stores/user'

// --- 3. Initialisation et Variables Réactives ---
const router = useRouter() // le routeur : cela nous donne accès aux méthodes de navigation (comme 'push').
const errorMessage = ref('') // Variable réactive pour stocker et afficher les messages d'erreur à l'utilisateur.
const userStore = useUserStore()

// Variable réactive pour stocker les données du formulaire de connexion. (vide au départ)
const login = ref({
  email: '',
  password: '',
})

// --- 4. Fonction Principale de Connexion ---
// Fonction asynchrone pour gérer la soumission du formulaire.
const loginUser = async () => {
  try {
    // Tente d'envoyer une requête POST au serveur sur le point de terminaison '/login'.
    // 'login.value' contient l'objet { email: '...', password: '...' }.
    const responses = await api.post('/login', login.value) // Si la connexion réussit :
    // 1. Stocke le token d'authentification reçu du serveur dans le stockage local (LocalStorage).
    // C'est ce token qui sera automatiquement ajouté aux futures requêtes par l'intercepteur !
    localStorage.setItem('auth_token', responses.data.token)
    userStore.login(responses.data.user)
    // console.log(responses.data) // Affiche la réponse du serveur dans la console (pour débogage).
    router.push('/Home') // Redirige l'utilisateur vers la page '/Home'. suite de la connexion réussi.
  } catch (err) {
    console.log(err) // Affiche l'erreur complète dans la console (pour le développeur).
    // Vérifie si l'erreur est une réponse HTTP spécifique (ex: 401 Unauthorized).
    if (err.response && err.response.status === 401) {
      // Affiche un message d'erreur spécifique pour l'utilisateur.
      errorMessage.value = 'Votre email mot de passe et/ou mot de passe est incorrect !'
    } else {
      // Affiche un message d'erreur générique pour les autres types de problèmes.
      errorMessage.value = 'Veuillez remplir les champs !'
    }
  }
}
</script>

<template>
  <div id="containerFirst">
    <img :src="ImagesLogo" alt="fond logo portal job" class="background-logo" />
    <div id="containerSecond">
      <h1 class="h1Login">
        CONNEXION &nbsp;&nbsp;
        <img :src="ImagesPortal" alt="fond logo porte de portal job" width="35" />
      </h1>
      <!-- &nbsp; me permet de faire un espace en html -->

      <form id="loginForm" @submit.prevent="loginUser">
        <!-- ecoute la soumission du form avec @submit -->
        <!-- empeche le rechargement de la page avec .prevent -->
        <!-- pui sa execute la fonction loginUser -->
        <div class="divLogin">
          <label for="inputEmail">Email :</label>
          <input
            v-model="login.email"
            type="email"
            name="inputEmail"
            id="inputEmail"
            placeholder="&nbsp;exemple@gmail.com"
          />
        </div>
        <div class="divLogin">
          <label for="inputMdp">Mot de passe :</label>
          <input
            v-model="login.password"
            type="password"
            name="inputMdp"
            id="inputMdp"
            placeholder="&nbsp;********"
          />
        </div>
        <div v-if="errorMessage">
          <span style="color: red">{{ errorMessage }}</span>
        </div>
        <p><a href="/SignIn/passwordForget">Mot de passe oublié ?</a></p>

        <div id="inscri_apply">
          <p>Vous n'avez pas de compte ? <a href="/SignUp/">Inscription !</a></p>
          <p>Vous êtes une Société ? <a href="/SignIn/AddCompany/">Rejoignez-nous !</a></p>
          <br />
        </div>
        <button type="submit" id="sign_in">Se connecter !</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
/* -------------------
   FOND ET CONTENEUR GLOBAL
   ------------------- */

.background-logo {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  opacity: 0.08;
  z-index: 1;
  pointer-events: none;
}

#containerFirst {
  /* Bleu principal: #007bff */
  /* Couleur de fond: #f4f6f9 */
  /* Couleur de texte sombre: #212529 */
  /* Ombre: 0 10px 25px rgba(0, 0, 0, 0.15) */
  /* Bordure input: #ced4da */
  /* Erreur: #dc3545 */

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f4f6f9;
  padding: 80px;
  box-sizing: border-box;
  z-index: 2;
  position: relative;
}

/* -------------------
   CARTE DE CONNEXION
   ------------------- */

#containerSecond {
  background-color: #ffffff; /* Remplacement de var(--card-background) */
  padding: 30px;
  border: none;
  border-radius: 15px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15); /* Remplacement de var(--card-shadow) */
  width: 100%;
  max-width: 420px;
  margin: 0;
  z-index: 10;
}

.h1Login {
  text-align: center;
  font-size: 2.2rem;
  color: #212529; /* Remplacement de var(--secondary-color) */
  font-weight: 700;
  margin-bottom: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* -------------------
   FORMULAIRE ET CHAMPS
   ------------------- */

#loginForm {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.divLogin {
  display: flex;
  flex-direction: column;
}

.divLogin label {
  font-weight: 600;
  margin-bottom: 5px;
  color: #212529; /* Remplacement de var(--secondary-color) */
  font-size: 0.95rem;
}

.divLogin input {
  padding: 12px 10px;
  border: 1px solid #ced4da; /* Remplacement de var(--input-border) */
  border-radius: 8px;
  font-size: 1rem;
  transition:
    border-color 0.3s,
    box-shadow 0.3s;
}

.divLogin input:focus {
  border-color: #007bff; /* Remplacement de var(--primary-color) */
  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.25);
  outline: none;
}

/* Message d'erreur */
div[v-if='errorMessage'] span {
  display: block;
  margin-top: 10px;
  padding: 8px 10px;
  background-color: rgba(220, 53, 69, 0.1);
  color: #dc3545 !important; /* Remplacement de var(--error-color) */
  border-radius: 5px;
  font-weight: 500;
  text-align: center;
}

/* Liens génériques */
p {
  margin-top: 5px;
  margin-bottom: 5px;
  font-size: 0.9rem;
  color: #212529; /* Remplacement de var(--secondary-color) */
  text-align: right;
}

a {
  color: #007bff; /* Remplacement de var(--primary-color) */
  text-decoration: none;
  font-weight: 600;
  transition: color 0.2s;
}

a:hover {
  color: #0056b3;
  text-decoration: underline;
}

/* Liens inscription / société */
#inscri_apply {
  text-align: center;
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 0.9rem;
}

#inscri_apply p {
  text-align: center;
  margin: 5px 0;
}

/* -------------------
   BOUTON
   ------------------- */

#sign_in {
  padding: 12px;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  transition:
    background-color 0.3s ease,
    transform 0.1s;
  border: none;
  border-radius: 10px;
  width: 100%;
  color: white;
  background-color: #007bff; /* Remplacement de var(--primary-color) */
  box-shadow: 0 4px 10px rgba(0, 123, 255, 0.2);
  margin-top: 15px;
}

#sign_in:hover {
  background-color: #0056b3;
  box-shadow: 0 6px 15px rgba(0, 123, 255, 0.3);
  transform: translateY(-1px);
}

/* -------------------
   RESPONSIVE
   ------------------- */

@media (max-width: 550px) {
  #containerSecond {
    padding: 25px 20px;
    max-width: 90%;
  }

  .h1Login {
    font-size: 1.8rem;
    margin-bottom: 20px;
  }

  .divLogin input {
    font-size: 0.9rem;
  }

  #sign_in {
    font-size: 1rem;
    padding: 10px;
  }
}
</style>
