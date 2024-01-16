
const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
	title: {
		type:String,
		required:true
	},
	description: String,
	required: true;
})

export default categorySchema;