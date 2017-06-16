/**
 * Created by xarenwo on 6/10/2017.
 */
/**
 * Created by xarenwo on 6/9/2017.
 */
const express = require('express');
const router = express.Router();
const Category = require('../models/category');
const Post = require('../models/post');
const User = require('../models/user');
const passport = require('passport');
const Comment = require('../models/post');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const moment = require('moment');
const multer = require('multer');
const path = require('path');
router.get('/', (req,res,next) => {
    res.json({'error':'Invalid endpoint'});
});



//New Post
router.post('/add',passport.authenticate('jwt', {session:false}),(req,res,next) => {





    // post object
      console.log('body -- ' +req.body);
    var storage = multer.diskStorage({
        destination: function(req, file, callback) {
            callback(null, './uploads/images/posts')
        },
        filename: function(req, file, callback) {

            callback(null, req.user._id + '-' +  req.body.author + '-' + Date.now() + path.extname(file.originalname))
        }
    });
    var upload = multer({
        storage: storage
    }).single('image');
    upload(req, res, function(err) {
        console.log(req.file);
        if(err) {
           console.log(err);
            var postIMG = "noimage.png";
        } else {
            var postIMG = req.file.filename;
        }





    var title = req.body.title;
    var category = req.body.category;
    var body = req.body.body;
    var author = req.body.author;
    var date = moment().format('MMMM Do YYYY, h:mm:ss a');

    req.checkBody('title','Title field is required !').notEmpty();
    req.checkBody('category','Category is required !').notEmpty();
    req.checkBody('body','Body is required !').notEmpty();
    req.checkBody('author','Author is required !').notEmpty();

    var errors = req.validationErrors();

    if(errors) {
        res.json({'success':'false','errors':errors});
    } else {
        var newPost = new Post({
            title: title,
            category:category,
            body:body,
            author:author,
            image:postIMG,
            date:date
        });

        Post.addPost(newPost, (err, post) => {
            if(err) {
                res.json({'success': false, 'msg': 'Failed to create: ' +err.message});
            } else {
                res.json({'success': true, 'msg': 'Post Created!', data:post});
            }
        });



    }
    });

});

// new comment

router.post('/addcomment', passport.authenticate('jwt', {session:false}),(req,res,next) => {
    // post object
    var postId = req.body.postId;
    var name = req.body.name;
    var email = req.body.email;
    var body = req.body.body;
    var commentAuthor = req.body.commentAuthor;
    var commentDate = moment().format('MMMM Do YYYY, h:mm:ss a');


    req.checkBody('postId','Post id field is required !').notEmpty();
    req.checkBody('name','Name is required !').notEmpty();
    req.checkBody('email','Email is required !').notEmpty();
    req.checkBody('email','Email is invalid !').isEmail();


    var errors = req.validationErrors();

    if(errors) {
        res.json({'success':'false','errors':errors});
    } else {
        var newComment = new Comment({
            name: name,
            email:email,
            body:body,
            commentAuthor:commentAuthor,
            commentDate:commentDate,
        });

        Post.addComment(res,postId, newComment, (callback) => {
            if(callback) {
                res.json({'success': true, 'msg': 'Comment Created!', data:callback});
            }
            else {
                res.json({'success': false, 'msg': 'Some error ocurred '});
            }

        });



    }


});


router.post('/update', passport.authenticate('jwt', {session:false}),(req,res,next) => {
    // post object
    var postId = req.body.postId;
    var newTitle = req.body.title;
    var newCategory = req.body.category;
    var newBody = req.body.body;
    var newDate = moment().format('MMMM Do YYYY, h:mm:ss a');


    req.checkBody('postId','Post id field is required !').notEmpty();
    req.checkBody('title','Name is required !').notEmpty();
    req.checkBody('category','Email is required !').notEmpty();
    req.checkBody('body','Body is required !').notEmpty();




    var errors = req.validationErrors();

    if(errors) {
        res.json({'success':'false','errors':errors});
    } else {
        var newPost = new Post({
            title: newTitle,
            category:newCategory,
            body:newBody,
            date:newDate,
        });

        Post.updatePost(res,postId, newPost, (callback) => {
            if(callback) {
                res.json({'success': true, 'msg': 'Post updated', data:callback});
            }
            else {
                res.json({'success': false, 'msg': 'Some error ocurred '});
            }

        });



    }


});



router.get('/get', passport.authenticate('jwt', {session:false}), (req,res,next) => {
    Post.getPosts((err,posts) => {
        if(err) {
            res.json({'success': false, 'msg': 'Failed to retrieve : ' +err.message});
        } else {
            res.json({'success': true,  data:posts});
        }
    });

});

router.get('/get/search/:title',passport.authenticate('jwt', {session:false}), (req,res,next) => {
    var title = req.params.title;
    Post.getPostsByTitle(title,(err,posts) => {
        if(err) {
            res.json({'success': false, 'msg': 'Failed to retrieve : ' +err.message});
        } else {
            res.json({'success': true,  data:posts});
        }
    });
});

router.get('/get/id/:id',passport.authenticate('jwt', {session:false}), (req,res,next) => {
    var id = req.params.id;
    Post.getPostById(id,(err,post) => {
        if(err) {
            res.json({'success': false, 'msg': 'Failed to retrieve : ' +err.message});
        } else {
            res.json({'success': true,  data:post});
        }
    });
});
router.get('/get/author/:author',passport.authenticate('jwt', {session:false}), (req,res,next) => {
    var author = req.params.author;
    console.log(author);
    Post.getPostsByAuthor(author,(err,post) => {
        console.log(post);
        if(err) {
            res.json({'success': false, 'msg': 'Failed to retrieve : ' +err.message});
        } else {
            res.json({'success': true,  data:post});
        }
    });
});

router.get('/get/category/:cat',passport.authenticate('jwt', {session:false}), (req,res,next) => {
    var cat = req.params.cat;
    Post.getPostsByCategory(cat,(err,posts) => {
        if(err) {
            res.json({'success': false, 'msg': 'Failed to retrieve : ' +err.message});
        } else {
            res.json({'success': true, data: posts});
        }
    });
});





router.delete('/delete/:id', passport.authenticate('jwt', {session:false}), (req,res,next) => {
    var postId = req.params.id;
    Post.deletePostById(postId,(err,data) => {

        if(err) {
            res.json({'success': false, 'msg': 'Failed to delete : ' +err.message});
        } else if(data) {
            res.json({'success': true,  'msg':'Post deleted !',data:data});
        } else {
            res.json({'success': false,  'msg':'Post does not exist or is already deleted !'});
        }
    });
});

router.delete('/comments/delete/:postId/:commentId', passport.authenticate('jwt', {session:false}), (req,res,next) => {
    var postId = req.params.postId;
    var commentId = req.params.commentId;
    Post.deleteCommentById(postId,commentId,(err,data) => {
        console.log('data got from route : - ' + data);
        if(err) {
            res.json({'success': false, 'msg': 'Failed to delete : ' +err.message});
        } else if(data) {
            res.json({'success': true,  'msg':'Comment deleted !',data:data});
        } else {
            res.json({'success': false,  'msg':'Comment does not exist or is already deleted !'});
        }
    });
});


module.exports = router;