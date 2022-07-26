const router = require("express").Router();
const { Post } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const postData = await Post.findAll();
    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const newPostData = await Post.create({
      title: req.body.title,
      entry: req.body.entry,
      username: req.session.username,
      reply_to: req.body.reply_to ? req.body.reply_to : null,
    });
    res.status(200).json(newPostData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// router.put("/:id", (req, res) => {});

// router.delete("/:id", (req, res) => {});

module.exports = router;
