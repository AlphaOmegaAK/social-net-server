const router = require("express").Router();
const ctrl = require("../controllers/");

router.get("/", ctrl.profiles.index);
// router.get('', ctrl.profile. )

module.exports = router;
