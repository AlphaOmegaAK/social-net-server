const express = require("express");

const app = express();

//? ----- Config -----
const routes = require("./routes");
require("dotenv").config();

app.get("/", (req, res) => {
  res.send("Hello");
});

//? ----- Routes -----

app.use("/api/v1/users", routes.users);

app.use("/api/v1/profiles", routes.profiles);

app.user("/api/v1/posts", routes.posts);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server Running on port : ${PORT}`));
