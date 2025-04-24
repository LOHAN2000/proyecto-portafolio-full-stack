import axios from 'axios';

// Configuración global de Axios
const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true, // Para enviar cookies (JWT)
});

// Interceptores para manejar errores globalmente
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const message = error.response?.data?.message || 'Error de conexión';
    return Promise.reject(message);
  }
);

export default apiClient;