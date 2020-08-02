import {
  login_post,
  
} from '../RestApi';


const ReactNativeCodeApi = {
  login_api: async (email, pass) => {
    let body = new FormData();
    body.append('username', email);
    body.append('password', pass);

    return await login_post(body);
  },

  

};

export default ReactNativeCodeApi;
