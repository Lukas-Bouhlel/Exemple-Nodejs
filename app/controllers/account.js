const Account = require('../models/account');

exports.readAll = async (req, res) => {
    try {
        const accounts = await Account.find({ user: req.auth.userId }); 
        res.status(200).json(accounts);
    } catch (error) {
        res.status(500).json({ 
            message: error.message || 'Une erreur est survenue lors de la récupération des comptes.' 
        });
    }
};

exports.create = async (req, res) => {
    try {
        const { bankName, customName } = req.body;

        const newAccount = new Account({ bankName, customName, user: req.auth.userId });

        await newAccount.save();

        res.status(201).json(newAccount);
    } catch (error) {
        res.status(500).json({ 
            message: error.message || 'Une erreur est survenue lors de la création du compte.' 
        });
    }
};

exports.update = async (req, res) => {
    try {
        const { bankName, customName } = req.body;
        const accountUpdate = await Account.findOneAndUpdate(
            { 
                _id: req.params.id, 
                user: req.auth.userId 
            },
            {
                bankName,
                customName
            },
            { 
                new: true 
            }
        );

        if (!accountUpdate) {
            return res.status(404).json({ message: 'Une erreur est survenue lors de la mise à jour du compte.' });
        }

        res.status(200).json(accountUpdate);
    } catch (error) {
        res.status(500).json({ 
            message: error.message || 'Une erreur est survenue lors de la mise à jour du compte.' 
        });
    }
};

exports.delete = async (req, res) => {
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