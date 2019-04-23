import Axios from 'axios';

export const axios = Axios.create({
  baseURL: 'http://5cbe1ec6ecded20014c20e48.mockapi.io/',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
});
