const express = require('express')
const knex = require('knex')(require('./knexfile.js')["development"]);
const cors = require('cors')
const app = express()
const port = 3001

//PLEASE PUT THIS IN THE LEARN. need this or else req.body is undefined
app.use(express.json());
// Fix the CORS error when importing data into react
// requires npm install cors
app.use(cors())

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



// Post and Delete
app.post('/ads', (req,res) => {
    console.log(req.body)
    knex('posts').insert(req.body)
    .then( (result) => {
        res.json({ success: true, message: 'ok'})
    })
    .catch( (err) =>{
        res.json({message:"No Go " + err})
    })
})

app.delete('/ads', (req, res) => {
    let postsid = req.body.postsid
    knex("posts").where({postsid: postsid}).del()
    .then(result => res.json({success:true, message: "Ad deleted"}))
    .catch(err => res.json({message: err}))
})

app.patch('/ads', (req, res) => {
    console.log(req.body)
    
    knex("posts").where({postsid: req.body.postsid}).update(req.body)
    .then(result => res.json({success:true, message: "Ad updated"}))
    .catch(err => res.json({message: err}))
})
/*
knex('books')
  .where('published_date', '<', 2000)
  .update({
    status: 'archived',
    thisKeyIsSkipped: undefined
  })

Patch example:
app.patch('/api/todos/:id', (req, res) => {
  const todo = todos.find(todo => todo.id == req.params.id);
  if (!todo) return res.sendStatus(404);
  todo.completed = !todo.completed;
  res.json(todo);
 });
*/
