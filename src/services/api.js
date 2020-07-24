import axios from 'axios';

const api = axios.create({
  // IF USING LOCALHOST USE THIS LINE
  // baseURL: 'http://localhost:3333'
  // IF PRODUCTION, USE THIS LINE
  baseURL: 'https://cotabox-fullstack-challenge.herokuapp.com',
});

export default api;