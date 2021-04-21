const express = require('express')
const knex = require('knex')(require('./knexfile.js')["development"]);
const app = express()
const port = 3001

//PLEASE PUT THIS IN THE LEARN. need this or else req.body is undefined
app.use(express.json());

/*
Things we'll have to look at doing once we get the basic post/remove working.
1: We are getting id numbers back from our foreign keys, I think we are supposed to use joins so we can get back the name of the value we want 
*/
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
/*

Postman format:
{"postsid":4 , "post_title":"i" , "post_body":"Hell" , "price":34 , "image_url":"www.google.com" , "base_id":2 , "tag_id":1, "user_id":1 }
*/


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

/*
23

The problem in your code is that you are missing the ".then" statement, which causes the actual execution of the code.

   knex('user').insert({email: req.body.email})
      .then( function (result) {
          res.json({ success: true, message: 'ok' });     // respond back to request
       })
That should work. Since knex.js's insert function is a promise, you need to call .then() to actually call it.
*/