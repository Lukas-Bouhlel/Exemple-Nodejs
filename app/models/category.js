const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    name: { 
        type: String,
        required: [true, 'Le nom de la catégorie est requis.'],
        minLength: [5, 'La catégorie doit contenir minimum 5 lettres !'],
        trim: true
    },
});

const Category = mongoose.model("Category", categorySchema);
module.exports = Category;