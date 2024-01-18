
const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
	title: {
		type:String,
		required:true
	},
	description: String,
})

module.exports = categorySchema;