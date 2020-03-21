const express = require("express");
const projectModelDb = require("./projectModel");

const router = express.Router();

router.get("/", (req, res) => {
  projectModelDb
    .get(req.query)
    .then(response => {
      res.status(200).json(response);
    })
    .catch(err => {
      res.status(500).json({ message: "error getting data" });
    });
});

module.exports = router;
