// Requirements:
// When the page loads, users are given the option to create a new workout or continue with their last workout.
// Add exercises to the most recent workout plan.
// Add new exercises to a new workout plan.
// View the combined weight of multiple exercises from the past seven workouts on the `stats` page.
// View the total duration of each workout from the past seven  workouts on the `stats` page.

const router = require('express').Router();
const Workout = require("../models/workout.js");

//view combined weight of multiple exercises 
router.get("/workouts", (req, res) => {
    Workout.aggregate.find({})
        .then((dbWorkouts) => {
            res.json(dbWorkouts);
        })

        .then(($addFields), {
            totalDuration: { $sum: "$exercises.duration" },
        })
        .catch(err => {
            res.json(err);
        });

});

//Add exercises to the most recent workout plan
router.put("/api/workouts/:id", ({ params, body }, res) => {
    Workout.findByIdAndUpdate(
        params.id,
        {
            $push: {
                exercise: body
            },
        },
        {
            new: true,
            runValidators: true,
        },
    )
        .then((dbWorkouts) => {
            res.json(dbWorkouts);

        })
        .catch((err) => {
            res.status(400).json(err);
        });

});

//add new exercise to a new workout plan.
router.post("/api/workouts", (req, res) => {
    Workout.create({})
        .then((dbWorkouts) => {
            res.json(dbWorkouts);
        })
        .catch((err) => {
            res.json(err);
        });

});


//total duration of each workout from the past seven.
router.get("/api/workouts/range", (req, res) => {
    Workout.aggregate.limit(7)
        .then((dbWorkouts) => {
            console.log(dbWorkouts);
            res.json(dbWorkouts);
        })
        .then(($addFields), {
            totalDuration: { $sum: "$exercises.duration" },
            totalWeight: { $sum: "$exercises.weight" },
        })
        .catch((err) => {
            res.json(err);
        });

});


module.exports = router;

