const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
    bankName: { type: String, required: true },
    customName: { type: String, maxlength: 50 },
    lastUpdated: { type: Date },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});

const Account = mongoose.model('Account', accountSchema);
module.exports = Account;
