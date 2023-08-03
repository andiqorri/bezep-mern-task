const express = require("express");
const List = require("../models/List");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const data = await List.find({});
  } catch (error) {}
}); // get all lists

router.get("/:id", (req, res) => {}); // get a single list

router.post("/", (req, res) => {}); // create a list

router.delete("/:id", (req, res) => {}); // delete a list

router.post("/task", (req, res) => {}); // create a task in list

router.delete("/task/:id", (req, res) => {}); // delete a task in list

router.put("/task/:id", (req, res) => {}); // update a task in list

module.exports = router;
