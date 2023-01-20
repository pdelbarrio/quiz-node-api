const mongoose = require("mongoose");

const QuestionSchemaOLD = new mongoose.Schema({
  description: String,
  alternatives: [
    {
      text: {
        type: String,
        required: true,
      },
      isCorrect: {
        type: Boolean,
        required: true,
        default: false,
      },
    },
  ],
});

const QuestionSchema = new mongoose.Schema({
  category: String,
  type: {
    type: String,
    default: "multiple",
  },
  question: {
    type: String,
    required: true,
  },
  correct_answer: {
    type: String,
    required: true,
  },
  incorrect_answers: {
    type: [String],
    required: true,
  },
});

module.exports = mongoose.model("Question", QuestionSchema);

/*

question model in the current API

{
    "category": "Entertainment: Music",
    "type": "multiple",
    "difficulty": "medium",
    "question": "What was Bon Iver&#039;s debut album released in 2007?",
    "correct_answer": "For Emma, Forever Ago",
    "incorrect_answers": [
                        "Bon Iver, Bon Iver",
                        "22, A Million",
                        "Blood Bank EP"
                        ]
}


*/
