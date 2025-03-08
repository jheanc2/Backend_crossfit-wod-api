const workoutService = require("../services/workoutServices");

const getAllWorkouts = (req, res) => {
    const allWorkouts = workoutService.getAllWorkouts();
    res.send({status: "OK", data: allWorkouts});
    // res.send("Get all workouts");
};

const getOneWorkout = (req, res) => {
    const {params: {workoutId}} = req;
    if (!workoutId){
        return;
    }
    const workout = workoutService.getOneWorkout(workoutId);
    res.send({status: "OK", data: workout});
    // res.send("Get an existing workout");
};

const createNewWorkOut = (req, res) => {
    const {body} = req;
    if(
        !body.name ||
        !body.mode ||
        !body.equipment ||
        !body.exercises ||
        !body.trainerTips
    ) {
        return;
    }

    const newWorkout = {
        name: body.name,
        mode: body.mode,
        equipment: body.equipment,
        exercises: body.exercises,
        trainerTips: body.trainerTips
    };
    const createdWorkOut = workoutService.createNewWorkout(newWorkout);
    res.status(201).send({status: "OK", data: createdWorkOut});
    // res.send("Create a new workout");
};

const updateOneWorkout = (req, res) => {
    const {body, params: {workoutId}} = req;
    if (!workoutId){
        return;
    }
    const updatedWorkout = workoutService.updateOneWorkout(workoutId, body);
    res.send({status: "OK", data: updatedWorkout});
    res.send("Update an existing workout");
};

const deleteOneWorkout = (req, res) => {
    const {params: {workoutId}} = req;
    if (!workoutId){
        return;
    }
    workoutService.deleteOneWorkout(workoutId);
    res.status(204).send({status: "OK"});
    // res.send("Delete an existing workout");
};

module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkOut,
    updateOneWorkout,
    deleteOneWorkout
};