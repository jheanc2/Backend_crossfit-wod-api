const workoutService = require("../services/workoutServices");

const getAllWorkouts = (req, res) => {
    try{
        const allWorkouts = workoutService.getAllWorkouts();
        res.send({status: "OK", data: allWorkouts});
    }
    catch (error){
        res.status(error?.status || 500).send({status: "FAILED", data:{error: error?.message || error}});
    }
    // res.send("Get all workouts");
};

const getOneWorkout = (req, res) => {
    const {params: {workoutId}} = req;
    if (!workoutId){
        res.status(400).send({status: "FAILED", data: {error: "Parameter ':workoutId' can not be empty"}});
    }
    try{
        const workout = workoutService.getOneWorkout(workoutId);
        res.send({status: "OK", data: workout});
    }
    catch (error){
        res.status(error?.status || 500).send({status: "FAILED", data:{error: error?.message || error}});
    }
    // res.send("Get an existing workout");
};

const createNewWorkOut = (req, res) => {
    const {body} = req;
    if (!body.name || !body.mode || !body.equipment || !body.exercises || !body.trainerTips){
        res.status(400).send({status: "FAILED", data: {error: "One of the following keys is missing or is empty in request body: 'name', 'mode', 'equipment', 'exercises', 'trainerTips'"}});
        return;
    }

    const newWorkout = {
        name: body.name,
        mode: body.mode,
        equipment: body.equipment,
        exercises: body.exercises,
        trainerTips: body.trainerTips
    };

    try{
        const createdWorkOut = workoutService.createNewWorkout(newWorkout);
        res.status(201).send({status: "OK", data: createdWorkOut});
    }
    catch (error){
        res.status(error?.status || 500).send({status: "FAILED", data:{error: error?.message || error}});
    }
    // res.send("Create a new workout");
};

const updateOneWorkout = (req, res) => {
    const {body, params: {workoutId}} = req;
    if (!workoutId){
        res.status(400).send({status: "FAILED", data: {error: "Parameter ':workoutId' can not be empty"}});
    }
    try{
        const updatedWorkout = workoutService.updateOneWorkout(workoutId, body);
        res.send({status: "OK", data: updatedWorkout});
    }
    catch (error) {
        res.status(error?.status || 500).send({status: "FAILED", data:{error: error?.message || error}});
    }
    // res.send("Update an existing workout");
};

const deleteOneWorkout = (req, res) => {
    const {params: {workoutId}} = req;
    if (!workoutId){
        res.status(400).send({status: "FAILED", data: {error: "Parameter ':workoutId' can not be empty"}});
    }
    try{
        workoutService.deleteOneWorkout(workoutId);
        res.status(204).send({status: "OK"});
    }
    catch (error){
        res.status(error?.status || 500).send({status: "FAILED", data:{error: error?.message || error}});
    }
    // res.send("Delete an existing workout");
};

module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkOut,
    updateOneWorkout,
    deleteOneWorkout
};