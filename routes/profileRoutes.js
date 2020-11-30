const express = require('express');
const router = express.Router();

const { requiresAuth } = require('express-openid-connect');

router.use( requiresAuth() );

// Controllers
// const profileContoller = require('../controllers/profileController');

router.get('/', (req, res, next) => {
  console.log('Is authed');
  res.send('PROFILE index');
});

module.exports = router;