const express = require("express");
const cors = require('cors');

//? ----- Config -----
const routes = require("./routes");
const app = express();
require("dotenv").config();

app.use(cors({
  origin: ["http://localhost:3000"],
  methods: "GET, POST, PUT, DELETE",
  optionsSuccessStatus: 200
}));


// ? ----- Middleware ------
app.use(express.urlencoded({
  extended: false
}));
app.use(express.json());

app.use('/', (req, res) => {
  res.send("Success");
});
//? ----- Routes -----
//  Auth Routes
// app.use("/api/v1/auth", routes.auth);
// User Routes
app.use("/api/v1/users", routes.users);
// Profile Routes
app.use("/api/v1/profiles", routes.profiles);
// Post Routes
app.use("/api/v1/posts", routes.posts);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server Running on port : ${PORT}`));