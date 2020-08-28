//se encarga de enviar a través de express al cliente la carpeta public
const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

const phones = [
  {
    "id": 0,
    "name": "iPhone 7",
    "manufacturer": "Apple",
    "description": "iPhone 7 dramatically improves the most important aspects of the iPhone experience. It introduces advanced new camera systems. The best performance and battery life ever in an iPhone. Immersive stereo speakers. The brightest, most colorful iPhone display. Splash and water resistance*. And it looks every bit as powerful as it is. This is iPhone 7.",
    "color": "black",
    "price": 769,
    "imageFileName": "IPhone_7.png",
    "screen": "4,7 inch IPS",
    "processor": "A10 Fusion",
    "ram": 2
},
{
    "id": 1,
    "name": "Galaxy S7",
    "manufacturer": "Samsung",
    "description": "Introducing the smartphone your life can not do without, The Samsung Galaxy S7. Packed with features to keep you both productive and entertained, all in a sleek, slim design that fits comfortably in your hand or pocket.",
    "color": "grey",
    "price": 209,
    "imageFileName": "Galaxy_S7.png",
    "screen": "5,1 inch Quad-HD",
    "processor": "Snapdragon 820",
    "ram": 4
}
]
app.get('/api/phones', (req, res) => {
  res.json({
    phones: phones
  });
});

app.listen(3000, function() {
  console.log('Server running on port 3000');
});