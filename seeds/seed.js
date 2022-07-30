const sequelize = require('../config/connection');
const userData = require('./userData.json');
const followData = require('./followData.json');
const bookListData = require('./bookListData.json');
const listItemData = require('./listItemData.json');
const journalData = require('./journalData.json');
const { User, Follow, BookLists, ListItems, Journal, Post } = require('../models/');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
    //user seed
  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
    //follow seed
  const follow = await Follow.bulkCreate(followData, {
    individualHooks: true,
    returning: true,
  });
    //book_list seed
  const bookLists = await BookLists.bulkCreate(bookListData, {
    individualHooks: true,
    returning: true,
  });
  //list_item seed (needs id)
  for (const bookList of bookLists) {
    for (const listitem of listItemData) {
      await ListItems.create({
        ...listitem,
        list_id: bookList.id
      });
    }
  }
    //journal seed
  const journal = await Journal.bulkCreate(journalData, {
    individualHooks: true,
    returning: true,
  });
  //post and response seed
  const parentPost = await Post.create({
    username: 'Sal',
    title: 'Test top level post',
    entry: 'This is a really cool post that will get lots of replies.',
  });

  const responsePost = await Post.create({
    username: 'Lernantino',
    title: 'Eh...',
    entry: 'Not really. Sorry dude.',
    reply_to: parentPost.id,
  });


  process.exit(0);
};

seedDatabase();