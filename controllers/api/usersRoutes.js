const router = require('express').Router();
const { Users } = require('../../models');

//end point of /api/users routes

router.get('/', async (req, res) => {
  try {
    const usersData = await Users.findAll({
      //this parameter will include all associated tables, as well as nested tables
      include: [{ all: true, nested: true }],
    });
    res.status(200).json(usersData);
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const userById = await Users.findByPk(req.params.id, {
      include: [{ all: true, nested: true }],
    });
    if (!userById) {
      return res.status(404).json({
        message: 'This user ID does not exist. Please enter a valid user ID!',
      });
    }
    res.status(200).json(userById);
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const createUser = await Users.create({
      username: req.body.username,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: req.body.password,
      cart_id: req.body.cart_id,
      balance: req.body.balance,
    });
    res.status(200).json(createUser);
  } catch (err) {
    return res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const deleteUser = await Users.destroy({
      where: { user_id: req.params.id },
    });
    if (!deleteUser) {
      return res.status(404).json({
        message: 'This user ID does not exist. Please enter a valid user ID!',
      });
    }
    res.status(200).json(deleteUser);
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;
