const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create company schema
const CompanySchema = new Schema({
    name: {
        type: String,
        //required: true
    },
    address: {
        type: String,
        //required: true
    },
    service_of_activity: {
        type: String,
        //required: true
    },
    number_of_employees: {
        type: String,
        //required:true
    },
    description: {
        type: String,
        //required: true
    },
    type: {
        type: String
    }
})

module.exports = mongoose.model('companies', CompanySchema);