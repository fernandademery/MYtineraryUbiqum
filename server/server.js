const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("Server is running on " + port + "port");
});

const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(cors());

app.use("/cities", require("./routes/cities"));

app.use("/itineraries", require("./routes/itineraries"));

app.use("/users", require("./routes/users"));

// Login and logout
app.use("/api/users", require("./routes/users"));

app.use("/users/logout", require("./routes/users"));

app.use("api/users/logout", require("./routes/users"));

// Importing DV keys:
const db = require("./keys").mongoURI;

// Linking MongoDB to local Express instance:
const mongoose = require("mongoose");

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true
  })
  .then(() => console.log("Connection to Mongo DB established"))
  .catch(err => console.log(err));

// Importing passport for login authentication:
const passport = require("passport");
app.use(passport.initialize());
require("./config/passport");
