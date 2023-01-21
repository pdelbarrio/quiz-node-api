const express = require("express");
const app = express();
const mongoose = require("mongoose");
const routes = require("./routes"); // includes the routes.js file
const cors = require("cors"); // includes cors module
const morgan = require("morgan"); // log the responses in the console (only in development)

require("dotenv").config();

app.use(
  cors({
    origin: (_origin, callback) => callback(null, true),
    credentials: true,
  })
);
app.use(express.json()); // we need to tell server to use json as well
app.use(routes); // tells the server to use the routes in routes.js

app.use(morgan("dev"));

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () =>
  console.log(`Connected to datbase ✔️ name ${process.env.DATABASE_URL}`)
);

app.listen(process.env.PORT, () => {
  console.log(`API running on port ${process.env.PORT} ✔️`);
});
