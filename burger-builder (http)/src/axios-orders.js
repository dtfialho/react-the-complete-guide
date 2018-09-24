import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-my-burger-a7f65.firebaseio.com/'
});

export default instance;
