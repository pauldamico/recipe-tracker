const express = require('express')
const cors = require('cors')
require('dotenv').config()
const morgan = require('morgan')
const mongoose = require('mongoose')
const app = express()
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

mongoose.connect(`mongodb+srv://recipedb:${process.env.DBLOGIN}@cluster0.xkjsggd.mongodb.net/?retryWrites=true&w=majority`, console.log("Connected to Database"))


app.get('/', (req, res)=>{    
    res.send("Welcome to the meal plan API ")
})


app.use('/recipes', require('./routes/recipeRouter.js'))
app.use('/users', require('./routes/userRouter.js'))


app.use((err, req, res, next)=>{
    return res.send({errMsg:err.message})
})

app.listen(9000, console.log("Server is listening on port 9000"))