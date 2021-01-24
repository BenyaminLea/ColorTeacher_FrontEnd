const express = require("express");
const router = express.Router();
const results = require("../../models/results");
const users = require("../../models/users");

router.get("/", (req, res) => {
  results.find().then((results) => res.json(results));
});

router.get("/:id/scores", (req, res) => {
  results
    .find({ UserId: req.params.id })
    .sort({ date: 1 })
    .then((scores) => res.json(scores));
});

router.get("/top3", (req, res) => {
  users
    .find({})
    .sort({ averageScore: -1 })
    .limit(3)
    .then((users) => res.json(users));
});

router.get("/ranking", (req, res) => {
  users
    .find({})
    .sort({ averageScore: -1 })
    .then((users) => res.json(users));
});

router.get("/:id/avgscore", (req, res) => {
  results
    .find({ UserId: req.params.id })
    .sort({ date: -1 })
    .then((scores) => {
      let avg = 0;
      for (let i = 0; i < scores.length; i++) {
        avg = avg + scores[i].Score;
      }
      avg = avg / scores.length;
      res.send({ average: avg });
    });
});

router.get("/:id/maxscore", (req, res) => {
  results
    .find({ UserId: req.params.id })
    .sort({ Score: -1 })
    .then((scores) => {
      res.send(scores[0]);
    });
});

router.get("/:id/minscore", (req, res) => {
  results
    .find({ UserId: req.params.id })
    .sort({ Score: 1 })
    .then((scores) => {
      res.send(scores[0]);
    });
});

router.post("/:id/score", (req, res) => {
  const { Score } = req.body;
  const UserId = req.params.id;
  const newResult = new results({
    UserId,
    Score,
  });
  newResult.save();
  let avg = Score;
  results
    .find({ UserId: req.params.id })
    .sort({ date: -1 })
    .then((scores) => {
      for (let i = 0; i < scores.length; i++) {
        avg = avg + scores[i].Score;
      }
      avg = avg / (scores.length + 1);
    })
    .then(() => {
      users.findOne({ _id: req.params.id }).then((user) => {
        user.averageScore = avg;
        user.save();
      });
    });
  res.send("Score saved");
});
module.exports = router;
