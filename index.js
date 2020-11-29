const dotenv = require('dotenv');
dotenv.config();
const config = require('./config');
console.log(config)

//Loads the express module
const express = require('express');

//Creates our express server
const app = express();

// const stripe = require('./myStripe');


//Serves static files (we need it to import a css file)
app.use(express.static('public'))

//Sets a basic route
app.get('/', (req, res) => {
  console.log(config.stripeSecretKey);
  res.send('Hello Hotload!')
});

//Makes the app listen to port 3000
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`App listening to port ${port}`));