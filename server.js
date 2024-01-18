

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const categoryController = require('./controllers/categoryController')
const categoryRoutes =require('./routes/categoryRoutes')

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());

app.use(bodyParser.json());

app.use('/', categoryRoutes);

app.listen(PORT, () => {
	console.log('Server is running');
})
