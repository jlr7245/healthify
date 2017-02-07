const axios = require('axios');
require('dotenv').config();


const nutriAXIOS = axios.create({
  baseURL: 'https://trackapi.nutritionix.com/v2/natural/nutrients',
  headers: {
    'x-app-id': process.env.ID,
    'x-app-key': process.env.API_KEY,
    'Content-Type': 'application/JSON',
    'x-remote-user-id': 0
  }
});

module.exports = {
  nutriAXIOS
};