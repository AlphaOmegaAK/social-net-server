const router = require("express").Router();
const ctrl = require("../controllers");

// @ POST
// @ access Public
router.post("/register", ctrl.auth.register);



// @ POST
// @ access Public
router.post("/login", ctrl.auth.login);



// @ GET
// @ access Private
router.get('/verify', ctrl.auth.verify);

module.exports = router;