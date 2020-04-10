const mongoose =require('mongoose');

//schema
const feedingScheduleSchema = mongoose.Schema({
    feedingTime: {
        type: String,
        require: true
    },
    feedingLocation: {
        type: String,
        required: true
    },
    foodType: {
        type: String,
        required: true
    },
    foodQuantity: {
        type: String,
        required: true
    },
    numberOfDucks: {
        type: String,
        required: true
    }
});

//export
const feedingSchedule = module.exports = mongoose.model('Feeding Schedule', feedingScheduleSchema);