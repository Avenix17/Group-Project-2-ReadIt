const express = require("express");
const session = require("express-session");
const routes = require("./routes");
const exphbs = require('express-handlebars');
const helpers = require('./utils/authentication');
const path = require('path');


const sequelize = require("./config/connection");
const router = require("./routes/api");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const hbs = exphbs.create({ helpers });

const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
  secret: "Super secret secret",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

module.exports = router;

// app.all("*", withAuth, (req, res, next) =>{
//   req.session.logged_in = true;
//   next();
// })
// app.all("*", (req, res, next) => {
//   req.session.logged_in = false;
//   // req.session.currentUser = 'Sal';
//   req.session.currentUser = 'Amiko';
//   next();
// });

// app.get("/", (req, res, next) => {
//   console.log("Setting logged in to true");
//   req.session.logged_in = true;
//   next();
// });

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});


