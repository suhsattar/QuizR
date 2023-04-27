const Deck = require("../models/Deck");

async function createDeckController(req, res) {
  const newDeck = new Deck({
    title: req.body.title,
  });
  const createdDeck = await newDeck.save();
  res.json(createdDeck);
}
module.exports = { createDeckController };
