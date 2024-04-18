const express = require('express');
const router = express();
const accountCtrl = require("../controllers/account.js");
const auth = require("../middleware/auth.js");

router.get("/", auth, accountCtrl.readAll);

router.post("/", auth, accountCtrl.create);

router.put("/:id", auth, accountCtrl.update);

router.delete("/:id", auth, accountCtrl.delete);

module.exports = router;