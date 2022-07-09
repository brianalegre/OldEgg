const router = require('express').Router();
const { Users } = require('../models');
const loggedIn = require('../utils/auth');

//end point of /profile
router.get('/profile', loggedIn, async (req, res) => {
  try {
    const userData = await Users.findOne({
      where: {
        user_id: req.session.user_id,
      }
    });

    if (!userData) {
      return res.status(404).json({
        message: 'This user ID does not exist. Please enter a valid user ID!',
      });
    }
    // Render data
    const users = userData.get({ plain: true });
    res.render('myProfile', {
      users,
      logged_in: req.session.logged_in, 
      cart_count: req.session.cart_count
    });
  } catch (err) {
    return res.status(500).json(err);
  }
}
);

module.exports = router;
