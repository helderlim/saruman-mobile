import axios from "axios";

const api = axios.create({
  baseURL: `https://api.unsplash.com/photos/?client_id=EnxW4t-KHx4sO5n8JwvVvPmQ_WJKE5DN8X6lj0oW2Mo`,
});

export default api;