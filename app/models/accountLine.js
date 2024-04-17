const mongoose = require('mongoose');

const accountLineSchema = new mongoose.Schema({
    label: {
        type: String,
        required: [true, 'Le libellé est requis.'],
        minlength: [2, 'Le libellé doit contenir au moins 2 caractères.'],
        maxlength: [50, 'Le libellé ne peut pas dépasser 50 caractères.']
    },
    type: { 
        type: String,
        enum: {
            values: ['crédit', 'débit'],
            message: 'Le type d\'action doit être crédit ou débit.'
        },
        required: [true, 'Le type d\'action est requis.']
    },
    amount: {
        type: Number,
        required: [true, 'Le montant est requis.']
    },
    date: {
        type: Date,
        required: [true, 'La date est requise.']
    },
    method: {
        type: String,
        enum: {
            values: ['chèque,', 'retrait', 'CB'],
            message: 'La méthode de paiement doit être chèque, retrait ou CB.'
        },
        required: [true, 'Le moyen de paiement est requis.']
    },
    isPassed: {
        type: Boolean,
        default: false
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category', 
        required: [true, 'La catégorie est requise.']
    },
    account: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Account',
        required: [true, 'Le compte est requis.']
    },
    lastUpdated: {
        type: Date,
        default: Date.now
    }
});

const AccountLine = mongoose.model('AccountLine', accountLineSchema);
module.exports = AccountLine;