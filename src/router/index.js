import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Connexion from '../views/SignIn.vue'
import Inscription from '../views/SignUp.vue'
import Password from '../views/PasswordForget.vue'
import ApplyCompany from '../views/AddCompany.vue'
import Accueil from '../views/Home.vue'
import Apply from '../views/ApplyOffer.vue'
import Offers from '../views/Offers.vue'
import Companys from '../views/Companys.vue'
import CompanyDetails from '../views/CompanyDetails.vue'
import myRequest from '../views/MyRequest.vue'
import Request from '../views/Request.vue'
import DashboardCompany from '../views/DashboardCompany.vue'
import AddOffers from '../views/AddOffers.vue'
import DashboardAdmin from '../views/DashboardAdmin.vue'
import Favoris from '../views/Favoris.vue'
import Profil from '../views/Profil.vue'
import Contact from '../views/Contact.vue'
import OffersCompany from '../views/OffersCompany.vue'
import UpdateMyRequest from '../views/UpdateMyRequest.vue'
import AddMyRequest from '../views/AddMyRequest.vue'
import UpdateOfferById from '../views/UpdateOffer.vue'
import UpdateCompanyByID from '../views/UpdateCompany.vue'
import UpdateProfil from '../views/UpdateProfil.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: HomeView,
    },
    {
      path: '/SignIn',
      name: 'connexion',
      component: Connexion,
    },
    {
      path: '/SignUp/',
      name: 'inscription',
      component: Inscription,
    },
    {
      path: '/SignIn/passwordForget',
      name: 'motDePasse',
      component: Password,
    },
    {
      path: '/SignIn/AddCompany',
      name: 'ajoutSociete',
      component: ApplyCompany,
    },
    {
      path: '/Home',
      name: 'Accueil',
      component: Accueil,
    },
    {
      path: '/Home/apply/:id',
      name: "Postuler à l'offre",
      component: Apply,
    },
    {
      path: '/Offers',
      name: 'Nos Offres',
      component: Offers,
    },
    {
      path: '/Companys',
      name: 'Nos Companys',
      component: Companys,
    },
    {
      path: '/Companys/CompanyDetails/:id',
      name: 'Détails de la société',
      component: CompanyDetails,
    },
    {
      path: '/OffersCompany',
      name: 'Les Offres de La Société',
      component: OffersCompany,
    },
    {
      path: '/myRequest/:id', // id de users
      name: 'Mes Demandes',
      component: myRequest,
    },
    {
      path: '/Request',
      name: 'Toutes les Demandes',
      component: Request,
    },
    {
      path: '/Dashboard_Company/:companyId',
      name: 'Tableau de Bord Société',
      component: DashboardCompany,
      children: [
        {
          path: 'AddOffers', // Le chemin devient juste 'AddOffers'
          name: "Ajout d'une offre",
          component: AddOffers,
        },
        {
          path: 'UpdateOffer/:id', // Le chemin devient 'UpdateOffer/:id'
          name: 'Modif Offre Company',
          component: UpdateOfferById,
        },
        {
          path: 'UpdateCompany/:id', // Le chemin devient 'UpdateCompany/:id'
          name: 'Modif Company Dashboard',
          component: UpdateCompanyByID,
        },
      ],
    },
    {
      path: '/Favoris',
      name: 'Mes Favoris',
      component: Favoris,
    },
    {
      path: '/Profil/:id',
      name: 'Mon Profil',
      component: Profil,
    },
    {
      path: '/Contact',
      name: 'Contact',
      component: Contact,
    },
    {
      path: '/myRequest/UpdateMyRequest/:id',
      name: 'Modif Demande',
      component: UpdateMyRequest,
    },
    {
      path: '/Dashboard_Admin/UpdateCompany',
      name: 'Modif Company Admin',
      component: UpdateCompanyByID,
    },
    {
      path: '/Profil/UpdateProfil/:id',
      name: 'Modif Profil',
      component: UpdateProfil,
    },
    {
      path: '/myRequest/AddMyRequest',
      name: 'Ajout Demande',
      component: AddMyRequest,
    },
  ],
})

export default router
