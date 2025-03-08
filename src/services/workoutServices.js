const {v4: uuid} = require("uuid");
const Workout = require("../database/Workout");

const getAllWorkouts = () => {
    const allWorkouts = Workout.getAllWorkouts();
    return allWorkouts;
};
  
const getOneWorkout = () => {
    return;
};
  
const createNewWorkout = (newWorkout) => {
    const workoutToInsert = {
        ...newWorkout,
        id: uuid(),
        createdAt: new Date().toLocaleString("en-US", {timeZone: "UTC"}),
        updatedAt: new Date().toLocaleString("en-US", {timeZone: "UTC"})
    };
    const createdWorkOut = Workout.createNewWorkOut(workoutToInsert);
    return createdWorkOut;
};
  
const updateOneWorkout = () => {
    return;
};
  
const deleteOneWorkout = () => {
    return;
};
  
module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout,
};