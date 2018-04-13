
var express = require('express');
var path = require('path');
const bodyParser = require('body-parser');
var mongoose = require('mongoose')

var app = express();

mongoose.connect('mongodb://localhost/RestfulRouting');
var PokemonSchema = new mongoose.Schema({
    name: { type: String}
});
mongoose.model('Pokemon', PokemonSchema); 
var Pokemon = mongoose.model('Pokemon')

mongoose.Promise = global.Promise;

app.use(bodyParser.json());
app.use(express.static(__dirname + '/PokemonAPI/dist'));

app.get('/', function (req, res) {
    Pokemon.find({}, function (err, pokemon) {
        if (err) {
            console.log("Returned error", err);
            // respond with JSON
            res.json({ message: "Error", error: err })
        }
        else {
            // respond with JSON
            res.json({ pokemon })
        }
    })
})

// RETRIEVE ALL POKEMON
app.get('/pokemon', function (req, res) {
    Pokemon.find({}, function (err, pokemon) {
        if (err) {
            console.log("Returned error", err);
            // respond with JSON
            res.json({ message: "Error", error: err })
        }
        else {
            // respond with JSON
            res.json({ pokemon })
        }
    })
})

// RETIEVE A POKEMON
app.get('/pokemon/:id', function (req, res) {
    Pokemon.findOne({ _id: req.params.id }, function (err, pokemon) {
        if (err) {
            console.log(err);
        } else {
            // respond with JSON
            res.json({ data: pokemon })
        }
    })
})

app.listen(8000, function () {
    console.log("listening on port 8000");
})