const { Schema, model } = require("mongoose");

const ScheduleSchema = new Schema({
  task: {
    type: String,
    required: false,
  },

  id: {
    type: Number,
    //add primary key here, auto increment
  },
});

// create the Schedule model using ScheduleSchema
const Schedule = model("Schedule", ScheduleSchema);

// export the Schedule model
module.exports = Schedule;
