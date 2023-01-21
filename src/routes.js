const express = require("express");
const router = express.Router();
const Question = require("../models/question.model");
const User = require("../models/user.model");

//get all quiz questions
router.get("/questions", async (req, res) => {
  try {
    const questions = await Question.find();
    return res.status(200).json(questions);
  } catch (error) {
    return res.status(500).json({ error: error });
  }
});

//get one quiz question
router.get("/questions/:id", (req, res) => {});

//create one quiz question
router.post("/questions", async (req, res) => {
  try {
    const { ...info } = req.body;
    // console.log(info);
    const question = await Question.create({
      ...info,
    });

    return res.status(201).json(question);
  } catch (error) {
    return res.status(500).json({ error: error });
  }
});

//update one question
router.put("/questions/:id", (req, res) => {});

//delete one quiz question
router.delete("/questions/:id", (req, res) => {});

//route to create admin user (already done)
// router.post("/create-admin", async (req, res) => {
//   try {
//     const { name, password } = req.body;
//     console.log("name and password =>", name, password);

//     const admin = await User.create({
//       name: name,
//       password: password,
//     });

//     console.log(admin);
//     return res.status(201).json(admin);
//   } catch (error) {
//     return res.status(500).json({ error: error });
//   }
// });

//route to admin login
router.post("/login", (req, res) => {
  const { name, password } = req.body;
  console.log("name and password in backend?", req.body);
  // Use MongoDB to check the entered password against the password stored in the database
  User.findOne({ name, password }, (err, user) => {
    if (err) {
      res.status(500).json({ error: "Error finding user" });
    } else if (!user) {
      res.status(404).json({ error: "User not found" });
      //password is correct
    } else {
      res.json(user);
    }
  });
});

const checkAdmin = (req, res, next) => {
  const user = req.session.user;
  if (!user || !user.isAdmin) {
    return res.status(401).redirect("/");
  }
  next();
};

module.exports = router;
