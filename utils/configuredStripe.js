const config = require('../config');
const Stripe = require('stripe');
const configuredStripe = Stripe(config.stripeSecretKey);

module.exports = configuredStripe;