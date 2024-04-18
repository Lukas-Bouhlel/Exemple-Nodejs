const express = require('express');
const router = express();
const accountLineCtrl = require("../controllers/accountLine.js");
const auth = require("../middleware/auth.js");

router.get("/:accountId", auth, accountLineCtrl.readAll);

router.post("/:accountId", auth, accountLineCtrl.create);

router.put("/:id", auth, accountLineCtrl.update);

router.delete("/:id", auth, accountLineCtrl.delete);

module.exports = router;