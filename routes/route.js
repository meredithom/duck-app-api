const express = require('express');
const router = express.Router();


const feedingSchedule = require('../models/feedingSchedule');

//retrieving feeding data
router.get('/feedingSchedule',(req, res, next)=>{
    feedingSchedule.find(function(error,schedules) {
        res.json(schedules);
    });
});

//add feeding schedule
router.post('/feedingSchedule',(req, res, next)=>{
    let newFeedingSchedule = new feedingSchedule({
        feedingTime: req.body.feedingTime,
        foodType: req.body.foodType,
        feedingLocation: req.body.feedingLocation,
        numberOfDucks: req.body.numberOfDucks,
        foodQuantity: req.body.foodQuantity
    });

    newFeedingSchedule.save((error, schedule)=>{
        if(error) {
            res.json({msg: 'Error adding schedule'});
        } else {
            res.json({msg: 'New feeding Schedule Added'});
        }
    });
});

//delete feeding schdule
router.delete('/feedingSchedule/:id',(req, res, next)=>{
    feedingSchedule.remove({_id: req.params.id}, function(error, result){
        if(error) {
            res.json(error);
        } else {
            res.json(result);
        }
    });
});

module.exports = router;