const mongoose = require('mongoose');

mongoose.connect(' mongodb://127.0.0.1:27017/employeedb', {useNewUrlParser: true, useUnifiedTopology: true  }, err => {
    if (!err) {console.log('Mongo connection succeeded')}
    else {console.log('Error in DB connection: ' + err)}
});

require('./employee.model');