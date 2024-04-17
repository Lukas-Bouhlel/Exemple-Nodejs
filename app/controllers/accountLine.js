const { AccountLine } = require('../models');

// Fonction pour récupérer toutes les lignes de compte
exports.readAll = async (req, res) => {
    try {
        const accountLines = await AccountLine.find();
        res.status(200).json(accountLines);
    } catch (error) {
        res.status(500).json({ 
            message: error.message || 'Une erreur est survenue lors de la récupération des lignes de compte.' 
        });
    }
};

// Fonction pour créer une nouvelle ligne de compte
exports.createAccountLine = async (req, res) => {
    try {
        const { label, type, amount, date, method, category, account } = req.body;
        const newAccountLine = new AccountLine({ label, type, amount, date, method, category, account });
        await newAccountLine.save();
        res.status(201).json(newAccountLine);
    } catch (error) {
        res.status(500).json({ 
            message: error.message || 'Une erreur est survenue lors de la création de la ligne de compte.' 
        });
    }
};

// Fonction pour mettre à jour une ligne de compte existante
exports.updateAccountLine = async (req, res) => {
    try {
        const accountLineId = req.params.id;
        const { label, type, amount, date, method, category, account } = req.body;
        const updatedAccountLine = await AccountLine.findByIdAndUpdate(accountLineId, 
            { label, type, amount, date, method, category, account }, { new: true });
        res.status(200).json(updatedAccountLine);
    } catch (error) {
        res.status(500).json({ 
            message: error.message || 'Une erreur est survenue lors de la mise à jour de la ligne de compte.' 
        });
    }
};

// Fonction pour supprimer une ligne de compte existante
exports.deleteAccountLine = async (req, res) => {
    try {
        const accountLineId = req.params.id;
        await AccountLine.findByIdAndDelete(accountLineId);
        res.status(200).json({ message: 'Ligne de compte supprimée avec succès.' });
    } catch (error) {
        res.status(500).json({ 
            message: error.message || 'Une erreur est survenue lors de la suppression de la ligne de compte.' 
        });
    }
};