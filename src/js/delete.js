'use strict';
/*
 * Method(DELETE)
 */

const BASE_URL = 'http://localhost:3000';

const deleteUser = id => {
  return fetch(`${BASE_URL}/users/${id}`, {
    method: 'DELETE',
  }).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }

    return response.json();
  });
};

deleteUser()
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log(err);
  });
