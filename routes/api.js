// Requirements:
// When the page loads, users are given the option to create a new workout or continue with their last workout.
// Add exercises to the most recent workout plan.
// Add new exercises to a new workout plan.
// View the combined weight of multiple exercises from the past seven workouts on the `stats` page.
// View the total duration of each workout from the past seven  workouts on the `stats` page.

const router = require('express').Router();
const Fitness = require("../models/fitness.js");

//view combined weight of multiple exercises 
router.get("/api/workouts", (req, res) => {
Fitness.aggregate.find({})
.then(dbWorkouts => {
    res.json(dbWorkouts);
})

.then($addFields, {
        totaDuration: { $sum: "$exercise.duration"},
})
.catch(err => {
    res.json(err);
});

});
 
//Add exercises to the most recent workout plan
router.put("/api/workouts/:id", ({ params, body }, res) => {
console.log(body);
Fitness.findByIdAndUpdate(
    params.id,
    { $push:    {
        exercise: body
         },
    },
    {
        new: true,
        runValidators: true,
    },
)
    .then(dbWorkouts => {
    res.json(dbWorkouts);

    })
    .catch(err => {
        res.status(400).json(err);
    });

});

//add new exercise to a new workout plan.
router.post("/api/workouts", ({ body }, res) => {
console.log(body);
Fitness.create({})
.then(dbWorkouts => {
    res.json(dbWorkouts);
})
.catch(err => {
    res.json(err);
})
res.send("POST")

});


//total duration of each workout from the past seven.
router.get("/api/workouts/range", (req, red) => {
 Fitness.aggregate.limit(7)
 .then(dbWorkouts => {
    res.json(dbWorkouts);
})
.then($addFields, {
        totaDuration: { $sum: "$exercise.duration"},
        totalWeight: { $sum: "$exercise.weight"},
})
.catch(err => {
    res.json(err);
});

});


module.exports = router;

