const router = require("express").Router();
const ctrl = require("../controllers");

router.get("/", ctrl.users.index);
// router.get('', ctrl.users. )

module.exports = router;
