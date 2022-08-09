const router = require("express").Router();
const { Follow } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const followData = await Follow.findAll();
    res.status(200).json(followData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const newFollowData = await Follow.create({
      username: req.session.username,
      followed_username: req.body.followed_username,
    });
    res.status(200).json(newFollowData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// router.put("/:id", (req, res) => {});

// router.delete("/:id", (req, res) => {});

module.exports = router;
