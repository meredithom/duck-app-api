const express = require('express');
const router = express.Router();

//retrieving feeding data
router.get('/feedingSchedules',(req, res, next)=>{
    res.send('Retrieving duck feeding data');
});

//add feeding schedule
router.post('/feedingSchedule',(req, res, next)=>{

});

//delete feeding schdule
router.delete('/feedingSchedule/:id',(req, res, next)=>{
    
});

module.exports = router;