const mongoose = require("mongoose");

const scoresSchema = new mongoose.Schema({
  score: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Score", scoresSchema);
