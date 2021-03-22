const Card = require("../db/cardModel");

exports.addCard = (req, res) => {
  console.log(req.body);
  let reqBody = req.body;

  let card = new Card({
    title: reqBody.title,
    content: reqBody.content,
  });
  card.save((err) => {
    err ? res.send("error") : res.json(card);
  });
};

exports.getCards = (req, res) => {
  Card.find((err, cards) => {
    return err ? res.status(400) : res.status(200).json(cards);
  });
};

exports.deleteCard = (req, res) => {
  let reqBody = req.body;
  console.log(reqBody);
  Card.findByIdAndDelete(reqBody._id, (error, card) => {
    error ? res.send("error") : res.json(card);
  });
};
