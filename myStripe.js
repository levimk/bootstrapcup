const config = require('./config');
const Stripe = require('stripe');
const myStripe = Stripe(config.stripeSecretKey);

module.exports = myStripe;