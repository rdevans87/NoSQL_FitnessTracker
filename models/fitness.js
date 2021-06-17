// Requirements:
// When the page loads, users are given the option to create a new workout or continue with their last workout.
// Add exercises to the most recent workout plan.
// Add new exercises to a new workout plan.
// View the combined weight of multiple exercises from the past seven workouts on the `stats` page.
// View the total duration of each workout from the past seven  workouts on the `stats` page.


const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const fitnessSchema = new Schema({
    date: {
        type: Date,
        default: Date.now
      },
    exercises: [
    {
        type: string,
        trim: true,
        required: "Add exercises to workout plan."
      },
      value: {
        type: Number,
        required: "Enter an amount"
      },
     
    });
    


]
    const Transaction = mongoose.model("Transaction", transactionSchema);
    
    module.exports = Transaction;
    
}