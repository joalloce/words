const express = require("express");

const {
  createQuote,
  deleteQuote,
  getQuotes,
  getQuote,
} = require("../controllers/quoteController");

const router = express.Router();

// GET all quotes
router.get("/", getQuotes);

// GET a quote by id
router.get("/:id", getQuote);

// POST a new quote
router.post("/", createQuote);

// DELETE a quote
router.delete("/:id", deleteQuote);

module.exports = router;
