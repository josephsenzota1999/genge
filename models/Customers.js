

const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
	fname : String,
	lname: String,
	email: String,
	password: String,
	
})

export default customerSchema;