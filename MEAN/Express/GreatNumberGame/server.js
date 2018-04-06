// require express
var express = require("express");
// path module -- try to figure out where and why we use this
var path = require("path");
var session = require("express-session")
// create the express app
var app = express();
var bodyParser = require('body-parser');
// use it!
app.use(bodyParser.urlencoded({ extended: true }));
// static content
app.use(express.static(path.join(__dirname, "./static")));
app.use(session({secret: 'myname'}));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
// root route to render the index.ejs view
app.get('/', function (req, res) {
    if (req.session.rand) {
        req.session.rand = req.session.rand;
    } else {
        req.session.rand = Math.floor(Math.random() * 101);
    }
    console.log("The answer is: ", req.session.rand);
    res.render("index", { attempt: req.session.attempt});
})
app.post('/result', function(req,res) {
    var guess = req.body.guess
    if (guess < req.session.rand) {
        req.session.attempt = "Too low!";
    } 
    else if (guess > req.session.rand){
        req.session.attempt = "Too high!";
    } else {
        req.session.attempt = "Correct!"
    }
    res.redirect("/");
})
app.get('/reset', function(req,res) {
    req.session.rand = Math.floor(Math.random() * 101);
    res.redirect('/');
})
// tell the express app to listen on port 8000
app.listen(8000, function () {
    console.log("listening on port 8000");
});