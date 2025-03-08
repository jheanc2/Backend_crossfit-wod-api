const DB = require("./db.json");
const {saveToDatabase} = require("./utils");

const getAllWorkouts = () => {
    return DB.workouts;
};

const getOneWorkout = (workoutId) => {
    const workout = DB.workouts.find((workout) => workout.id === workoutId);
    if (!workout){
        return;
    }
    return workout;
};

const updateOneWorkout = (workoutId, changes) => {
    const indexForUpdate = DB.workouts.findIndex((workout) => workout.id === workoutId);
    if (indexForUpdate === -1){
        return;
    }
    const updatedWorkout = {
        ...DB.workouts[indexForUpdate],
        ...changes,
        updatedAt: new Date().toLocaleString("en-US", {timeZone: "UTC"})
    };
    DB.workouts[indexForUpdate] = updatedWorkout;
    saveToDatabase(DB);
    return updatedWorkout;
};

const createNewWorkOut = (newWorkout) => {
    const isAlreadyAdded = DB.workouts.findIndex((workout) => workout.name === newWorkout.name) > -1;
    if (isAlreadyAdded){
        return;
    }
    DB.workouts.push(newWorkout);
    saveToDatabase(DB);
    return newWorkout;
};

const deleteOneWorkout = (workoutId) => {
    const indexForDeletion = DB.workouts.findIndex((workout) => workout.id === workoutId);
    if (indexForDeletion === -1){
        return; 
    }
    DB.workouts.splice(indexForDeletion, 1);
    saveToDatabase(DB);
};

module.exports = {
    getAllWorkouts,
    createNewWorkOut
};