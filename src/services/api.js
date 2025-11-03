import axios from 'axios'

// 
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL + '/api', // baseURL va devenir notre url avec le /api a la fin
  headers: {
    'Content-Type': 'application/json'
  },
})

// Intercepteur pour ajouter le token à chaque requête
api.interceptors.request.use(
  config => {
    const token = localStorage.getItem('auth_token')

    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config // 
  },
  error => Promise.reject(error) //
)

export default api