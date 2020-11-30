const authConfig = {
  authRequired: false,
  auth0Logout: true,
  secret: `${process.env.AUTH0_CLIENT_SECRET}`,
  baseURL: 'http://localhost:3000',
  clientID: 'f0y0wrPjXoudATxwSrl5BEw5XwIyHK26',
  issuerBaseURL: 'https://levimk.au.auth0.com'
};

module.exports = {
  stripePublishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
  stripeSecretKey: process.env.STRIPE_SECRET_KEY,
  authConfig
}