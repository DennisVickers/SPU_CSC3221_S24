const mongoose = require("mongoose");

// Note update the Team userId and password and the Team Database name to your own.
// For example for Team 1 the userid and password should be Team1:1234
// and the Database name is TM-T1
const connectionString = 
"mongodb+srv://TeamX:1234@cluster0.glhvt.mongodb.net/TM-Tx?retryWrites=true&w=majority";

const connectDB = () => {
  return mongoose.connect(connectionString);
};

module.exports = connectDB;