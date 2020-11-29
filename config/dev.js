
console.log(`./dev Stripe PK: ${process.env.STRIPE_PUBLISHABLE_KEY}`)

module.exports = {
  stripePublishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
  stripeSecretKey: process.env.STRIPE_SECRET_KEY,
}