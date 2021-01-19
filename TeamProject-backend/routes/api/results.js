const express = require("express");
const router = express.Router();
const results = require("../../models/results");

router.get("/:id/scores", (req, res) => {
  results
    .find({ UserId: req.params.id })
    .sort({ date: -1 })
    .then((scores) => res.json(scores));
});

router.get("/:id/avgscore", (req, res) => {
  results
    .find({ UserId: req.params.id })
    .sort({ date: -1 })
    .then((scores) => {
      let avg = 0;
      for (let i = 0; i < scores.length; i++) {
        avg = avg + scores[i];
      }
      avg = avg / scores.length;
      res.send(avg);
    });
});

router.get("/:id/maxscore", (req, res) => {
  results
    .find({ UserId: req.params.id })
    .sort({ date: -1 })
    .then((scores) => {
      scores.sort(function (a, b) {
        return b - a;
      });
      res.send(scores[0]);
    });
});

router.get("/:id/minscore", (req, res) => {
  results
    .find({ UserId: req.params.id })
    .sort({ date: -1 })
    .then((scores) => {
      scores.sort(function (a, b) {
        return a - b;
      });
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
  res.send("Score saved");
});
module.exports = router;
