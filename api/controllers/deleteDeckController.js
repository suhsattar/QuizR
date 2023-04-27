const Deck = require("../models/Deck");
async function deleteDeckController(req, res) {
  const deckId = req.params.deckId;
  const deck = await Deck.findByIdAndDelete(deckId);
  res.json(deck);
}
module.exports = { deleteDeckController };
