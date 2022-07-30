const User = require("./user");
const Follow = require("./follow");
const BookLists = require("./book_lists");
const ListItems = require("./list_items");
// const Journal = require('./journal');
// const Post = require("./post");

User.hasMany(Follow, {
  foreignKey: "username",
  onDelete: "CASCADE",
});

User.hasMany(Follow, {
  foreignKey: "followed_username",
  onDelete: "CASCADE",
});

User.hasMany(BookLists, {
  foreignKey: "username",
  onDelete: "CASCADE",
});

BookLists.hasMany(ListItems, {
  foreignKey: "listname",
  onDelete: "CASCADE",
});

module.exports = { User, Follow, BookLists, ListItems };
