const mongoose =require('mongoose');

//schema
const feedingScheduleSchema = mongoose.Schema({
    feedingTime: {
        type: String,
        require: true
    },
    foodType: {
        type: String,
        required: true
    },
    feedingLocation: {
        type: String,
        required: true
    },
    numberOfDucks: {
        type: String,
        required: true
    },
    foodQuantity: {
        type: String,
        required: true
    }
});

//export
const feedingSchedule = module.exports = mongoose.model('Feeding Schedule', feedingScheduleSchema);