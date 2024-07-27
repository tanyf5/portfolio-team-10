import axios from 'axios';
import iziToast from 'izitoast';
let responseObject = {};

axios.defaults.baseURL = 'https://portfolio-js.b.goit.study/api';
function sendPost(object) {
  axios
    .post('/requests', object)
    .then(function (response) {
      responseObject = response.data;
    })
    .catch(function (error) {
      iziToast.error({ title: 'Error', message: error });
    });
}

export { sendPost, responseObject };
