/**
 * Created by xarenwo on 6/9/2017.
 */
const express = require('express');
const router = express.Router();
const Category = require('../models/category');
const Posts = require('../models/post');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');

router.get('/', (req,res,next) => {
    res.json({'error':'Invalid endpoint'});
});


//New category
router.post('/add', passport.authenticate('jwt', {session:false}),(req,res,next) => {
    // user object
    let newCategory = new Category({
        name: req.body.name,
        createdBy: req.user.username,
    });

    Category.addCategory(newCategory, (err, category) => {
        if(err) {
            res.json({'success': false, 'msg': 'Failed to create: ' +err.message});
        } else {
            res.json({'success': true, 'msg': 'Category Created!', data:category});
        }
    });


});




router.get('/get', passport.authenticate('jwt', {session:false}), (req,res,next) => {
    Category.getCategories((err,categories) => {
       if(err) {
           res.json({'success': false, 'msg': 'Failed to retrieve : ' +err.message});
       } else {
           res.json({'success': true,  data:categories});
       }
    });
});

router.get('/get/name/:name',passport.authenticate('jwt', {session:false}), (req,res,next) => {
    var name = req.params.name;
    Category.getCategoryByName(name,(err,category) => {
        if(err) {
            res.json({'success': false, 'msg': 'Failed to retrieve : ' +err.message});
        } else {
            res.json({'success': true,  data:category});
        }
    });
});

router.get('/get/id/:id',passport.authenticate('jwt', {session:false}), (req,res,next) => {
    var id = req.params.id;
    Category.getCategoryById(id,(err,category) => {
        if(err) {
            res.json({'success': false, 'msg': 'Failed to retrieve : ' +err.message});
        } else {
            res.json({'success': true,  data:category});
        }
    });
});


router.get('/show/cat/:cat',passport.authenticate('jwt', {session:false}), (req,res,next) => {
    var cat = req.params.cat;
    Category.getCategoryById(id,(err,category) => {
        if(err) {
            res.json({'success': false, 'msg': 'Failed to retrieve : ' +err.message});
        } else {
            res.json({'success': true,  data:category});
        }
    });
});



router.delete('/delete', passport.authenticate('jwt', {session:false}), (req,res,next) => {
    var categoryName = req.body.name;
    Category.deleteCategoryByName(categoryName,(err,data) => {

        if(err) {
            res.json({'success': false, 'msg': 'Failed to delete : ' +err.message});
        } else if(data) {
            res.json({'success': true,  'msg':'Category '+ req.body.name + ' deleted !',data:data});
        } else {
            res.json({'success': false,  'msg':'Category does not exist or is already deleted !'});
        }
    });
});

module.exports = router;