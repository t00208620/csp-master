const mongoose = require('mongoose')
const checkcruiseShipSchema = new mongoose.Schema({

    destination: {type: String, required: true},
    noOfPassengers: {type: Number, "default": 0},
    facilities: String,
	departTime: int,

});

mongoose.model("cruiseShips",cruiseShipSchema)