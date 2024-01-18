
const Customer = require('../models/Customer');
const asyncHandler = require('express-async-handler');

const registerCustomer = asyncHandler(async(req, res) => {
	const { fname, lname, email,password } = req.body;

	if (!fname || !lname || !email !password) {
		return res.status(400).json({message: 'Field required'});
	}

	const duplicate = await Customer.findOne({ email }).lean().exec();
	if (duplicate) {
		return res.status(400).json({message: 'Customer already Exist'});		
	}
	const hashedPassword = await bcrypt.hash(password, 10);


	const customerObject = { fname, lname, email, hashedPassword };
	const customer = await Customer.create(customerObject);

	if (customer) {
		return res.status(400).json({message: 'Registered succesfully'})
	}else{
		return res.status(500).json({message: 'Registration Failed!'})
	}

})

export default registerCustomer;