const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');
const expressValidator = require('express-validator');
const multer = require('multer');

mongoose.Promise = global.Promise;
//connect to mongodb
mongoose.connect(config.database);

//Check mongodb connection
mongoose.connection.on('connected', () => {
    console.log('Connected to the database ' + config.database);
});
mongoose.connection.on('error', (err) => {
    console.log('Database error => ' + err);
});

const app = express();

const users = require('./routes/users');
const categories = require('./routes/categories');
const posts = require('./routes/posts');

// port no.
const port = 80;




// cors middleware
app.use(cors());


//express validator middleware

app.use(expressValidator({
    errorFormatter: function(param, msg, value) {
        var namespace = param.split('.')
            , root    = namespace.shift()
            , formParam = root;

        while(namespace.length) {
            formParam += '[' + namespace.shift() + ']';
        }
        return {
            param : formParam,
            msg   : msg,
            value : value
        };
    }
}));


// Set the static folder
app.use(express.static(path.join(__dirname, 'public')));
app.use('/uploads',express.static(path.join(__dirname, 'uploads')));

// body parser middleware
app.use(bodyParser.json());



app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);


app.use('/users',users);
app.use('/categories',categories);
app.use('/posts',posts);




app.get('*' , (req,res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(port, () => {
    console.log('Server online @ ' + port);
});