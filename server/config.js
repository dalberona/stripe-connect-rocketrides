'use strict';

module.exports = {
  // App name
  appName: 'APP NAME',

  // Public domain of Rocket Rides
  publicDomain: 'https://winstarrxvetplatform.com',

  // Server port
  port: 443,

  // Secret for cookie sessions
  secret: 'nnkjdask3432ksdkfdsfdsfkj',

  // Configuration for Stripe
  // API Keys: https://dashboard.stripe.com/account/apikeys
  // Connect Settings: https://dashboard.stripe.com/account/applications/settings
  stripe: {
    secretKey: 'YOUR_STRIPE_SECRET_KEY',
    publishableKey: 'YOUR_STRIPE_PUBLISHABLE_KEY',
    clientId: 'YOUR_STRIPE_CLIENT_ID',
    authorizeUri: 'https://connect.stripe.com/express/oauth/authorize',
    tokenUri: 'https://connect.stripe.com/oauth/token'
  },

  // Configuration for MongoDB
  mongoUri: 'mongodb://localhost/rocketrides',

  // Configuration for Google Cloud (only useful if you want to deploy to GCP)
  gcloud: {
    projectId: 'YOUR_PROJECT_ID'
  }
};
