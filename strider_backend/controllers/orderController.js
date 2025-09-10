const Order = require('../models/Order');
const Cart = require('../models/Cart');
const Item = require('../models/Item');

exports.addOrder = async (req, res) => {
  const { userId } = req.body;

  try {
    // Retrieve cart items that are not ordered yet
    const cartItems = await Cart.find({ userId, ordered: false }).populate('itemId');

    if (cartItems.length === 0) {
      return res.status(400).json({ message: 'No items in cart to order' });
    }

    // Calculate total price and prepare order items
    const items = cartItems.map(cartItem => ({
      itemId: cartItem.itemId._id,
      qty: cartItem.qty,
      price: cartItem.itemId.price
    }));

    const totalPrice = items.reduce((total, item) => total + item.qty * item.price, 0);

    // Create and save the order
    const order = new Order({
      userId,
      items,
      totalPrice,
      status: 'Pending'
    });
    const orderResult = await order.save();

    // Mark the cart items as ordered
    await Cart.updateMany({ userId, ordered: false }, { ordered: true });

    // Respond with the order ID and success message
    res.status(201).json({ orderId: orderResult._id, message: 'Order placed successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error placing order', error: error.message });
  }
};

exports.getUserOrders = async (req, res) => {
  try {
    const userId = req.params.userId;

    // Fetch orders for the user
    const orders = await Order.find({ userId }).sort({ orderDate: -1 });

    // Map orders to the format required by the frontend
    const orderHistory = orders.map(order => ({
      orderId: order._id,
      orderDate: order.orderDate,
      totalItems: order.items.reduce((total, item) => total + item.qty, 0),
      totalPrice: order.totalPrice || 0 // Ensure totalPrice is present
    }));

    res.status(200).json(orderHistory);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching orders', error: error.message });
  }
};

