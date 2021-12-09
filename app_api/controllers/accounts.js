const mongoose = require('mongoose');
const Accounts = mongoose.model('Accounts');


const createAccount = function(req,res){
    //should be body instead
    if(!req || !req.query)
        return res.status(400).json({ message: 'Not enough parameters' });
    else {
        const account = {"account": req.query.username, "password": req.query.password, "phone": req.query.phone};

        Accounts.create(account)

    }
}

module.exports = {
    createAccount
}