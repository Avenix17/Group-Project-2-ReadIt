const router = require("express").Router();
const { User, Follow, Post } = require("../models");
const { Op } = require("sequelize");
const withAuth = require("../utils/authentication");


router.get('/', withAuth, async (req, res) => {
  const following = await Follow.findAll({
    where: {
      username: req.session.username,
    },
  });
  // Grabs the users that the current user follows
  const following_usernames = following.map(f => f.getDataValue("followed_username"));
  following_usernames.push(req.session.username);

  // rendering all posts to homepage
  const posts = await Post.findAll({
    where: {
      // username: req.session.username,
      username: {
        [Op.in]: following_usernames,
      },
      reply_to: null,
    },
  });
  //Puts newest posts at the top
  posts.sort();
  posts.reverse();

  //Grabs children posts of initial posts
  const renderPosts = await Promise.all(posts.map(async (p) => {
    const children = await p.getPosts();
    return {
      ...p.dataValues,
      // Makes createdAt a more reasonable format
      createdAt: (p.createdAt + '').substring(0, 24),
      children: children.map(c => ({
        ...c.dataValues,
        createdAt: (c.createdAt + '').substring(0, 24),
      })),
    };
  }));

  res.render('homepage', {
    renderPosts,
    following,
    logged_in: req.session.logged_in,
    username: req.session.username,
  });

});

// Creates route to search-results handlebar
router.get('/search', withAuth, async (req, res) => {
  const users = await User.findAll({
    attributes: ['username']
  });
  console.log(users);

  res.render('search-result', {users, logged_in: req.session.logged_in});
});


// redirecting users to homepage once they log in
router.get('/login', (req, res) => {
  console.log(req.session);
  if (req.session.logged_in) {
    console.log("Logged in, redirecting to /");
    res.redirect('/');
    return;
  }
  console.log("Not logged in, rendering login");
  res.render('login');
});

module.exports = router;
