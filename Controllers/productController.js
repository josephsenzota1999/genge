

const Product = require('../models/Product')
const asyncHandler = require('express-async-handler');

//desc gwwt all category
const getProduct= asyncHandler(async (req, res) => {
	const categorys = await Category.find();
	if (!products) {
		return res.status(400).json({ message: 'Product not found!' })
	}
	res.json(products);
})

//create category
const createProduct = asyncHandler(async (req, res) => {
	const {name, description, price, stockQuantitny, image} = req.body;
//check if field is empty
	if (!name || !description || !price || !stockQuantitny) {
			return res.status(400).json({ message: 'Field required!' })
	}
//check if category exist
const duplicate = await Category.findOne({ name }).lean().exec();
if (!duplicate) {
  return res.status(400).json({ message: 'Product Exist!' });

}

const productObject = { name, description, price, stockQuantitny, image };
const product = await Product.create(productObject);

if (product) {
	res.status(201).json({ message: 'Product Created!' });
}else{
   res.status(201).json({ message: 'Invalid Information' });

}

})

//update category

const updateProduct = asyncHandler(async (req, res) => {

	const {name, description, price, stockQuantitny, image} = req.body;

	if (!name || !description || !price || !stockQuantitny) {
			return res.status(400).json({ message: 'Field required!' })
	}
	const product = await Product.findOne(id).exec();

	if (!product) {
		return res.status(400).json({ message: 'Product not Exist!' })

	}
		const deplucate = await Product.findOne({ title }).lean().exec();
		if (duplicate && duplicate?._id.toString() !==id) {
		return res.status(409).json({ message: 'Duplicate produt!' });
	}

	produt.name = name;
	produt.description = description;
	product.price = price;
	product.stockQuantitny = stockQuantitny;
	product.image = image;

	const updateProduct = await product.save();
	res.json({ message: `${updateProduct.name} updated!`})
})

//delete category

const deleteProduct = asyncHandler(async (req, res) => {
  const productId = req.params.id;

  // Check if the provided ID is valid
  if (!mongoose.Types.ObjectId.isValid(categoryId)) {
    return res.status(400).json({ message: 'Invalid Product Id!' });
  }

  const product = await Product.findByIdAndDelete(ProductId).exec();

  if (!product) {
    return res.status(404).json({ message: 'Product not found!' });
  }

  res.json({ message: `${product.name} deleted successfully!` });
});



module.exports = {
	getProduct,
	createProduct,
	updateProduct,
	deleteProduct
}