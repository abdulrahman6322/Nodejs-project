const mongoose = require('mongoose');// mongoose module
//1- Create a schema
const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Category required'],//* = required in analysis
      unique: [true, 'Category must be unique'],
      minlength: [3, 'Too short category name'],
      maxlength: [32, 'Too long category name'],
    },
    // if we have a products A and B 
    //we should take them as an url --> shoping.com/a-and-b
    // lab-hp
    slug: {
      type: String,
      lowercase: true,
    },
    image: {
      type: String,
      // required: [true, 'Category image required'],
    },
  }, { timestamps: true });
//2- Create a model
const CategoryModel = mongoose.model('Category', categorySchema);
module.exports = CategoryModel;
