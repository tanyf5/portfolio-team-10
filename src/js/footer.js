import './components/form-validation';
import './components/form-storage';
import './components/api';
import './components/modal';
import 'izitoast/dist/css/iziToast.min.css';

import { formData } from './components/form-storage';
import { showModalResponse } from './components/modal';
import { sendPost } from './components/api';

// ! need fix
// const refs = {
//   form: document.querySelector('form'),
// };

// refs.form.addEventListener('submit', responseHandler);

// function responseHandler(event) {
//   event.preventDefault();
//   let promise = new Promise(function (resolve, reject) {
//     if (formData) {
//       // simulate sending data to the server
//       sendPost(formData)
//         .then(response => {
//           // assuming sendPost returns a promise
//           resolve(response);
//         })
//         .catch(error => {
//           reject(error);
//         });
//     } else {
//       reject(new Error('Form data is empty'));
//     }
//   });

//   promise
//     .then(response => {
//       // show response in a modal
//       showModalResponse(response);
//     })
//     .catch(error => {
//       // show error alert
//       alert(`Error: ${error.message}`);
//     });
// }
