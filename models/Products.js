
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
	name : String,
	description: String,
	price: String,
	stockQuantitny: String,
	image: String
	category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category'}
})

export default productSchema;