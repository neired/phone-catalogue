//se encarga de enviar a través de express al cliente la carpeta public
const express = require('express');
const app = express();
const phones = require('./phones.json');

app.use(express.static(__dirname + '/public'));

app.get('/api/phones', (req, res) => {
  res.status(200).json({
    phones: phones
  });
});

app.listen(3000, function() {
  console.log('Server running on port 3000');
});