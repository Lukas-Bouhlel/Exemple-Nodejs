const express = require('express');
const router = express();
const accountCtrl = require("../controllers/account.js");

router.get("/", accountCtrl.readAll);

router.post("/", accountCtrl.createAccount);

router.put("/:id", accountCtrl.updateAccount);

router.delete("/:id", accountCtrl.deleteAccount);

module.exports = router;