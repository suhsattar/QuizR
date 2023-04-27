const Deck = require("../models/Deck");

async function getDeckController(req, res) {
  const { deckId } = req.params;
  const deck = await Deck.findById(deckId);
  res.json(deck);
}
module.exports = { getDeckController };
