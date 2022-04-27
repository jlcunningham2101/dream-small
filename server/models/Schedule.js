const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const scheduleSchema = new Schema({
    title: {
        type: String,
        required: true
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

const Schedule = mongoose.model('Schedule', scheduleSchema);

module.exports = Schedule;