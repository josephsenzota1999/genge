
const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
	
	quantity: String,
	subtotal: String,

	order: { type: mongoose.Schema.Types.ObjectId, ref: 'Order'}
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product'}

}
)

export default orderSchema;