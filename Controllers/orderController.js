const Order = require('../models/Order');
const Customer = require('../models/Customer');
const asyncHandler = require('express-async-handler');
const token = req.headers.authorization.split(' ')[1];

//create Order
const createOrder = asyncHandler(async(req, res) => {
	const { product, quantity, subtotal } = req.boy;

	if (!quantity || !subtotal) {
		return res.status(400).json({ message:'Field required!' });
	}
	const decoded = jwt.verify(token, 'secretekey');
	const customer =await Customer.findOne({ customer: decoded.email })
	const orderObject= {customer: user._id, product, quantity, subtotal};
	const order = await Order.create(orderObject);

	if (order) {
		return res.status(400).json({ message: 'Order placed successfully' });
	}

})

export default createOrder;

