// Proxy Server
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const axios = require('axios');

const app = express();

app.set('PORT', 3000);

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../public')));

app.get('/', function(req, res) {
  res.send();
});

app.get('/gallery', function(req, res) {
  axios.get('http://localhost:9999/gallery')
    .then(function (response) {
      // console.log('*********** response.data: ******', response.data);
      res.send(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
});

app.listen(app.get('PORT'), function() {
  console.log(`Proxy Server running HARD on port ${app.get('PORT')}`);
});