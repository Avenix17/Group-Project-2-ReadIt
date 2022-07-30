const router = require("express").Router();
const userRoute = require("./userRoute");
// const postRoute = require("./postRoute");
const followRoutes = require("./followRoutes");
const book_listRoutes = require("./book_listRoutes");
const list_itemsRoute = require("./list_itemsRoute");
// const journalRoute = require('./journalRoute');

router.use("/users", userRoute);
router.use("/follows", followRoutes);
router.use("/books", book_listRoutes);
router.use("/lists", list_itemsRoute);
// router.use("/journal, journalRoute");
// router.use("/post, postRoute");

module.exports = router;
