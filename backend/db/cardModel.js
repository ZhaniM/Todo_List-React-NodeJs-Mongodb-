const mongoose = require("mongoose");
const cardSchema = new mongoose.Schema({
  title: "string",
  content: "string",
});
let Card = mongoose.model("Card", cardSchema);

module.exports = Card;
