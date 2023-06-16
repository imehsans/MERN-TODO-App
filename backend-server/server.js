require('dotenv').config()
const cors = require('cors')
const express = require('express')
const mongoose = require('mongoose')
const workout_routes = require('./routes/workout')


// express app
const app = express()

app.use(cors({
   origin: 'http://localhost:3000',
}));

// Middleware routes
app.use(express.json())


app.use((req, res, next) => {
   console.log(req.path, req.method)
   next()
})

app.use('/api/workouts/', workout_routes)

mongoose.connect(process.env.MONGO_URI)
   .then(() => {
      // listen for requests
      app.listen(process.env.PORT, () => {
         console.log(`Connected with DB listiining on port ${process.env.PORT}`)
      })
   })
   .catch(error => {
      console.log('ERROR: ', error)
   })



// routes
// app.get('/', (req, res) => {
//    res.json({msg: 'Welcome to the APP'})
// })

