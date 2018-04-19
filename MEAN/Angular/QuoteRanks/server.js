let express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose')

let app = express();

mongoose.connect('mongodb://localhost/Authors');

let AuthorSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 3 },
    quotes: [{
        quote: {type: String, minlength: 5},
        votes: {type: Number, default: 0 }
    }]
}, { timestamps: true });
// quotes: [ {quote, votes}, {quote, votes} ]


mongoose.model('Author', AuthorSchema);
let Author = mongoose.model('Author')

mongoose.Promise = global.Promise;

app.use(bodyParser.json());
app.use(express.static(__dirname + '/QuoteRanksAngular/dist'));

// Retrieve all authors
app.get('/authors', function (req, res) {
    Author.find({}, function (err, authors) {
        console.log(authors)
        if (err) {
            res.json({ message: "Error", err: err })
        } else {
            res.json({ message: "Success", data: authors })
        }
    })
})

// Retrieve one author
app.get('/authors/:id', function (req, res) {
    Author.findOne({ _id: req.params.id }, function (err, author) {
        if (err) {
            res.json({ message: "Error", error: err })
        } else {
            res.json({ message: "Success", author: author })
        }
    }) 
})

// Create a new author
app.post('/new', function (req, res) {
    let newAuthor = new Author(req.body);
    console.log("making new author");
    newAuthor.save(function (err) {
        if (err) {
            console.log("error creating")
            res.json({ message: "Error creating an author", err: err });
        } else {
            res.json({ message: "Success", id: newAuthor._id })
        }
    })
})

// Retrieve all quotes
app.get('/viewquotes/:id', function (req, res) {
    Author.findOne({ _id: req.params.id }, function (err, authors) {
        console.log(authors)
        if (err) {
            res.json({ message: "Error", err: err })
        } else {
            res.json({ message: "Success", data: authors })
        }
    })
})

// Create a new quote
app.post('/newquote/:id', function (req, res) {
    let newQuote = new Author(req.body);
    console.log("making new quote");
    newQuote.save(function (err) {
        if (err) {
            console.log("error creating")
            res.json({ message: "Error creating a quote", err: err });
        } else {
            res.json({ message: "Success", id: newQuote._id })
        }
    })
})

// Update author
app.put('/edit', function (req, res) {
    console.log("editing author")
    Author.findOne({ _id: req.body.id }, function (err, author) {
        console.log(author)
        author.name = req.body.name;
        author.save(function (err) {
            if (err) {
                res.json({ message: "Error", err: err });
            } else {
                res.json({ message: "Success", id: author._id })
            }
        })
    })
})


// Delete author
app.delete('/delete/:id', function (req, res) {
    console.log("deleting author id: ", req.params.id)
    Author.remove({ _id: req.params.id }, function (err) {
        if (err) {
            res.json({ message: "Error", err: err })
        } else {
            res.json({ message: "Success" })
        }
    })
})

// Catch 'other' routes
app.all("*", (req, res, next) => {
    res.sendFile(path.resolve("./QuoteRanksAngular/dist/index.html"))
});

app.listen(8000, function () {
    console.log("listening on port 8000");
})