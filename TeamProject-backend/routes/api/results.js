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
