// Requirements:
// When the page loads, users are given the option to create a new workout or continue with their last workout.
// Add exercises to the most recent workout plan.
// Add new exercises to a new workout plan.
// View the combined weight of multiple exercises from the past seven workouts on the `stats` page.
// View the total duration of each workout from the past seven  workouts on the `stats` page.
// The user can log multiple exercises in a workout on a given day as well as track the name, type, weight, sets, reps, and duration of exercise. 


const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    date: {
        type: Date,
        default: Date.now,
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: "Excercise Type."
            },
            name: {
                type: String,
                trim: true,
                required: "Exercise Name."
            },
            duration: {
                type: Number,
                required: "Excercise Duration."
            },
            distance: {
                type: Number,
            },
            weight: {
                type: Number,

            },
            reps: {
                type: Number,
            },
            sets: {
                type: Number,

            },
        },
    ],

});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;





