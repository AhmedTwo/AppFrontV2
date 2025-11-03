<script setup>
import ImagesPortal from '../assets/images/Portal.png'
import ImagesLogo from '../assets/images/imagePortal.png'
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
      <div
        class="alert-message error"
        style="color: red; text-align: center; padding: 0.5rem; display: none"
      >
        Message d’erreur ici
      </div>

      <form id="loginForm" action="/connexion" method="POST">
        <div class="divLogin">
          <label for="inputEmail">Email :</label>
          <input
            type="email"
            name="inputEmail"
            id="inputEmail"
            placeholder="&nbsp;exemple@gmail.com"
          />
        </div>
        <div class="divLogin">
          <label for="inputMdp">Mot de passe :</label>
          <input type="password" name="inputMdp" id="inputMdp" placeholder="&nbsp;********" />
          <p><a href="/SignIn/passwordForget">Mot de passe oublié ?</a></p>
        </div>

        <div id="inscri_apply">
          <p>Vous n'avez pas de compte ? <a href="/SignUp/addUser/">Inscription !</a></p>
          <p>Vous êtes une Société ? <a href="/SignIn/applyCompany">Rejoignez-nous !</a></p>
          <br />
        </div>

      </form>
      <button type="submit" id="sign_in"><a class="sign_inA" href="/home">Se connecter !</a></button>
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
}

#sign_in:hover {
  background-color: rgba(106, 139, 247, 0.63);
  box-shadow: 0 4px 8px rgba(0, 123, 255, 0.3);
}

.sign_inA:hover {
  color: white;
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
