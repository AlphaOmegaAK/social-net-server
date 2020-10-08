const db = require("../models");

//! ----- Users Index  -----
// @ GET api/v1/user
// @ Access Public
const index = (req, res) => {
  console.log("User Index Route Hit");
  return res.status(200);
};

//! ----- Users Show  -----
// @ Post ap/v1/
// @ Access

//! ----- Users Create  -----
// @
// @ Access

//! ----- Users   -----
// @
// @ Access

module.exports = {
  index,
};