const express = require('express')
const router = express();
const userRoutes = require('./user.js');
const accountRoutes = require('./account.js');
const accountLineRoutes = require('./accountLine.js');

router.use("/auth", userRoutes);
router.use("/account", accountRoutes);
router.use("/accountLine", accountLineRoutes);

module.exports = router