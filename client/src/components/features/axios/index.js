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

export const getUser = user =>
  axios
    .get(`/user/${user.id}`)
    .then(function(response) {
      console.log(response);
      if (response.data.length === 0) {
        axios
          .post('/user', {
            id: user.id,
            email: user.email,
            first_name: user.first_name,
            last_name: user.last_name
          })
          .then(function(response) {
            console.log(response);
          })
          .catch(function(error) {
            console.log(error);
          });
      } else return response;
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
