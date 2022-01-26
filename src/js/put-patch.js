'use strict';

/*
 * Method(PUT/PATCH). Headers ("Content-Type": "application/json"). Body.
 */

const BASE_URL = 'http://localhost:3000';

const updateUserData = (id, userData) => {
  return fetch(`${BASE_URL}/users/${id}`, {
    method: 'PUT',
    body: JSON.stringify(userData),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }

    return response.json();
  });
};

const userDataForUpdate = {
  name: 'Minerva Alvarez',
};

updateUserData(11, userDataForUpdate)
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log(err);
  });
