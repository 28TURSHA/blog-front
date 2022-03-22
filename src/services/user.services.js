import axios from 'axios';
import authHeader from './auth-header';
const API_URL = 'https://backend-blogs1.herokuapp.com/blogs';
export default {
  getPublicContent() {
    return axios.get(API_URL + 'blogs', { headers: authHeader() });
  },
  
}