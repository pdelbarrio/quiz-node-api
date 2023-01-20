const express = require("express");
const router = express.Router();

//get all quiz questions
router.get("/questions", (req, res) => {});

//get one quiz question
router.get("/questions/:id", (req, res) => {});

//create one quiz question
router.post("/questions", (req, res) => {});

//update one question
router.put("/questions/:id", (req, res) => {});

//delete one quiz question
router.delete("/questions/:id", (req, res) => {});

//esto es un test
router.get("/", (req, res) => {
  res.send("HELLO WORLD 💊");
});

module.exports = router;
