// Require the Express Module
var express = require('express');
// Create an Express App
var app = express();
// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');
// Integrate body-parser with our App
app.use(bodyParser.urlencoded({ extended: true }));
// Require path
var path = require('path');
// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, './static')));
// Setting our Views Folder Directory
var mongoose = require('mongoose')
// This is how we connect to the mongodb database using mongoose -- "basic_mongoose" is the name of
//   our db in mongodb -- this should match the name of the db you are going to use for your project.
mongoose.connect('mongodb://localhost/basic_mongoose');
var UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    quote: { type: String, required: true },
    date: { type: Date, default: Date.now }
}, { timestamps: true });
mongoose.model('User', UserSchema); // We are setting this Schema in our Models as 'User'
var User = mongoose.model('User') // We are retrieving this Schema from our Models, named 'User'
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

let quotes = [];
// Routes
// Root Request
app.get('/', function (req, res) {
    res.render('index');
})
app.get('/quotes', function (req,res) {
    res.render('quotes', {key: quotes});
})
// Use native promises
mongoose.Promise = global.Promise;
// Add User Request 
// This is the route that we already have in our server.js
// When the user presses the submit button on index.ejs it should send a post request to '/users'.  In
//  this route we should add the user to the database and then redirect to the root route (index view).
app.post('/quotes', function (req, res) {
    console.log("POST DATA", req.body);
    // create a new User with the name and age corresponding to those from req.body
    var user = new User({ name: req.body.name, quote: req.body.quote, date: req.body.date });
    let n = req.body.name;
    let q = req.body.quote;
    let d = req.body.date;
    quotes.push({
        name: n,
        quote: q,
        date: d
    });
    console.log(user)
    // Try to save that new user to the database (this is the method that actually inserts into the db) and run a callback function with an error (if any) from the operation.
    user.save(function (err) {
        // if there is an error console.log that something went wrong!
        if (err) {
            console.log('something went wrong');
            res.render('index', { errors: user.errors })
        } else { // else console.log that we did well and then redirect to the root route
            console.log('successfully added a quote!');
            res.redirect('/quotes');
        }
    })
})

app.listen(8000, function () {
    console.log("listening on port 8000");
})