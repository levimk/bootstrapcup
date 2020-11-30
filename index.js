const config = require('./config');
const dotenv = require('dotenv');
dotenv.config();

// Auth0
const { auth } = require('express-openid-connect');

// Mongoose
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/', {
  useNewUrlParser: true
})

//Loads the express module
const express = require('express');
const app = express();

const hbs = require('express-handlebars');

app.set('view engine', 'hbs');
app.engine('hbs', hbs({
  extname: 'hbs',
  defaultView: 'default',
  layoutsDir: __dirname + '/views/layouts',
  partialsDir: __dirname + '/views/partials'
}))


app.use(auth(config.authConfig));

//Serves static files (we need it to import a css file)
app.use(express.static('public'))


// app.get('/', (req, res) => {
//   res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
// })

const profile = require('./routes/profileRoutes');
app.use('/profile', profile);

const home = require('./routes/homeRoutes');
app.use('/', home);

const accounts = require('./routes/usersRoutes');
app.use('/accounts', accounts);

//Makes the app listen to port 3000
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`App listening to port ${port}`));