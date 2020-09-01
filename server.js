const express = require("express");

//? ----- Config -----
const routes = require("./routes");
const app = express();

require("dotenv").config();

app.get("/", (req, res) => {
  res.send("Hello");
});

//? ----- Routes -----
// User Routes
app.use("/api/v1/users", routes.users);
// Profile Routes
app.use("/api/v1/profiles", routes.profiles);
// Post Routes
app.use("/api/v1/posts", routes.posts);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server Running on port : ${PORT}`));
