

const Customer = require('../models/Customer');
const asyncHandler = require('express-async-handler');

const loginCustomer = asyncHandler(async(req, res) => {
	const { email,password } = req.body;

	if (!email || !password) {
			return res.status(400).json({ message: 'Field required!' })
	}

	//getting data on database
	const customer = await Customer.findOne({ email });

	if (customer && await bcrypt.compare(password, customer.password)) {
		const token = jwt.sign({ email }, 'secretkey');
		res.redirect('/dashboard');
	}else{
		res.status(401).json({message: 'Invalida Credentials;'})
	}


})

export default loginCustomer;