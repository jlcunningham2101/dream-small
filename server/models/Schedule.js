const { Schema, model } = require("mongoose");

const scheduleSchema = new Schema({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  task: {
    type: String,
    required: false,
  },
});

// create the Schedule model using ScheduleSchema
const Schedule = model("Schedule", scheduleSchema);

// export the Schedule model
module.exports = Schedule;
