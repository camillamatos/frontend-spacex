import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api-spacex.herokuapp.com',
});

export default api
