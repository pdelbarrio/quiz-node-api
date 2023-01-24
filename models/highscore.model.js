const mongoose = require("mongoose");

const HighscoreSchema = new mongoose.Schema({
  HighScores: [
    {
      name: { type: String },
      score: { type: String },
    },
  ],
});

module.exports = mongoose.model("Highscore", HighscoreSchema);
