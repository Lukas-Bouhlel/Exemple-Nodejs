const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true,
        validate: {
            validator: function (v) {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
            },
            message: props => `${props.value} n'est pas une email valide !`
        }
    },
    password: {
        type: String,
        required: true,
        validate: {
            validator: function (v) {
                return /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9]).{9,}$/.test(v);
            },
            message: `Le mot de passe invalide ! Il doit contenir au moins 9 caractères dont au moins une lettre majuscule, un symbole et un chiffre.`
        }
    }
});

const User = mongoose.model("User", userSchema);
module.exports = User;