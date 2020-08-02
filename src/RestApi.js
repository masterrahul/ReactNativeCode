import {create} from 'apisauce';
import {Config} from '@common';
const ReactNativeCode = Config.ReactNativeCode;
var baseURL= ReactNativeCode.server_url


// define the api
const api = create({
  baseURL: baseURL,
  headers: {
    Accept: 'multipart/form-data',
  },
});

export let login_post = ( body) =>
  api.post('/LoginUser/UserLogin', body)
  .then(response => response);
