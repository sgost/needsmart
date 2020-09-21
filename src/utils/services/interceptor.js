import axios from 'axios';
const baseOptions = {
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
    Authorization: localStorage.getItem('api_token'),
  },
};

class Interceptor {
  get(url, options) {
    return axios.get(url, { ...baseOptions, ...options });
  }

  post(url, data, options) {
    return axios.post(url, data, { ...baseOptions, ...options });
  }

  patch(url, data, options) {
    return axios.patch(url, data, { ...baseOptions, ...options });
  }

  put(url, data, options) {
    return axios.put(url, data, { ...baseOptions, ...options });
  }

  delete(url, options) {
    return axios.delete(url, { ...baseOptions, ...options });
  }
}

export default Interceptor;
