const { Schema, model } = require("mongoose");

const ScheduleSchema = new Schema({
    eventTitle: {
        type: String,
        required: true
    },

    createdBy: {
        type: String,
        required: true,
        trim: true
    },

    startTime: {
        type: String,
        required: true,
    },

    endTime: {
        type: String,
        reuired: true
    },

    id: {
        type: Number
    }
});

// create the Schedule model using ScheduleSchema
const Schedule = model('Schedule', ScheduleSchema);

// export the Schedule model
module.exports = Schedule;