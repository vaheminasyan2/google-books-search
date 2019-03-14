const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Using Schema constructor create a new BookSchema
var BookSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    authors: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true,
    }
});

// Create the book model using BookSchema and export it
var Book = mongoose.model("Book", BookSchema);
module.exports = Book;
