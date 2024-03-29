import axios from 'axios';
import Config from 'react-native-config';
import {translate} from 'translate';

const API_ROOT = Config.BASE_URL;

axios.defaults.baseURL = API_ROOT;
axios.defaults.timeout = 15000;

axios.interceptors.request.use(
  config => config,
  error => Promise.reject(error),
);

axios.interceptors.response.use(
  response => response,
  error => handleError(error),
);

const handleError = error => {
  if (error.message === 'Network Error') {
    const netWorkError = {
      data: {
        message: translate('netWorkErr'),
      },
    };
    return Promise.reject(netWorkError);
  }
  if (error.response) {
    const {status} = error.response;
    if (status === 401) {
      // dispatch logout
      // store.dispatch(logout());
    }
  }
  return Promise.reject(error.response || error.request || error.message);
};

const http = {
  setAuthorizationHeader(accessToken) {
    axios.defaults.headers.Authorization = `bearer ${accessToken}`;
  },
  request(config = {}) {
    return axios.request(config);
  },
  get(url, config = {}) {
    return axios.get(url, config);
  },
  post(url, data = {}, config = {}) {
    return axios.post(url, data, config);
  },
  put(url, data = {}, config = {}) {
    return axios.put(url, data, config);
  },
  patch(url, data = {}, config = {}) {
    return axios.patch(url, data, config);
  },
  delete(url, config = {}) {
    return axios.delete(url, config);
  },
};

export default http;
