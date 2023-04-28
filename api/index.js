const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const { getDeckControllers } = require("./controllers/getDeckControllers");
const { createDeckController } = require("./controllers/createDeckController");
const { deleteDeckController } = require("./controllers/deleteDeckController");
const {
  createCardForDeckController,
} = require("./controllers/createCardForDeckController");
const { getDeckController } = require("./controllers/getDeckController");
const {
  deleteCardOnDeckController,
} = require("./controllers/deleteCardOnDeckController");

const PORT = 5000;

const app = express();

app.use(
  cors({
    origin: true,
  })
);
app.use(express.json());

app.get("/api/decks", getDeckControllers);
app.post("/api/decks", createDeckController);
app.delete("/api/decks/:deckId", deleteDeckController);
app.get("/api/decks/:deckId", getDeckController);
app.post("/api/decks/:deckId/cards", createCardForDeckController);
app.delete("/api/decks/:deckId/cards/:index", deleteCardOnDeckController);

// mongoose.connect(process.env.MONGO_URL).then(() => {
//   console.log(`listening on port ${PORT}`);
//   app.listen(PORT);
// });
mongoose.connect(process.env.MONG_URL);
module.exports = app;
