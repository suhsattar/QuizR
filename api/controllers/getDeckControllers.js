const Deck = require("../models/Deck");

async function getDeckControllers(req, res) {
  const decks = await Deck.find();
  res.json(decks);
}
module.exports = { getDeckControllers };
