const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  name:{
    type: String,
    required:[true,"must provide a task name"],
    maxlength:[50, "name can not be more than 50 characters"]
  },
  completed:{
    type: Boolean,
    default:false
  }
});

module.exports = mongoose.model("tasks", TaskSchema);