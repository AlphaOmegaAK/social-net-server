const mongoose = require("mongoose");

const connString =
  process.env.MONGODB_URI || "mongodb://localhost:27017/social_net";

const configObj = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
};

mongoose
  .connect(connString, configObj)
  .then(() => console.log("MongoDB Successfully Connected"))
  .catch(() => console.log("MongoDb Connection Unsuccessful"));

module.exports = {
  //  Models will go here
};
