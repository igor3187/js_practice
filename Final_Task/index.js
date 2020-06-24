const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const path = require('path');
const cors = require('cors');
const passport = require('passport');

//initialize the app
const app = express();

//form data middleware
app.use(bodyParser.urlencoded({
    extended: false
}));
//json body middleware
app.use(bodyParser.json());
//cors middleware
app.use(cors());
//set static directory
app.use(express.static(path.join(__dirname, 'public')));
//use passport middleware
app.use(passport.initialize());
//passport strategy
require('./config/passport')(passport);
//bring in the DB configuration and connect to db
const db = require('./config/keys').mongoURI;
mongoose.connect(db, { useNewUrlParser: true,  useUnifiedTopology: true })
    .then(() => {
    console.log(`DB is connected ${db}`)
})
    .catch(err => console.log(`cannot connect to db ${err}`));

//users route
const users = require('./routes/api/users');
app.use('/api/users', users);

//companies route
const companies = require('./routes/api/companies');
app.use('/api/companies', companies);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));



