var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose')

var app = express();

mongoose.connect('mongodb://localhost/Authors');

var AuthorSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 3 }
}, { timestamps: true });

mongoose.model('Author', AuthorSchema); 
var Author = mongoose.model('Author')

mongoose.Promise = global.Promise;

app.use(bodyParser.json());
app.use(express.static(__dirname + '/AuthorsAngular/dist'));

app.get('/authors', function (req, res) {
    Author.find({}, function (err, authors) {
        console.log(authors)
        if (err) {
            res.json({ message: "error", error: err })
        }
        else {
            res.json({ message: "Success", data: authors })
        }


    })
})

app.post('/new', function (req, res) {
    var newAuthor = new Author(req.body);
    console.log("making new author");
    newAuthor.save(function (err) {
        if (err) {
            console.log("error creating")
            res.json({ message: "error creating" });
        }
        else {
            res.json({ message: "Success", id: newAuthor._id })
        }
    })
})

app.put('/edit', function (req, res) {
    console.log("editing author")
    Author.findOne({ _id: req.body.id }, function (err, author) {
        console.log(author)
        author.name = req.body.name;
        author.save(function (err) {
            if (err) {
                console.log("error creating")
                res.json({ message: err });
            }
            else {
                res.json({ message: "Success", id: author._id })
            }
        })

    })
})

app.delete('/delete/:id', function (req, res) {
    console.log("deleting author id: ", req.params.id)
    Author.remove({ _id: req.params.id }, function (err) {
        if (err) {
            res.json({ message: err })
        }
        else {
            res.json({ message: "Success" })
        }
    })
})

app.all("*", (req, res, next) => {
    res.sendFile(path.resolve("./AuthorsAngular/dist/index.html"))
});

app.listen(8000, function () {
    console.log("listening on port 8000");
})