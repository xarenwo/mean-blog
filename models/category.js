/**
 * Created by xarenwo on 6/9/2017.
 */
const mongoose = require('mongoose');
const config = require('../config/database');


//User schema
const CategorySchema = mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    createdBy: {
        type:String,
        required:true
    }
});

CategorySchema.pre('save', function (next) {
    var self = this;
    Category.find({name: self.name}, function (err, docs) {

            if (!docs.length) {
                next();
            } else {
                var err = new Error('Category exists !')
                next(err);
            }
    });
});


const Category = module.exports = mongoose.model('Category', CategorySchema);

module.exports.getCategories = (callback) => {
  Category.find({},callback);

};

module.exports.getCategoryById = (id,callback) => {
    Category.findById(id,callback);
};

module.exports.getCategoryByName = (name,callback) => {
    var query = {'name':name};
    Category.findOne(query,callback);

};


module.exports.deleteCategoryByName = (categoryName,callback) => {
    var query = {name: categoryName};


    Category.findOneAndRemove(query,callback);

};


module.exports.addCategory = (newCategory, callback) => {

                newCategory.save(callback);


};


