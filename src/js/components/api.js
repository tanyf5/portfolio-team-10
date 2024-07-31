import axios from 'axios';
import { showModalResponse } from './modal';
let responseObject = {};

axios.defaults.baseURL = 'https://portfolio-js.b.goit.study/api';
async function sendPost(object) {
  axios
    .post('/requests', object)
    .then(function (response) {
      showModalResponse(response.data);
    })
    .catch(function (error) {
      new Error(error);
    });
}

export { sendPost, responseObject };
