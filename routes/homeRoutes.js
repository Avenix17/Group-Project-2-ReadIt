const router = require("express").Router();
const { User, Follow, Post } = require("../models");
const { Op } = require("sequelize");
const withAuth = require("../utils/authentication");


router.get('/', withAuth, async (req, res) => {
  console.log(req.session);
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
      children: children.map(c => c.dataValues),
    };
  }));

  res.render('homepage', {
    renderPosts,
    following,
    logged_in: req.session.logged_in,
    username: req.session.username,
  });

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



// router.get("/", withAuth, async  (req, res) => {
//   try {
//     // Get all projects and JOIN with user data
//     // const userData = await User.findAll({
//     //   include: [
//     //     {
//     //       model: User,
//     //       attributes: ["username"],
//     //     },
//     //   ],
//     // });

//     // Serialize data so the template can read it
//     // const users = userData.map((users) => users.get({ plain: true }));

//     // Pass serialized data and session flag into template
//     res.render("homepage", {
//       // users,
//       logged_in: req.session.logged_in,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.get("/user/:username", async (req, res) => {
//   try {
//     const userData = await User.findByPk(req.params.username, {
//       include: [
//         {
//           model: User,
//           attributes: ["username"],
//         },
//       ],
//     });

//     const user = userData.get({ plain: true });

//     res.render("user", {
//       ...user,
//       logged_in: req.session.logged_in,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.get("/", async (req, res) => {
//   try {
//     // Get all projects and JOIN with user data
//     const postData = await Post.findAll({
//       include: [
//         {
//           model: Post,
//           attributes: ["entry"],
//         },
//       ],
//     });

//     // Serialize data so the template can read it
//     const post = postData.map((post) => post.get({ plain: true }));

//     // Pass serialized data and session flag into template
//     res.render("homepage", {
//       post,
//       logged_in: req.session.logged_in,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.get("/post/:entry", async (req, res) => {
//   try {
//     const postData = await Post.findByPk(req.params.id, {
//       include: [
//         {
//           model: Post,
//           attributes: ["entry"],
//         },
//       ],
//     });

//     const post = postData.get({ plain: true });

//     res.render("post", {
//       ...post,
//       logged_in: req.session.logged_in,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.get("/", async (req, res) => {
//   try {
//     // Get all projects and JOIN with user data
//     const followData = await Follow.findAll({
//       include: [
//         {
//           model: Follow,
//           attributes: ["followed_username"],
//         },
//       ],
//     });

//     // Serialize data so the template can read it
//     const follow = followData.map((follow) => follow.get({ plain: true }));

//     // Pass serialized data and session flag into template
//     res.render("homepage", {
//       follow,
//       logged_in: req.session.logged_in,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.get("/follow/:followed_username", async (req, res) => {
//   try {
//     const followData = await Follow.findByPk(req.params.id, {
//       include: [
//         {
//           model: Follow,
//           attributes: ["followed_username"],
//         },
//       ],
//     });

//     const follow = followData.get({ plain: true });

//     res.render("follow", {
//       ...follow,
//       logged_in: req.session.logged_in,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// // Use withAuth middleware to prevent access to route
// router.get("/profile", withAuth, async (req, res) => {
//   try {
//     // Find the logged in user based on the session ID
//     const userData = await User.findByPk(req.session.user_id, {
//       attributes: { exclude: ["password"] },
//       include: [{ model: Project }],
//     });

//     const user = userData.get({ plain: true });

//     res.render("profile", {
//       ...user,
//       logged_in: true,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

//  router.get("/login", (req, res) => {
//     //If the user is already logged in, redirect the request to another route
//    if (req.session.logged_in) {
//    res.redirect("/profile");
//      return;
//    }
//    res.render("login");
//   //  res.render("login", {layout : 'main'});
//  });

module.exports = router;
