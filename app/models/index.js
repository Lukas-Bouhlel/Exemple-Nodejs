const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connexion à MongoDB établie avec succès'))
  .catch(err => console.error('Erreur de connexion à MongoDB :', err));