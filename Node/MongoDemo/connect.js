const mongoose = require("mongoose");

const connectionString = 
"mongodb+srv://Team0:1234@cluster0.glhvt.mongodb.net/TM-T0?retryWrites=true&w=majority";

const connectDB = () => {
  return mongoose.connect(connectionString);
};

module.exports = connectDB;