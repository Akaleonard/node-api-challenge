const express = require("express");
const projectModelDb = require("./projectModel");
const actionModelDb = require("./actionModel")

const router = express.Router();

// router.get("/project", (req, res) => {
//   projectModelDb.get(req.query)
//   .then(response => {
//     res.status(200).json(response)
//   })
//   .catch(err => {
//     res.status(500).json({ message: "couldn't get"})
//   })
// })

router.get("/project/:id", (req, res) => {
  const { id } = req.params
  projectModelDb
    .get(id)
    .then(response => {
      res.status(200).json(response);
    })
    .catch(err => {
      res.status(500).json({ message: "error getting data" });
    });
});

router.get("/action/:id", (req, res) => {
  const { id } = req.params;
  actionModelDb.get(id)
  .then(action => {
    res.status(200).json(action)
  })
  .catch(err => {
    res.status(500).json({ message: "couldn't get"})
  })
})

router.post("/action", (req, res) => {
  const body = req.body;
  actionModelDb.insert(body)
  .then(action => {
    res.status(201).json(action)
  })
  .catch(err => {
    res.status(500).json({ message: "couldn't post"})
  })
})

router.post("/project", (req, res) => {
  const body = req.body;
  projectModelDb.insert(body)
  .then(project => {
    console.log(project)
    res.status(201).json(project)
  })
  .catch(err => {
    res.status(500).json({ message: "couldn't save to database"})
  })
})

// router.put("/project/:id", (req, res) => {

// })

// router.delete("/project/:id", (req, res) => {
//   projectModelDb.remove(req.params.id) 
//   .then(deleted => {
//     if(deleted) {
//       res.status(204).end()
//     } else {
//       res.status(404).json({ message: "user does not exist"})
//     }
//   })
//   .catch(err => {
//     res.status(500).json({message: "couldn't delete"})
//   })
// })

module.exports = router;
