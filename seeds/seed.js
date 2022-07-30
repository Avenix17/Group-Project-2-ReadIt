const sequelize = require('../config/connection');
const userData = require('./userData.json');
const followData = require('./followData.json');
const bookListData = require('./bookListData.json');
const listItemData = require('./listItemData.json');
const { User, Follow, BookLists, ListItems } = require('../models/');

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
    //list_items seed
  const listitems = await ListItems.bulkCreate(listItemData, {
    individualHooks: true,
    returning: true,
  });


    //   for (const project of projectData) {
    //     await Project.create({
    //       ...project,
    //       user_id: users[Math.floor(Math.random() * users.length)].id,
    //     });


  process.exit(0);
};

seedDatabase();