const mongoose = require('mongoose')
const accounts_schema = new mongoose.Schema({
    "Name":{
        type: String,required: true
    },
    "Password":{
        type: String,required: true
    },
    "Phone":{
        type: String,required: true
    }
});

mongoose.model("Accounts",accounts_schema)