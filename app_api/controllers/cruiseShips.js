const mongoose = require('mongoose');
const cruiseShip = mongoose.model('cruiseShips');

const checkcruiseShip = function(req,res){

    checkcruiseShips.find({})
        res.status(200).json(cruiseShips.find({}));

}
module.exports = {
    checkcruiseShip
}