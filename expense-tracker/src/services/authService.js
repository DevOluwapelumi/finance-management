// src/services/authService.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/users';

export const register = async (firstName, lastName, email, password) => {
  return axios.post(`${API_URL}/register`, { firstName, lastName, email, password });
};

export const login = async (email, password) => {
  return axios.post(`${API_URL}/login`, { email, password });
};
