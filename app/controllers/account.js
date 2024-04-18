const Account = require('../models/account');

// Fonction pour récupérer tous les comptes
exports.readAll = async (req, res) => {
    try {
        const accounts = await Account.find();
        res.status(200).json(accounts);
    } catch (error) {
        res.status(500).json({ 
            message: error.message || 'Une erreur est survenue lors de la récupération des comptes.' 
        });
    }
};

// Fonction pour créer un nouveau compte
exports.createAccount = async (req, res) => {
    try {
        const { bankName, customName, userId } = req.body;
        const newAccount = new Account({ bankName, customName, user: userId });
        await newAccount.save();
        res.status(201).json(newAccount);
    } catch (error) {
        res.status(500).json({ 
            message: error.message || 'Une erreur est survenue lors de la création du compte.' 
        });
    }
};

// Fonction pour mettre à jour un compte existant
exports.updateAccount = async (req, res) => {
    try {
        const accountId = req.params.id;
        const { bankName, customName } = req.body;
        const updatedAccount = await Account.findByIdAndUpdate(accountId, { bankName, customName }, { new: true });
        res.status(200).json(updatedAccount);
    } catch (error) {
        res.status(500).json({ 
            message: error.message || 'Une erreur est survenue lors de la mise à jour du compte.' 
        });
    }
};

// Fonction pour supprimer un compte existant
exports.deleteAccount = async (req, res) => {
    try {
        const accountId = req.params.id;
        await Account.findByIdAndDelete(accountId);
        res.status(200).json({ message: 'Compte supprimé avec succès.' });
    } catch (error) {
        res.status(500).json({ 
            message: error.message || 'Une erreur est survenue lors de la suppression du compte.' 
        });
    }
};