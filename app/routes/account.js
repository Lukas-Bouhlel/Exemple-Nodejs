const express = require('express');
const router = express();
const accountCtrl = require("../controllers/account.js");
const auth = require("../middleware/auth.js");

router.get("/", auth, accountCtrl.readAll);

router.post("/", auth, accountCtrl.createAccount);

router.put("/:id", auth, accountCtrl.updateAccount);

router.delete("/:id", auth, accountCtrl.deleteAccount);

module.exports = router;