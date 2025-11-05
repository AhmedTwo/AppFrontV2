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
    userStore.login(responses.data)
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
          <p>Vous n'avez pas de compte ? <a href="/SignUp/addUser/">Inscription !</a></p>
          <p>Vous êtes une Société ? <a href="/SignIn/applyCompany">Rejoignez-nous !</a></p>
          <br />
        </div>
        <button type="submit" id="sign_in">Se connecter !</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.background-logo {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  opacity: 0.1; /* ajuste la transparence à mon goût */
  z-index: 1;
  pointer-events: none;
}

/* Conteneur principal */
#containerFirst {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-height: 77vh; /* viewport height, 1 vh = 1 % de la hauteur de la fenêtre d’affichage */
}

/* Titre */
.h1Login {
  text-align: center;
  font-size: 2rem;
  color: black;
  margin-bottom: 2rem;
}

/* Formulaire */
#containerSecond {
  background-color: #ffffff;
  padding: 1rem 1.5rem;
  border: 1px solid black;
  border-radius: 12px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.637);
  width: 30%;
  max-width: 400px;
  margin-top: 4%;
}

#loginForm {
  display: flex;
  flex-direction: column;
}

.divLogin {
  display: flex;
  flex-direction: column;
}

.divLogin label {
  font-weight: 600;
  margin-bottom: 0.8rem;
  color: black;
}

.divLogin input {
  padding: 0.5rem 0;
  border: 1px solid rgba(0, 0, 0, 0.671);
  border-radius: 5px;
}

.divLogin input:focus {
  border-color: #007bff;
  outline: none; /* ca supprime le contour du focus ajouté par le navigateur. */
}

/* Liens inscription / société */
#inscri_apply {
  text-align: center;
  font-size: 1rem;
  color: black;
}

a {
  color: #007bff;
  text-decoration: none;
  font-weight: 700;
}

a:hover {
  text-decoration: underline;
}

/* Bouton */
#sign_in {
  padding: 0.8rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  border: 2px solid var(--primary);
  border-radius: 10px;
  width: 100%;
  color: black;
}

#sign_in:hover {
  background-color: rgba(106, 139, 247, 0.63);
  box-shadow: 0 4px 8px rgba(0, 123, 255, 0.3);
}

/* responsive fait par chat gpt car je ne connais et comprends pas */

@media (max-width: 480px) {
  .h1Login {
    font-size: 1.8rem; /* titre plus petit */
    margin-bottom: 1.5rem;
  }

  #containerSecond {
    padding: 1.5rem 1.2rem; /* réduit marges internes */
    max-width: 95%; /* formulaire presque pleine largeur */
  }

  .divLogin input {
    font-size: 0.95rem;
    padding: 0.6rem 0.8rem;
  }

  #button {
    width: 100%; /* bouton prend toute la largeur */
    padding: 0.8rem;
  }
}
</style>
