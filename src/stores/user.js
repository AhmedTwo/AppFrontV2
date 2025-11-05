import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    // initialisation par defaut il nest pas connecté
    isAuthenticated: false,
    user: null,
  }),
  actions: {
    login(userData) {
      // login quand t connecté et donc on te fait parevenir la data de user
      this.isAuthenticated = true
      this.user = userData
    },
    logout() {
      // et la on lui vide les variables sa revient donc par defaut
      this.isAuthenticated = false
      this.user = null
    },
  },
})
