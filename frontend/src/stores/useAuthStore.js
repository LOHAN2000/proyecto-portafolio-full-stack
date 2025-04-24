import { create } from 'zustand';
import apiClient from '../api/client';

const useAuthStore = create((set) => ({
  user: null,
  error: null,
  loading: false,

  // Registro de usuario
  register: async (userData) => {
    try {
      set({ loading: true, error: null });
      const { data } = await apiClient.post('/api/auth/signup', userData);
      set({ user: data });
    } catch (error) {
      set({ error });
      throw error;
    } finally {
      set({ loading: false})
    }
  },

  // Login
  login: async (credentials) => {
    try {
      set({ loading: true, error: null });
      const { data } = await apiClient.post('/api/auth/login', credentials);
      set({ user: data, loading: false });
    } catch (error) {
      set({ error });
      throw error;
    } finally {
      set({ loading: false })
    }
  },

  // Logout
  logout: async () => {
    try {
      await apiClient.post('/api/auth/logout');
      set({ user: null });
    } catch (error) {
      set({ error });
    }
  },

  // Verificar 
}));

export default useAuthStore;