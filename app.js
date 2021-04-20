const express = require('express')
const knex = require('knex')(require('./knexfile.js')["development"]);
const app = express()
const port = 3001

app.get('/', (req,res) => res.send('Hello and shit'))

app.listen(port, () => console.log('Listening to port: ' + port))


app.get('/users', (req,res) => {
    //res.send(knex.select().table('users'))
    knex
    .select()
    .from("users")
    .then(data => res.status(200).json(data))
    .catch(err => 
        res.status(404).json({
            message: 'The data you are looking for could not be found. Please try again'
        }
        ))
})

app.get('/locations', (req,res)=>{
    knex
    .select()
    .from("locations")
    .then(data => res.status(200).json(data))
    .catch(err => 
        res.status(404).json({
            message: 'Data not found'
        }))
})

app.get('/ads', (req,res)=>{
    knex
    .select()
    .from("posts")
    .then(data => res.status(200).json(data))
    .catch(err => 
        res.status(404).json({
            message: 'Data not found'
        }))
})