// https://www.weatherbit.io/api
'use strict';
import weatherCardTemplate from '../templates/weather-card.hbs';
import { fetchWeatherByCityName } from './weather-api';

const weatherFormEl = document.querySelector('.js-search-form');
const weatherCardsWrapperEl = document.querySelector('.weather__wrapper');

const convertUnixTimeToHumanTime = unixTime => {
  const date = new Date(unixTime * 1000);

  const hours = String(date.getHours()).padStart(2, 0);
  const minutes = String(date.getMinutes()).padStart(2, 0);

  return hours + ':' + minutes;
};

const onFormSubmit = event => {
  event.preventDefault();

  const city = event.currentTarget.elements['user_country'].value;

  fetchWeatherByCityName(city)
    .then(data => {
      data.sys.sunrise = convertUnixTimeToHumanTime(data.sys.sunrise);
      data.sys.sunset = convertUnixTimeToHumanTime(data.sys.sunset);

      weatherCardsWrapperEl.innerHTML = weatherCardTemplate(data);
    })
    .catch(err => {
      console.log(err);
    });
};

weatherFormEl.addEventListener('submit', onFormSubmit);
