import axios from 'axios';

// Configuración global de Axios
const apiClient = axios.create({
  baseURL: 'https://proyecto-portafolio-full-stack.onrender.com',
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