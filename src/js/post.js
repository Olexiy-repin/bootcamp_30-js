'use strict';
/*
 * Method (POST). Headers ("Content-Type": "application/json"). Body.
 */

const BASE_URL = 'http://localhost:3000';

const addNewUser = newUser => {
  return fetch(`${BASE_URL}/users`, {
    method: 'POST',
    body: JSON.stringify(newUser),
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

addNewUser({
  name: 'Gregory Clayton',
  username: 'sdfsdf',
  email: 'on@me.nr',
  address: {
    street: 'Dayna Park',
    suite: 'Suite 449',
    city: 'Bartholomebury',
    zipcode: '76495-3109',
    geo: {
      lat: '24.6463',
      lng: '-168.8889',
    },
  },
  phone: '(775)976-6794 x41206',
  website: 'conrad.com',
  company: {
    name: 'Yost and Sons',
    catchPhrase: 'Switchable contextually-based project',
    bs: 'aggregate real-time technologies',
  },
})
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log(err);
  });

/*
{
  name: 'Gregory Clayton',
  username: 'sdfsdf',
  email: 'on@me.nr',
  address: {
    street: 'Dayna Park',
    suite: 'Suite 449',
    city: 'Bartholomebury',
    zipcode: '76495-3109',
    geo: {
      lat: '24.6463',
      lng: '-168.8889',
    },
  },
  phone: '(775)976-6794 x41206',
  website: 'conrad.com',
  company: {
    name: 'Yost and Sons',
    catchPhrase: 'Switchable contextually-based project',
    bs: 'aggregate real-time technologies',
  },
}
*/
