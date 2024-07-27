import axios from 'axios';
<<<<<<< Updated upstream
import iziToast from 'izitoast';
=======
// import { formData } from './form-storage';
>>>>>>> Stashed changes
let responseObject = {};

axios.defaults.baseURL = 'https://portfolio-js.b.goit.study/api';
function sendPost(object) {
<<<<<<< Updated upstream
=======
  // try {
  //   const response = async () => {
  //     await axios.post('/requests', object);
  //     console.log(response.body);
  //     return response;
  //   };
  // } catch (error) {
  //   console.error(error);
  // }
>>>>>>> Stashed changes
  axios
    .post('/requests', object)
    .then(function (response) {
      responseObject = response.data;
    })
    .catch(function (error) {
<<<<<<< Updated upstream
      iziToast.error({ title: 'Error', message: error });
=======
      console.log(error);
>>>>>>> Stashed changes
    });
}

export { sendPost, responseObject };
<<<<<<< Updated upstream
=======

// const baseUrl = "https://portfolio-js.b.goit.study/api/requests";
// const options = {
//   method: "POST",
//   body: JSON.stringify({
//     email: "test@gmail.com",
//     comment: "User's comment",
//   }),
// };
// fetch(baseUrl, options)
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error();
//     }
//     return response.json();
//   })
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));
>>>>>>> Stashed changes
