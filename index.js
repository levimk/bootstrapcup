const _ = require('lodash');

const dotenv = require('dotenv');
dotenv.config();
const config = require('./config');


//Loads the express module
const express = require('express');

//Creates our express server
const app = express();

const hbs = require('express-handlebars');

app.set('view engine', 'hbs');
app.engine('hbs', hbs({
  extname: 'hbs',
  defaultView: 'default',
  layoutsDir: __dirname + '/views/layouts',
  partialsDir: __dirname + '/views/partials'
}))


//Serves static files (we need it to import a css file)
app.use(express.static('public'))


const home = require('./routes/home');
app.use('/', home);

const accounts = require('./routes/accounts');
app.use('/accounts', accounts);

//Makes the app listen to port 3000
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`App listening to port ${port}`));