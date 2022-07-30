const router = require("express").Router();
const { BookLists } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const bookData = await BookLists.findAll();
    res.status(200).json(bookData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const newBookData = await BookLists.create({
      listname: req.body.listname,
      public: req.body.public,
      username: req.body.username,
    });
    res.status(200).json(newBookData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// router.put("/:id", (req, res) => {});

// router.delete("/:id", (req, res) => {});

module.exports = router;
