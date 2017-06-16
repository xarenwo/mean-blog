/**
 * Created by xarenwo on 6/9/2017.
 */
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');


//User schema
const UserSchema = mongoose.Schema({
   name: {
       type: String
   },
   email: {
       type:String,
       required:true
   },
   username: {
       type:String,
       required:true
   },
   password: {
       type:String,
       required:true
   }
});

UserSchema.pre('save', function (next) {
    var self = this;
    User.find({username: self.username}, function (err, docs) {
        User.find({email: self.email}, function (err, docs) {
            if (!docs.length) {
                next();
            } else {
                var err = new Error('User already registered !')
                next(err);
            }
        });
    });
});


const User = module.exports = mongoose.model('User', UserSchema);


module.exports.getUserById = (id,callback) => {
  User.findById(id,callback);
};

module.exports.getUserByUsername = (username,callback) => {
    const query = {username: username};
    User.findOne(query,callback);
};



module.exports.addUser = (newUser, callback) => {
    bcrypt.genSalt(10, (err, salt) => {
        if (err) throw err;
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) {
                console.log(err.message);
            }else {
                newUser.password = hash;
                newUser.save(callback);
            }
        });
    });

};


module.exports.comparePassword = (candidatePassword,hash,callback) => {
  bcrypt.compare(candidatePassword,hash, (err, isMatch) => {
      if(err) throw err;
      callback(null,isMatch);
  });
};