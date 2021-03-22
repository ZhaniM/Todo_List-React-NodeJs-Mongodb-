const mongoose = require("mongoose");
require("dotenv").config();
mongoose
  .connect(process.env.DB_HOST, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Successfully connect to Mongoose."))
  .catch((err) => console.error("Connection error", err));

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
});

let Student = mongoose.model("Student", studentSchema);

exports.CreateStudent = (req, res) => {
  let student = new Student({
    name: "Bobi",
    age: 51,
  });
  student.save((err) => {
    if (err) {
      res.status(500).json({ error: { Message: err.message } });
      console.log(err);
    } else {
      res.status(200).json(student);
      console.log("Successfully added");
    }
  });
};
