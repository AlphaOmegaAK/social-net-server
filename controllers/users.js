const db = require("../models");

//! ----- Users Index  -----
const index = (req, res) => {
  console.log("User Index Route Hit");
  return res.status(200);
};

//! ----- Users Show  -----

//! ----- Users Create  -----

//! ----- Users   -----

module.exports = {
  index,
};
