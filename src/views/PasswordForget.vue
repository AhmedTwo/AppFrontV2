<script setup>
import ImagesPortal from '../assets/images/Portal.png'
</script>

<template>
  <div id="containerFirst">
    <div id="containerSecond">
      <h1 class="h1Forget">
        Mot de passe oublié &nbsp;&nbsp;
        <img :src="ImagesPortal" alt="fond logo porte de portal job" width="35" />
      </h1>

      <p>
        Entrez votre <span class="spanEmail">adresse mail</span> pour recevoir un
        <span class="spanNewPassword">nouveau mot de passe</span> sur votre boite mail :
      </p>

      <div style="color: red; text-align: center; padding: 0.5rem" id="errorMessage"></div>
      <div id="successMessage" style="color: green; text-align: center; padding: 0.5rem"></div>

      <form id="loginForm" method="POST" action="/connexion/passwordForget">
        <div class="divLogin">
          <label for="inputEmail">Adresse email :</label><br />
          <input
            type="email"
            id="inputEmail"
            name="inputEmail"
            placeholder="&nbsp;exemple@gmail.com"
            required
          /><br /><br />
        </div>
        <button type="submit" class="sendButton">Envoi du nouveau mot de passe</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
/* COULEURS UTILES */
/* Bleu principal: #007bff */
/* Couleur de fond: #f4f6f9 */
/* Couleur de texte sombre: #212529 */
/* Ombre: 0 10px 25px rgba(0, 0, 0, 0.15) */
/* Bordure input: #ced4da */
/* Erreur: #dc3545 (Rouge) */
/* Succès: #198754 (Vert) */

/* -------------------
   CONTENEUR GLOBAL
   ------------------- */

#containerFirst {
  /* Assure un centrage vertical sur toute la page */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f4f6f9; /* Fond clair */
  padding: 80px;
  box-sizing: border-box;
}

/* -------------------
   CARTE DU FORMULAIRE
   ------------------- */

#containerSecond {
  background-color: #ffffff;
  padding: 30px; /* Padding généreux */
  border: none;
  border-radius: 15px; /* Coins arrondis */
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15); /* Ombre douce */
  width: 100%;
  max-width: 420px; /* Largeur fixe */
  margin: 0; /* Annule le margin-top du HTML pour un centrage propre */
}

/* Titre */
.h1Forget {
  text-align: center;
  font-size: 2.2rem;
  color: #212529; /* Texte sombre */
  font-weight: 700;
  margin-bottom: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid #e9ecef;
  padding-bottom: 15px;
}

/* Texte d'explication */
p {
  text-align: center;
  margin-bottom: 20px;
  color: #495057;
  line-height: 1.5;
}

/* Mise en évidence dans le paragraphe */
.spanNewPassword {
  color: #dc3545; /* Remplacé par un rouge */
  font-weight: 700;
}

.spanEmail {
  color: #212529; /* Remplacé par un noir/gris foncé */
  font-weight: 700;
}

/* Messages (Erreur/Succès) */
#errorMessage {
  background-color: rgba(220, 53, 69, 0.1);
  color: #dc3545 !important;
  border-radius: 5px;
  font-weight: 500;
  margin-bottom: 15px;
}

#successMessage {
  background-color: rgba(25, 135, 84, 0.1);
  color: #198754 !important;
  border-radius: 5px;
  font-weight: 500;
  margin-bottom: 15px;
}

/* -------------------
   FORMULAIRE ET INPUT
   ------------------- */

#loginForm {
  display: flex;
  flex-direction: column;
  gap: 20px; /* Espacement entre le champ et le bouton */
}

.divLogin {
  display: flex;
  flex-direction: column;
}

.divLogin label {
  font-weight: 600;
  color: #212529;
  margin-bottom: 8px;
  font-size: 1rem;
}

.divLogin input {
  padding: 12px 10px;
  border: 1px solid #ced4da;
  border-radius: 8px;
  font-size: 1rem;
  transition:
    border-color 0.3s,
    box-shadow 0.3s;
  width: 100%; /* Assure que l'input prend toute la largeur */
  box-sizing: border-box;
}

.divLogin input:focus {
  border-color: #007bff;
  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.25);
  outline: none;
}

/* -------------------
   BOUTON
   ------------------- */

.sendButton {
  padding: 12px;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  transition:
    background-color 0.3s ease,
    transform 0.1s;
  border: none; /* Suppression de la bordure du HTML */
  border-radius: 10px;
  width: 100%;
  color: white; /* Texte blanc */
  background-color: #007bff; /* Fond bleu */
  box-shadow: 0 4px 10px rgba(0, 123, 255, 0.2);
}

.sendButton:hover {
  background-color: #0056b3; /* Bleu foncé au survol */
  color: white; /* Conserver le blanc */
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

  .h1Forget {
    font-size: 1.8rem;
    margin-bottom: 20px;
  }

  .divLogin input {
    font-size: 0.9rem;
    padding: 10px;
  }

  .sendButton {
    font-size: 1rem;
    padding: 10px;
  }
}
</style>
