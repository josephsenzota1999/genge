
const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
	
	quantity: String,
	subtotal: String,

	customer: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer'}
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product'}

}
)

export default orderSchema;