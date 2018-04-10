
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose')

var app = express();

mongoose.connect('mongodb://localhost/basic_mongoose');
var QuoteSchema = new mongoose.Schema({
    name: { type: String, required: [true, "name is required"]},
    quote: { type: String, required: [true, "must enter a quote"]}
}, { timestamps: true });
mongoose.model('Quote', QuoteSchema); 
var Quote = mongoose.model('Quote')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './static')));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render('index');
})

app.get('/back', function (req, res) {
    res.redirect('/');
})

app.get('/quotes', function (req,res) {
    Quote.find({}, function (err, quotes){
        if(err) {
            console.log(err);
        } else {
            res.render('quotes', { quotes: quotes });
        }
    })
})

mongoose.Promise = global.Promise;

app.post('/quotes', function (req, res) {
    console.log("POST DATA", req.body);
    var quote = new Quote({ name: req.body.name, quote: req.body.quote});
    quote.save(function (err, results) {
        if (err) {
            console.log('something went wrong', err);
            res.render('index', { errors: quote.errors })
        } else {
            console.log('successfully added a quote!', results);
            res.redirect('/quotes');
        }
    })
})

app.listen(8000, function () {
    console.log("listening on port 8000");
})