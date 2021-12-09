const mongoose = require('mongoose');

const db_con = "mongodb+srv://Sean:11CE1392@cluster0.hhhm6.mongodb.net/Loc8r?retryWrites=true&w=majority";

try {
   
mongoose.connect(
    db_con,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log(" Mongoose is connected")
	);
}
 catch (e) {
  console.log("could not connect");
}
const connection = mongoose.connection;
require('./locations');