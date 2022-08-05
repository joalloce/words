require("dotenv").config();

const cors = require("cors");
const express = require("express");

const app = express();

// middlewares
app.use(
  cors({
    origin: (origin, cb) => cb(null, true),
    credentials: true,
  })
);
app.use(express.json());
// it tracks every request that comes in.
app.use((req, res, next) => {
  console.log(req.method, req.path);
  next();
});

// Todo: create endpoints

// Todo: connect to mongo db

app.listen(process.env.PORT, () => {
  console.log("Listening on port", process.env.PORT);
});
