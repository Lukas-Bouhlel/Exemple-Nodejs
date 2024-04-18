const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
    bankName: { 
        type: String, 
        required: [true, 'Le nom de la banque est requis.'] 
    },
    customName: { 
        type: String, 
        maxlength: [50, 'Le nom personnalisé ne doit pas dépasser 50 caractères.'],
        required: [true, 'Le nom personnalisé est requis.'] 
    },
    lastUpdated: { 
        type: Date, 
        default: Date.now 
    },
    user: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
        required: [true, 'L\'utilisateur est requis.'] 
    }
});

accountSchema.pre('save', function (next) {
    this.lastUpdated = Date.now();
    next();
});

accountSchema.pre('findOneAndUpdate', function (next) {
    this.set({ lastUpdated: Date.now() });
    next();
});

const Account = mongoose.model('Account', accountSchema);
module.exports = Account;