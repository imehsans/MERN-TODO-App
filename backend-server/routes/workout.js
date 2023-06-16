const express = require('express');
const router = express.Router();
const Workout = require('../models/workoutModel')
const {createWorkout, getWorkout, getWorkouts , updateWorkout ,deleteWorkout} = require('../controllers/workoutControllers')

// Get all workouts
router.get('/', getWorkouts);

// POST a new workout
router.post('/', createWorkout);

// Get single workout
router.get('/:id', getWorkout);

// Update a workout
router.patch('/:id',updateWorkout);

// DELETE a workout
router.delete('/:id', deleteWorkout);

module.exports = router;
