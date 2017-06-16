/**
 * Created by xarenwo on 6/10/2017.
 */
/**
 * Created by xarenwo on 6/9/2017.
 */
const mongoose = require('mongoose');
const config = require('../config/database');
const ObjectId = require('mongodb').ObjectID;

//User schema
const PostSchema = mongoose.Schema({
    title: {
        type: String,
        required:true
    },
    category: {
        type:String,
        required:true
    },
    body: {
        type:String,
        required:true
    },
    author: {
        type:String,
        required:true
    },
    image: {
      type:String,
        required:true
    },
    date: {
        type: String,
        required:true
    }
},{strict:false});

const CommentSchema = mongoose.Schema({
   name: {
       type:String,
       required:true
   },
    email: {
       type:String,
        required:true
    },
    body: {
       type:String,
        required:true
    },
    postId: {
       type:String,
        required:true
    },
    commentAuthor: {
       type:String,
        required:true
    },
    commentDate: {
       type:String,
        required:true
    }


});



PostSchema.pre('save', function (next) {
    var self = this;
    Post.find({title: self.title}, function (err, docs) {
            if (!docs.length) {
                next();
            } else {
                var err = new Error('Post with this exact title already exists, sorry !')
                next(err);
            }
    });
});

const Comment = module.exports = mongoose.model('Comment', CommentSchema);
const Post = module.exports = mongoose.model('Post', PostSchema);


module.exports.getCommentById = (id,callback) => {
    Comment.findById(id,callback);
};

module.exports.getCommentsByPostId = (id,callback) => {
    Post.findById(id,callback);
};

module.exports.getPostById = (id,callback) => {
    Post.findById(id,callback);
};

module.exports.getPosts = (callback) => {
    Post.find({},callback);

};

module.exports.getComments = (callback) => {
    Comment.find({},callback);

};

module.exports.getPostsByTitle = (title,callback) => {
    var query = {'title': {'$regex': title, '$options' : 'i'}};
    Post.find(query,callback);
};

module.exports.getCommentsByEmail = (email,callback) => {
    var query = {'email': {'$regex': email, '$options' : 'i'}};
    Comment.find(query,callback);
};

module.exports.getPostsByCategory = (cat,callback) => {
    var query = {'category': cat};
    Post.find(query,callback);
};

module.exports.getPostsByAuthor = (author,callback) => {

    var query = {'author': author};
    Post.find(query,callback);

};


module.exports.deletePostById = (postId,callback) => {
    var query = {_id: postId};


    Post.findOneAndRemove(query,callback);

};
module.exports.deleteCommentById = (postId,commentId,callback) => {
    console.log(commentId);

    var query = {'_id': commentId};
    /*Post.findByIdAndUpdate(query, {
       '$pull': {
           comments:{'_id': commentId}
       }
    });
    */
    Post.findByIdAndUpdate({"_id":new ObjectId(postId)}, {$pull:{comments:{"_id" :new ObjectId(commentId)}}},callback);



};





module.exports.addPost = (newPost, callback) => {

                newPost.save(callback);



};

module.exports.addComment = (res,postId,newComment, callback) => {


    Post.findByIdAndUpdate(
        postId,
        {$push: {"comments": newComment}},
        {safe: true, upsert: true, new : true},
        function(err, comment) {
            if(err) return res.json({sucess:false,err:err.message});


          callback(comment);

        }
    );



};

module.exports.updatePost = (res,postId,newPost, callback) => {
    setPostTitle:String;
    setPostCategory:String;
    setPostBody:String;

    var OldPost = Post.findById(postId,(err,res) => {

         if(OldPost.title == newPost.title) {
        this.setPostTitle = OldPost.title;
        } else {
            this.setPostTitle = newPost.title;
        }
        if(OldPost.category == newPost.category) {
            this.setPostCategory = OldPost.category;
        } else {
            this.setPostCategory = newPost.category;
        }
        if(OldPost.body == newPost.body) {
            this.setPostBody = OldPost.body;
        } else {
            this.setPostBody = newPost.body;
        }


        Post.findByIdAndUpdate(
            postId,
            {$set: {
                title:this.setPostTitle,
                category:this.setPostCategory,
                body:this.setPostBody
            },
            }, {new: true},
            function(err, response) {
                if(err) return res.json({sucess:false,err:err.message});

               callback(response);
            });





    console.log(res);

    });



}



