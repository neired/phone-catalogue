//se encarga de enviar a través de express al cliente la carpeta public
const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

app.listen(3000, function() {
    console.log('Server running on port 3000');
});