// Requirements:
// When the page loads, users are given the option to create a new workout or continue with their last workout.
// Add exercises to the most recent workout plan.
// Add new exercises to a new workout plan.
// View the combined weight of multiple exercises from the past seven workouts on the `stats` page.
// View the total duration of each workout from the past seven  workouts on the `stats` page.

const router = require('express').Router();
const path =  require('path');

router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));

});

// router.get("/exercise?", (req, res) => {
//     res.sendFile(path.join(__dirname, "../public/exercise.html"));

// });

// router.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname, "../public/index.html"));

// });


router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"));

});


module.exports = router;



