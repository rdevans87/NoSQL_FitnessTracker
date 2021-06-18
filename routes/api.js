// Requirements:
// When the page loads, users are given the option to create a new workout or continue with their last workout.
// Add exercises to the most recent workout plan.
// Add new exercises to a new workout plan.
// View the combined weight of multiple exercises from the past seven workouts on the `stats` page.
// View the total duration of each workout from the past seven  workouts on the `stats` page.

const router = require('express').Router();
const Fitness = require("../models/fitness.js");

router.get("/api/workouts", (req, res) => {
Fitness.workout.find ({})
.then(fitnessWorkout => {
    res.json(fitnessWorkout);

})
.catch(err => {
    res.json(err);
});
 

router.put("/workouts/:id", ({ params, body }, res) => {
console.log(body);
Fitness.workout.findByIdAndUpdate(
    params.id,
    {
        $push: {
            exercise: body,
        },

    },
    {
        new: true,
        runValidators: true

    }
)
    .then(fitnessWorkout);
    res.json(fitnessWorkout);

    })
    .catch(err => {
        res.json(err);
    });

});