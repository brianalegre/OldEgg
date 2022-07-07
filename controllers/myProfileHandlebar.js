const router = require('express').Router();
const { Users } = require('../models');


//end point of /profile
// router.get('/profile/:id', async (req, res) => {
//   try {
//     const userById = await Users.findByPk(req.params.id, {
//       include: [{ all: true, nested: true }],
//     });
//     if (!userById) {
//       return res.status(404).json({
//         message: 'This user ID does not exist. Please enter a valid user ID!',
//       });
//     }
//     const user = userById.get({ plain: true });
//     res.render('myProfile', {
//       user,
//       logged_in: req.session.logged_in
//     });
//   } catch (err) {
//     return res.status(500).json(err);
//   }
// });


router.get('/profile', async (req, res) => {
  try {
    const userData = await Users.findAll({ where: { user_id: req.session.user_id } });

    if (!userData) {
      return res.status(404).json({
        message: 'This user ID does not exist. Please enter a valid user ID!',
      });
    }
    // res.status(200).json(user);
    const users = userData.get({ plain: true });
    res.render('myprofile', {
      users,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    return res.status(500).json(err);
  }
}
);

module.exports = router;
