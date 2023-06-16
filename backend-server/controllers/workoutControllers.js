const Workout = require('../models/workoutModel')
const mongoose = require('mongoose')

// Get All Workouts
const getWorkouts = async (req, res) => {
   const workouts = await Workout.find({}).sort({createdAt: -1})
   res.status(200).json(workouts)
}

// create a new Workout 
const createWorkout = async (req, res) => {
   const {title, reps, load} = req.body
   // Add Doc to db 
   try {
      const workout = await Workout.create({title, reps, load})
      res.status(200).json(workout)
   } catch (error) {
      res.status(400).json({Error: error.message})
   }
}

// get a single Workout
const getWorkout = async (req, res) => {
   const {id} = req.params
   if(!mongoose.Types.ObjectId.isValid(id)){
      return res.status(404).json({Error:'Workout Not Found'})
   }
   const workout = await Workout.findById(id)
   if(!workout) {
      return res.status(400).json({Error: 'Workout not found'})
   } 
   res.status(200).json(workout)
}

// update a Workout
const updateWorkout = async (req, res) => {
   const {id} = req.params
   if(!mongoose.Types.ObjectId.isValid(id)) {
      res.status(404).json({Error: 'Workout not found'})
   }
   const workout = await Workout.findOneAndUpdate({_id: id}, {...req.body})
   if(!workout) {
      return res.status(400).json({Error: 'Workout not Updated'})
   }
   res.status(200).json(workout)
}

//  delete a workout
const deleteWorkout = async (req, res) => {
   const {id} = req.params
   if(!mongoose.Types.ObjectId.isValid(id)){
      return res.status(404).json({Error:'Workout Not Found'})
   }
   const workout = await Workout.findOneAndDelete({_id: id})
   if(!workout) {
      return res.status(400).json({Error: 'Workout not found'})
   } 
   res.status(200).json(workout)
}

module.exports = {
   getWorkouts,
   createWorkout,
   getWorkout,
   updateWorkout,
   deleteWorkout,
}