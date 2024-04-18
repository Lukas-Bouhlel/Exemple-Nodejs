const AccountLine = require('../models/accountLine');
const Account = require('../models/account');

exports.readAll = async (req, res) => {
    try {
        const accountId = req.params.accountId;

        const accountLines = await AccountLine.find({ account: accountId });
        res.status(200).json(accountLines);
    } catch (error) {
        res.status(500).json({ 
            message: error.message || 'Une erreur est survenue lors de la récupération des lignes de compte.' 
        });
    }
};

exports.create= async (req, res) => {
    try {
        const accountId = req.params.accountId;

        const { label, type, amount, date, method, category } = req.body;
        const newAccountLine = new AccountLine({ label, type, amount, date, method, category, account: accountId });
        await newAccountLine.save();
        res.status(201).json(newAccountLine);
    } catch (error) {
        res.status(500).json({ 
            message: error.message || 'Une erreur est survenue lors de la création de la ligne de compte.' 
        });
    }
};

exports.update = async (req, res) => {
    try {
        const accountLineId = req.params.id;

        const account = await Account.findById(accountLine.account);
        if (account.user.toString() !== userId) {
            return res.status(403).json({ message: 'Vous n\'êtes pas autorisé à mettre à jour ce compte' });
        }

        let accountLineUpdate = await AccountLine.findOneAndUpdate(
            { _id: accountLineId }, 
            req.body, 
            { new: true }
        );

        if (!accountLineUpdate) {
            return res.status(500).json({ message: 'Une erreur est survenue lors de la mise à jour du compte.' });
        }

        res.status(200).json(accountLineUpdate);
    } catch (error) {
        res.status(500).json({ 
            message: error.message || 'Une erreur est survenue lors de la mise à jour du compte.' 
        });
    }
};

exports.delete = async (req, res) => {
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