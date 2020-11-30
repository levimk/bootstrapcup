const express = require('express');
const router = express.Router();

const stripe = require('../utils/configuredStripe');

router.get('/', async (req, res, next) => {
  res.render('home', {
    layout: 'default',
    template: 'home-template',
  });
});

module.exports = router;