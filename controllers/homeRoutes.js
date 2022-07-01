//These are all the view routes for your application
const router = require('express').Router();

//when a GET request is received on the root(/) route,
//render the home.handlebars view
router.get('/', (req, res) => {
  res.render('home');
});

router.get('/login', (req, res) => {
  res.render('login');
});

router.get('/signup', (req, res) => {
  res.render('signup');
});

router.get('/portal', (req, res) => {
  res.render('portal');
});

// router.get('/singleproduct', (req, res) => {
//   res.render('singleproduct');
// });

// router.get('/categoriespage', (req, res) => {
//   res.render('categoriespage');
// });

module.exports = router;
