const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Controllers
const userController = require('./controllers/userController');
const itemController = require('./controllers/itemController');
const cartController = require('./controllers/cartController');
const orderController = require('./controllers/orderController');

// Initialize the app
const app = express();
const PORT = 5500;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // or specify your frontend origin instead of '*'
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  next();
});

// Middleware for parsing JSON bodies
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/strider', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB...');
}).catch(err => {
  console.error('Could not connect to MongoDB...', err);
});

// User Routes
app.post('/signup', userController.signup);
app.post('/login', userController.login);
app.post('/reset-password', userController.resetPassword);

//Item routes 
app.get('/items', itemController.showItems);
app.get('/item/:id', itemController.showItem);
app.get('/items/:category', itemController.getItemsByCategory);

// Cart routes
app.post('/cart', cartController.addToCart);
app.get('/cart/:userId', cartController.showCart);
app.put('/cart/update', cartController.updateCartItem); // update cart
app.delete('/cart/remove', cartController.removeCartItem); //remove items from cart

// Order routes
app.post('/order', orderController.addOrder);
app.get('/order-history/:userId', orderController.getUserOrders);


// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
