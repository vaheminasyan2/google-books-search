const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Using Schema constructor create a new BookSchema
const mongoose = rquire("mongoose");
const Schema = mongoose.Schema;


const bookSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    subtitle: {
        type: String,
    },
    authors: {
        type: [String],
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
    },
    googleId: {
        type: String,
        required: true,
        unique: true,
    },
});

// Create the book model using BookSchema and export it
const Book = mongoose.model("Book", bookSchema);
module.exports = Book;
