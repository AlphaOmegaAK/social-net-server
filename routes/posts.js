const router = require("express").Router();
const ctrl = require("../controllers/");

router.get("/", ctrl.posts.index);
// router.get('', ctrl.posts.

module.exports = router;
