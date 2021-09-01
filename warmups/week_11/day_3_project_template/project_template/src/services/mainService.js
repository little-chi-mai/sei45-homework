import axios from 'axios';

const baseURL = `${process.env.VUE_ROOT_API}`;

export default axios.create({
  baseURL,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  withCredentials: false,
});