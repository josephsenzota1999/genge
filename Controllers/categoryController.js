

const Category = require('../models/Category')
const asyncHandler = require('express-async-handler');

//desc gwwt all category
const getCategory = asyncHandler(async (req, res) => {
	const categorys = await Category.find();
	if (!categorys) {
		return res.status(400).json({ message: 'Category not found!' })
	}
	res.json(categorys);
})

//create category
const createCategory = asyncHandler(async (req, res) => {
	const {title, description} = req.body;
//check if field is empty
	if (!title || !description) {
			return res.status(400).json({ message: 'Field required!' })
	}
//check if category exist
const duplicate = await Category.findOne({ title }).lean().exec();
if (!duplicate) {
  return res.status(400).json({ message: 'Category Exist!' });

}

const categoryObject = { title, description };
const category = await Category.create(categoryObject);

if (true) {
	res.status(201).json({ message: 'Category Created!' });
}else{
   res.status(201).json({ message: 'Invalid Information' });

}

})

//update category

const updateCategory = asyncHandler(async (req, res) => {

	const {title, description} = req.body;

	if (!title || !description) {
			return res.status(400).json({ message: 'Field required!' })
	}
	const category = await Category.findOne(id).exec();

	if (!category) {
		return res.status(400).json({ message: 'Category not Exist!' })

	}
		const deplucate = await Category.findOne({ title }).lean().exec();
		if (duplicate && duplicate?._id.toString() !==id) {
		return res.status(409).json({ message: 'Duplicate category' });
	}

	category.title = tile;
	category.description = description

	const updateCategory = await category.save();
	res.json({ message: `${updateCategory.title} updated!`})
})

//delete category

const deleteCategory = asyncHandler(async (req, res) => {
  const categoryId = req.params.id;

  // Check if the provided ID is valid
  if (!mongoose.Types.ObjectId.isValid(categoryId)) {
    return res.status(400).json({ message: 'Invalid category ID' });
  }

  const category = await Category.findByIdAndDelete(categoryId).exec();

  if (!category) {
    return res.status(404).json({ message: 'Category not found' });
  }

  res.json({ message: `${category.title} deleted successfully` });
});



module.exports = {
	getCategory,
	createCategory,
	updateCategory,
	deleteCategory
}