<script setup>
import ImagesPortal from '../assets/images/Portal.png'
</script>

<template>
  <div id="containerFirst">
    <div id="containerSecond">
      <h1 class="h1Add">
        INSCRIPTION &nbsp;&nbsp;
        <img :src="ImagesPortal" alt="fond logo porte de portal job" width="35" />
      </h1>

      <form id="addForm" method="POST" action="/inscription/addUser/" enctype="multipart/form-data">
        <div class="divAdd">
          <label for="nom">Nom</label>
          <input type="text" id="nom" name="inputNom" required />
        </div>

        <div class="divAdd">
          <label for="prenom">Prénom</label>
          <input type="text" id="prenom" name="inputPrenom" required />
        </div>

        <div class="divAdd">
          <label for="email">Email</label>
          <input type="email" id="email" name="inputEmail" required />
        </div>

        <div class="divAdd">
          <label for="password">Mot de passe</label>
          <input type="password" id="password" name="inputPassword" required />
        </div>

        <div class="divAdd">
          <label for="telephone">Téléphone</label>
          <input type="text" id="telephone" name="inputTelephone" required />
        </div>

        <div class="divAdd">
          <label for="ville">Ville</label>
          <input type="text" id="ville" name="inputVille" required />
        </div>

        <div class="divAdd">
          <label for="zipcode">Code postal</label>
          <input type="text" id="zipcode" name="inputZipcode" required />
        </div>

        <div class="divAdd">
          <label for="qualification">Qualification</label>
          <input type="text" id="qualification" name="inputQualification" required />
        </div>

        <div class="divAdd">
          <label for="preference">Préférences</label>
          <input type="text" id="preference" name="inputPreference" required />
        </div>

        <div class="divAdd radio-box">
          <p>Disponibilité immédiate :</p>
          <label><input type="radio" name="choix" value="1" required /> Oui</label>
          <label><input type="radio" name="choix" value="0" required /> Non</label>
        </div>

        <div class="divAdd">
          <label for="photo">Photo de profil :</label>
          <input type="file" id="photo" name="inputPhoto" accept=".jpg, .jpeg, .png" required />
          <label for="cv">CV :</label>
          <input type="file" id="cv" name="inputCv" accept=".pdf" required />
        </div>

        <button type="submit" class="btn">S'INSCRIRE</button>
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
/* Ombre carte: 0 8px 15px rgba(0, 0, 0, 0.08) */

/* -------------------
   CONTENEUR GLOBAL
   ------------------- */

#containerFirst {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f8f9fa;
  padding: 70px 0; /* Réduction du padding général */
}

/* -------------------
   CARTE DU FORMULAIRE COMPACT
   ------------------- */

#containerSecond {
  background-color: #ffffff;
  padding: 25px; /* Réduction du padding de la carte */
  border: none;
  border-radius: 10px;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.08); /* Ombre plus légère */
  width: 95%;
  max-width: 800px; /* Légère réduction de la largeur max */
  margin-top: 0;
}

/* Titre */
.h1Add {
  text-align: center;
  font-size: 2rem; /* Réduction de la taille du titre */
  color: #212529;
  font-weight: 700;
  margin-bottom: 20px; /* Réduction de la marge */
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 10px;
  border-bottom: 1px solid #e9ecef; /* Bordure plus fine */
}

/* -------------------
   GRILLE DU FORMULAIRE (2 COLONNES)
   ------------------- */

#addForm {
  display: flex;
  flex-wrap: wrap;
  gap: 15px; /* Réduction du gap entre les champs */
  justify-content: space-between;
}

.divAdd {
  /* Assure 2 colonnes sur desktop */
  flex: 1 1 calc(50% - 7.5px); /* Calcul adapté au nouveau gap */
  display: flex;
  flex-direction: column;
}

.divAdd label {
  font-weight: 600;
  margin-bottom: 5px; /* Forte réduction de la marge du label */
  color: #212529;
  font-size: 0.9rem; /* Réduction de la taille du label */
}

.divAdd input[type='text'],
.divAdd input[type='email'],
.divAdd input[type='password'],
.divAdd input[type='file'] {
  padding: 8px 10px; /* Forte réduction du padding des inputs */
  border: 1px solid #ced4da;
  border-radius: 6px;
  font-size: 0.95rem; /* Réduction de la taille du texte dans l'input */
  transition:
    border-color 0.3s,
    box-shadow 0.3s;
}

.divAdd input:focus {
  border-color: #0d6efd;
  box-shadow: 0 0 0 2px rgba(13, 110, 253, 0.2); /* Ombre de focus plus petite */
  outline: none;
}

/* -------------------
   ÉLÉMENTS PLEINE LARGEUR
   ------------------- */

.divAdd.radio-box,
.btn {
  flex: 1 1 100%;
}

/* Gestion spécifique des labels pour les champs de fichiers (pour éviter qu'ils ne débordent) */
.divAdd:last-of-type {
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  padding-top: 5px;
  padding-bottom: 5px;
}

.divAdd:last-of-type label {
  margin-bottom: 0;
  flex-shrink: 0;
}

.divAdd:last-of-type input[type='file'] {
  flex-grow: 1;
  border: none;
  padding: 0;
}

/* Style de la boîte radio */
.radio-box {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px;
  padding: 5px 0;
}

.radio-box p {
  font-weight: 600;
  margin: 0;
  color: #212529;
  font-size: 0.9rem;
}

.radio-box label {
  font-weight: normal;
  margin: 0;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 0.9rem;
}

.radio-box input[type='radio'] {
  width: 14px;
  height: 14px;
  margin-right: 4px;
}

/* -------------------
   BOUTON
   ------------------- */

.btn {
  padding: 10px; /* Réduction du padding du bouton */
  font-size: 1rem; /* Réduction de la taille du bouton */
  font-weight: 700;
  transition: background-color 0.3s ease;
  border: none;
  border-radius: 8px; /* Coins légèrement moins arrondis */
  color: white;
  background-color: #0d6efd;
  box-shadow: 0 3px 8px rgba(13, 110, 253, 0.2);
  margin-top: 10px; /* Réduction de la marge au-dessus du bouton */
}

.btn:hover {
  background-color: #0b5ed7;
  box-shadow: 0 4px 10px rgba(13, 110, 253, 0.3);
  transform: none; /* Supprimer la translation pour un look plus plat et compact */
}

/* -------------------
   RESPONSIVE (Ajustements compressés)
   ------------------- */

@media (max-width: 850px) {
  /* La grille bascule en une seule colonne sur les écrans de taille moyenne */
  .divAdd {
    flex: 1 1 100%;
  }
}

@media (max-width: 600px) {
  #containerSecond {
    padding: 20px;
    max-width: 95%;
  }

  .h1Add {
    font-size: 1.6rem;
    margin-bottom: 15px;
  }

  .divAdd:last-of-type {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }

  .divAdd:last-of-type label {
    width: 100%;
    margin-bottom: 0;
  }

  .radio-box {
    flex-wrap: wrap;
  }
}
</style>
