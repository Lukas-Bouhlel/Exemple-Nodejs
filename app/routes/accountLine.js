const express = require('express');
const router = express();
const accountLineCtrl = require("../controllers/accountLine.js");
const auth = require("../middleware/auth.js");

router.get("/", auth, accountLineCtrl.readAll);

router.post("/", auth, accountLineCtrl.createAccountLine);

router.put("/:id", auth, accountLineCtrl.updateAccountLine);

router.delete("/:id", auth, accountLineCtrl.deleteAccountLine);

module.exports = router;