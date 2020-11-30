const express = require('express');
const router = express.Router();

const usersController = require('../controllers/usersController');

router.get('/', async (req, res, next) => {
  let accounts = await stripe.accounts.list({limit: 3});
  accounts = accounts.data;
  res.render('accounts', {
    layout: 'default',
    accounts
  });
});

module.exports = router;