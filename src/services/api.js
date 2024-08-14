import axios from 'axios';

// Base da URL: https://rickandmortyapi.com/api

const api = axios.create({
  baseURL: 'https://rickandmortyapi.com/api'
});

export default api;