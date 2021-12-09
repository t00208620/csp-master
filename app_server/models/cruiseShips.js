const mongoose = require('mongoose')
const cruiseShipSchema = new mongoose.Schema({

    destination: {type: String, required: true},
    noOfPassengers: {type: Number, "default": 0},
    facilities: String,
	departTime: int,

});

mongoose.model("cruiseShips",cruiseShipSchema)