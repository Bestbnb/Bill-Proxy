const express = require('express');
const path = require('path');
const morgan = require('morgan');

const app = express();

app.set('PORT', 3000);

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../public')));

app.listen(app.get('PORT'), function() {
  console.log(`Proxy Server running HARD on port ${app.get('PORT')}`);
});