<script setup></script>

<template>
  <div id="containerFirst">
    <div id="containerSecond">
      <h1 class="h1AddCompany">AJOUT D'UNE NOUVELLE SOCIÉTÉ !</h1>

      <!-- Utiliser une URL absolue avec un / au début
    garantit que le POST sera envoyé à la bonne route, et donc que ce bloc sera bien déclenché  -->
      <form
        id="addCompanyForm"
        method="POST"
        action="/connexion/applyCompany"
        onsubmit="return validerSiret()"
      >
        <div class="divAdd">
          <label for="inputNom">NOM DE LA SOCIÉTÉ</label>
          <input type="text" id="inputNom" name="inputNom" required />
        </div>
        <div class="divAdd">
          <label for="inputNbEmploye">NOMBRE EMPLOYEES</label>
          <input type="text" id="inputNbEmploye" name="inputNbEmploye" required />
        </div>
        <div class="divAdd">
          <label for="inputDomaine">DOMAINE</label>
          <input type="text" id="inputDomaine" name="inputDomaine" required />
        </div>
        <div class="divAdd">
          <label for="inputAdresse">ADRESSE POSTALE</label>
          <input type="text" id="inputAdresse" name="inputAdresse" required />
        </div>
        <div class="divAdd">
          <label for="inputLatitutde">LATITUDE</label>
          <input type="text" id="inputLatitutde" name="inputLatitutde" required />
        </div>
        <div class="divAdd">
          <label for="inputLongitude">LONGITUDE</label>
          <input type="text" id="inputLongitude" name="inputLongitude" required />
        </div>
        <div class="divAdd">
          <label for="inputDescription">DESCRIPTIF</label>
          <input type="text" id="inputDescription" name="inputDescription" required />
        </div>
        <div class="divAdd">
          <label for="inputEmail">EMAIL</label>
          <input type="email" id="inputEmail" name="inputEmail" required />
        </div>
        <div class="divAdd">
          <!-- inputmode="numeric" → pavé numérique sur smartphone
                 pattern="\d{14}" → exactement 14 chiffres
                 maxlength="14" → limite de saisie -->
          <label for="inputSiret">N_SIRET</label>
          <input
            type="text"
            id="inputSiret"
            name="inputSiret"
            inputmode="numeric"
            pattern="\d{14}"
            maxlength="14"
            required
          />
        </div>

        <div class="divAdd">
          <label for="inputLogo">LIEN DU LOGO</label>
          <input type="text" id="inputLogo" name="inputLogo" required />
        </div>

        <div class="divAdd">
          <label for="inputLogo">NOM</label>
          <input type="text" id="inputFirstName" name="inputFirstName" required />
        </div>

        <div class="divAdd">
          <label for="inputLogo">PRENOM</label>
          <input type="text" id="inputLastName" name="inputLastName" required />
        </div>

        <div class="divAdd">
          <label for="telephone">TELEPHONE</label>
          <input type="text" id="telephone" name="inputTelephone" required />
        </div>

        <div class="divAdd">
          <label for="ville">VILLE</label>
          <input type="text" id="ville" name="inputVille" required />
        </div>

        <div class="divAdd">
          <label for="zipcode">CODE POSTAL</label>
          <input type="text" id="zipcode" name="inputZipcode" required />
        </div>

        <div class="divAdd">
          <label for="photo">PHOTO DE PROFIL :</label>
          <input type="file" id="photo" name="inputPhoto" accept=".pdf, .jpg, .png" required />
        </div>

        <button
          type="submit"
          class="btn"
          onclick="return confirm('Es-tu sûr de vouloir envoyer cette société à Admin ?')"
          title="Envoyer"
        >
          ENVOYER
        </button>
      </form>
    </div>
  </div>
</template>

<style scoped>
/* COULEURS */
/* Bleu principal: #0d6efd */
/* Couleur de fond de page: #f8f9fa */
/* Couleur de texte: #212529 */
/* Bordure input: #ced4da */
/* Ombre carte: 0 5px 12px rgba(0, 0, 0, 0.05) */

/* -------------------
   CONTENEUR GLOBAL
   ------------------- */

#containerFirst {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f8f9fa;
  padding: 35px 0;
}

/* -------------------
   CARTE DU FORMULAIRE COMPACT
   ------------------- */

#containerSecond {
  background-color: #ffffff;
  padding: 20px; /* Réduction du padding */
  border: none;
  border-radius: 10px;
  box-shadow: 0 5px 12px rgba(0, 0, 0, 0.05); /* Ombre très légère */
  width: 95%;
  max-width: 950px; /* Augmenté légèrement pour étaler les 16 champs */
  margin: 0;
}

/* Titre */
.h1AddCompany {
  text-align: center;
  font-size: 1.8rem; /* Titre plus petit */
  color: #212529;
  font-weight: 700;
  margin-bottom: 15px; /* Réduction de la marge */
  padding-bottom: 10px;
  border-bottom: 1px solid #e9ecef;
}

/* -------------------
   GRILLE DU FORMULAIRE (2 COLONNES)
   ------------------- */

#addCompanyForm {
  display: flex;
  flex-wrap: wrap;
  gap: 10px; /* Très petit gap entre les champs pour économiser de l'espace */
  justify-content: space-between;
}

.divAdd {
  /* Assure 2 colonnes sur desktop */
  flex: 1 1 calc(50% - 5px); /* Calcul adapté au gap de 10px */
  display: flex;
  flex-direction: column;
}

.divAdd label {
  font-weight: 600;
  margin-bottom: 3px; /* Marge minimale */
  color: #212529;
  font-size: 0.85rem; /* Très petit label */
  text-transform: uppercase;
}

.divAdd input {
  padding: 8px 8px; /* Padding minimaliste */
  border: 1px solid #ced4da;
  border-radius: 4px;
  font-size: 0.9rem;
  transition:
    border-color 0.3s,
    box-shadow 0.3s;
}

.divAdd input:focus {
  border-color: #0d6efd;
  box-shadow: 0 0 0 2px rgba(13, 110, 253, 0.2);
  outline: none;
}

/* -------------------
   ÉLÉMENTS PLEINE LARGEUR
   ------------------- */

/* Le dernier élément (bouton) prend toute la largeur */
.btn {
  flex: 1 1 100%;
}

/* Gestion du champ de fichier (pour qu'il ne soit pas trop haut) */
.divAdd input[type='file'] {
  padding: 6px 8px;
}

/* -------------------
   BOUTON
   ------------------- */

.btn {
  padding: 10px;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  transition: background-color 0.3s ease;
  border: none;
  border-radius: 6px;
  color: white;
  background-color: #0d6efd;
  box-shadow: 0 2px 5px rgba(13, 110, 253, 0.2);
  margin-top: 15px;
}

.btn:hover {
  background-color: #0b5ed7;
  box-shadow: 0 4px 8px rgba(13, 110, 253, 0.3);
}

/* -------------------
   RESPONSIVE (Mode Colonne Ultra-Compact)
   ------------------- */

@media (max-width: 900px) {
  /* Passage à une seule colonne pour maximiser la hauteur verticale disponible */
  .divAdd {
    flex: 1 1 100%;
  }
}

@media (max-width: 600px) {
  #containerSecond {
    padding: 15px;
    max-width: 95%;
  }

  .h1AddCompany {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }
}
</style>
