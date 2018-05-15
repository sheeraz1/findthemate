require('./env.js');
const express = require('express');
const passport = require('passport');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const authRoutes = require('./routes/authroutes');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');

require('./models/User');
require('./models/Puzzle')
require('./services/passport');

mongoose.connect(keys.mongoUri);
const app = express();
app.use(bodyParser.json());
app.use(cookieSession({
	maxAge: 30 * 24 * 60 * 60 * 1000, 
	keys: [keys.cookieKey]
}));

app.use(passport.initialize());
app.use(passport.session());

const path = require('path');
authRoutes(app);

app.listen(5000);