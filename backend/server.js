require("dotenv").config();

const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");

const quoteRoutes = require("./routes/quotes");

const app = express();

// middlewares
app.use(
  cors({
    origin: (origin, cb) => cb(null, true),
    credentials: true,
  })
);

app.use(express.json());

app.use("/api/quotes", quoteRoutes);

// connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to db");

    app.listen(process.env.PORT, () => {
      console.log("Listening on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
