const router = require("express").Router();
const { ListItems } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const listData = await ListItems.findAll();
    res.status(200).json(listData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const newListData = await ListItems.create({
      id: req.body.id,
      booktitle: req.body.booktitle,
      bookdescription: req.body.bookdescription,
      author: req.body.author,
      genre: req.body.genre,
      listname: req.body.listname,
    });
    res.status(200).json(newListData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// router.put("/:id", (req, res) => {});

// router.delete("/:id", (req, res) => {});

module.exports = router;
