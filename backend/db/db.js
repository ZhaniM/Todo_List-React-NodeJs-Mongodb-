const mongoose = require("mongoose");
require("dotenv").config();
mongoose
  .connect(process.env.DB_HOST, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Successfully connect to Mongoose."))
  .catch((err) => console.error("Connection error", err));
