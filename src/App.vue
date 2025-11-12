<script setup>
import { computed, onMounted } from 'vue'
import { RouterView, useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'
import ImagesLogo from './assets/images/logo_portal_job.png'

const userStore = useUserStore()
const router = useRouter()

// propriété calculée pour obtenir l'ID de l'utilisateur
// ASSUMPTION : L'ID est stocké dans userStore.user.id
const currentUserId = computed(() => {
  // Vérifiez que userStore.user existe et que userStore.user.id est défini sinon null
  return userStore.user && userStore.user.id ? userStore.user.id : null
})

// propriété calculée pour obtenir l'ID de la company de l'utilisateur
const currentUserCompanyId = computed(() => {
  return userStore.user && userStore.user.company_id ? userStore.user.company_id : null
})

const logout = () => {
  localStorage.removeItem('auth_token')
  userStore.logout()
  router.push('/') // redirection
}

onMounted(() => {
  if (localStorage.getItem('auth_token') !== null) {
    userStore.isAuthenticated = true
  }
})

// computed pour récupérer le prenom
const UserName = computed(() => {
  const prenom = userStore.user.prenom || ''
  // on prend la première lettre du prénom
  return (prenom || '').toUpperCase() // pour la majuscule
})

// Vérifier si l'utilisateur est une company
const isCompany = computed(() => userStore.user?.role === 'company')

// Vérifier si l'utilisateur est admin
const isAdmin = computed(() => userStore.user?.role === 'admin')
</script>

<template>
  <header id="headerOne">
    <nav id="navOne">
      <div class="nav-left" v-if="!userStore.isAuthenticated">
        <a href="/" class="logo">
          <img :src="ImagesLogo" alt="fond logo portal job" />
        </a>
      </div>

      <div class="nav-left" v-if="userStore.isAuthenticated">
        <a href="/home" class="logo">
          <img :src="ImagesLogo" alt="fond logo portal job" />
        </a>
      </div>

      <ul class="menu" v-if="!userStore.isAuthenticated">
        <li><a href="/offers" class="">Nos offres</a></li>
        <li><a href="/Companys" class="">Nos sociétés</a></li>
        <li><a href="/Request" class="">Les demandes</a></li>
        <li><a href="/Contact" class="">Contact</a></li>
      </ul>

      <ul class="menu" v-if="userStore.isAuthenticated">
        <li><a href="/home" class="">Accueil</a></li>

        <li><a href="/offers" class="">Nos offres</a></li>
        <li><a href="/Companys" class="">Nos sociétés</a></li>

        <li><a :href="`/myRequest/${currentUserId}`" class="">Mes demandes</a></li>
        <li><a href="/Request" class="">Les demandes</a></li>

        <li>
          <a :href="`/Dashboard_Company/${currentUserCompanyId}`" class="" v-if="isCompany"
            >Dashboard C</a
          >
        </li>

        <li class="dropdown" v-if="isAdmin">
          <a href="#">Administration ▾</a>
          <ul class="dropdown-content">
            <li><a href="/Dashboard_Admin" class="">Dashboard A</a></li>
            <li><a href="/Request" class="">Les demandes</a></li>
          </ul>
        </li>
      </ul>

      <div class="nav-right" v-if="!userStore.isAuthenticated">
        <a href="/SignIn"> <button class="sign_in">CONNEXION</button> </a>
        <a href="/SignUp/"> <button class="sign_up">INSCRIPTION</button></a>
      </div>

      <div class="nav-right" v-if="userStore.isAuthenticated">
        <div class="user-info">
          <a href="/favoris" class="heart-link" title="Mes favoris" v-if="!isCompany">❤</a>

          <div class="user-dropdown">
            <input type="checkbox" id="user-toggle" hidden />
            <label for="user-toggle" class="user-name">{{ UserName }} ▾</label>

            <ul class="user-menu">
              <li><a href="/favoris" v-if="!isCompany">Favoris</a></li>
              <li><a :href="`/Profil/${currentUserId}`">Profil</a></li>
              <li><a href="/Contact">Contact</a></li>
              <li><a @click="logout">Déconnexion</a></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </header>

  <main>
    <RouterView />
  </main>

  <footer>
    <p>&copy; 2025 - Tous droits réservés</p>
  </footer>
</template>

<style>
.logo img {
  width: 250px;
}
/* HEADER */
#headerOne {
  background-color: var(--bg);
  box-shadow: 0 6px 16px var(--shadow);
  border-bottom: 1px solid #ccc;
  position: sticky;
  top: 0;
  z-index: 1000;
}

#navOne {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 3rem;
  background-color: rgb(240, 240, 240);
}

/* LOGO */
.logo img {
  width: 200px;
}

/* MENU PRINCIPAL */
.menu {
  list-style: none;
  display: flex;
  gap: 2.5rem;
  margin: 0;
  padding: 0;
}

/* afin que la liste s'affiche bien en dessous */
.menu > li {
  position: relative;
}

.menu a {
  text-decoration: none;
  color: var(--text);
  font-weight: 700;
  transition: color 0.3s;
}

.menu a:hover,
.menu a.active {
  color: var(--primary);
}

/* DROPDOWNS */
.dropdown-content {
  display: none;
  position: absolute;
  background: var(--bg);
  box-shadow: 0 4px 12px var(--shadow);
  border-radius: 6px;
  padding: 0.5rem 0;
  list-style: none;
}

.dropdown-content li a {
  display: block;
  padding: 0.5rem 1rem;
  color: black;
  list-style: none;
}

.dropdown-content a:hover {
  background-color: rgba(0, 123, 255, 0.1);
}

.dropdown:hover .dropdown-content {
  display: block;
}

/* === PARTIE DROITE === */
.nav-right {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 1rem;
  position: relative;
}

/* Icône cœur */
.heart-link {
  text-decoration: none;
  color: red;
  font-size: 2rem;
  transition:
    transform 0.2s,
    color 0.2s;
}

.heart-link:hover {
  transform: scale(1.2);
  color: darkred;
}

/* === MENU UTILISATEUR === */
.user-dropdown {
  position: relative;
}

.user-name {
  cursor: pointer;
  font-weight: 700;
  color: var(--text);
}

/* Menu caché par défaut */
.user-menu {
  display: none;
  position: absolute;
  right: 0;
  top: 120%;
  background: var(--bg);
  box-shadow: 0 4px 12px var(--shadow);
  border-radius: 8px;
  list-style: none;
  padding: 0.5rem 0;
  min-width: 150px;
  z-index: 100;
}

/* Quand la case est cochée → afficher le menu */
#user-toggle:checked ~ .user-menu {
  display: block;
}

.user-menu li {
  text-align: left;
}

.user-menu a {
  display: block;
  padding: 0.6rem 1rem;
  color: var(--text);
  text-decoration: none;
  transition: background 0.2s;
}

.user-menu a:hover {
  background-color: rgba(0, 123, 255, 0.1);
}
</style>
