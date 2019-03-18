import axios from 'axios';

export const getter = () =>
  axios
    .get('/users')
    .then(function(response) {
      console.log(response);
      return response;
    })
    .catch(function(error) {
      console.log(error);
    });

export const gettClient = bob =>
  axios
    .get(`/user/${bob}`)
    .then(function(response) {
      console.log(response);
      return response;
    })
    .catch(function(error) {
      console.log(error);
    });
