const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");
const users = require("../../models/users");

//@ Get request to api/Users
//@ desc Get all pets
//@ access Public

router.get("/", (req, res) => {
  users
    .find()
    .sort({ date: -1 })
    .then((users) => res.json(users));
});

//@ Get request to api/Users by id
//@ desc Get all User by id
//@ access Private

router.get("/:id", (req, res) => {
  users.findOne({ _id: req.params.id }).then((user) => res.json(user));
});

//@ POST request to api/Users
//@ desc POST User
//@ access Public

router.post("/", (req, res) => {
  // res.send("register")
  const {
    UserName,
    FirstName,
    LastName,
    email,
    password,
    password2,
    Phone,
    type,
  } = req.body;
  if (
    !email ||
    !password ||
    !password2 ||
    !FirstName ||
    !LastName ||
    !UserName
  ) {
    return res.status(400).json({ msg: "Please enter all required fields" });
  }
  users.findOne({ email }).then((user) => {
    if (user) {
      return res.status(400).json({ msg: "User already exists" });
    }

    const newUser = new users({
      UserName,
      FirstName,
      LastName,
      email,
      password,
      password2,
      Phone,
      type,
    });
    // create salt&hash
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        newUser.password2 = newUser.password;
        newUser.save().then((user) => {
          jwt.sign(
            { id: user.id },
            config.get("jwtSecret"),
            { expiresIn: 3600 },
            (err, token) => {
              if (err) throw err;
              res.json({
                token,
                user: {
                  id: user.id,
                  FirstName: user.FirstName,
                  LastName: user.LastName,
                  email: user.email,
                  password2: user.password2,
                  Phone: user.Phone,
                  type: user.type,
                },
              });
            }
          );
        });
      });
    });
  });
});

module.exports = router;
