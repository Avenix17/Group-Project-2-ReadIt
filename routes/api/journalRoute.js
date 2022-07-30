const router = require("express").Router();
const { Journal } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const journalData = await Journal.findAll();
    res.status(200).json(journalData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const newJournalData = await Journal.create({
      id: req.body.id,
      title: req.body.title,
      entry: req.body.entry,
      user_id: req.body.user_id,
    });
    res.status(200).json(newJournalData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// router.put("/:id", (req, res) => {});

// router.delete("/:id", (req, res) => {});

module.exports = router;
