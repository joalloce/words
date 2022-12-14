const mongoose = require("mongoose");

const Quote = require("../models/quoteModel");

// create new quote
const createQuote = async (req, res) => {
  let { title, author } = req.body;

  if (author === "") author = "Anonymous";

  // add doc to db
  try {
    const quote = await Quote.create({ title, author });
    res.status(200).json(quote);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete a quote
const deleteQuote = async (req, res) => {
  const { id } = req.params;

  // check if id is valid for mongo
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such quote" });
  }

  const quote = await Quote.findByIdAndDelete({ _id: id });

  if (!quote) {
    return res.status(400).json({ error: "No such quote" });
  }

  res.status(200).json(quote);
};

// get a single quote
const getQuote = async (req, res) => {
  const { id } = req.params;

  //get a random quote
  if (id === "random") {
    const count = await Quote.count();
    if (!count) {
      return res.status(404).json({ error: "No quotes" });
    }

    // get all quotes
    const random = Math.floor(Math.random() * count);

    const quote = await Quote.find({});

    if (!quote) {
      return res.status(404).json({ error: "No quotes" });
    }

    // get one random quote
    res.status(200).json(quote[random]);
    return;
  }
  // check if id is valid for mongo
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such quote" });
  }

  const quote = await Quote.findById(id);

  if (!quote) {
    return res.status(404).json({ error: "No such quote" });
  }

  res.status(200).json(quote);
};

// get all quotes
const getQuotes = async (req, res) => {
  const quotes = await Quote.find({}).sort({ createdAt: -1 });

  res.status(200).json(quotes);
};

module.exports = {
  createQuote,
  deleteQuote,
  getQuotes,
  getQuote,
};
