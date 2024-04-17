const express = require('express');
const router = express();
const accountLineCtrl = require("../controllers/accountLine.js");

router.get("/", accountLineCtrl.readAll);

router.post("/", accountLineCtrl.createAccountLine);

router.put("/:id", accountLineCtrl.updateAccountLine);

router.delete("/:id", accountLineCtrl.deleteAccountLine);

module.exports = router;