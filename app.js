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

app.get('/', (req,res) => res.send('Hello'))

app.listen(port, () => console.log('Listening to port: ' + port))

app.get('/users', (req,res) => {
    //res.send(knex.select().table('users'))
    // SELECT * FROM users
    knex.select().from("users")
    .then(data =>res.status(200).json(data))
    })

app.get('/locations', (req,res)=>{
    knex.select().from("locations")
    .then(data => res.status(200).json(data))
})

app.get('/ads', (req, res) => {
    // /ads?tagid=X&baseid=X
    let {baseid, tagid} = req.query
    if (baseid != undefined && tagid != undefined) {
    knex.select().from('posts').where({base_id: baseid,tag_id: tagid})
    .then(data => res.status(200).json(data))

    } else if  (baseid != undefined && tagid == undefined) {
    knex.select().from('posts').where('base_id',baseid)
    .then(data => res.status(200).json(data))

    } else if (baseid == undefined && tagid != undefined){
    knex.select().from('posts').where('tag_id',tagid)
    .then(data => res.status(200).json(data))

    }else {
    knex.select().from('posts')
    .then(data => res.status(200).json(data))
    }})
   
// Grab a specific ad based on id
app.get("/ads/:id", (req, res) => {
    let postsid = req.params.id
    knex.select().from("posts").where("postsid", postsid)
    .then(data => res.status(200).json(data))
})

// Post and Delete
app.post('/ads', (req,res) => {
    console.log(req.body)
    knex('posts').insert(req.body)
    .then( (result) => {
        res.json({ success: true, message: 'ok'})
    })
})

app.delete('/ads', (req, res) => {
    let postsid = req.body.postsid
    knex("posts").where({postsid: postsid}).del()
    .then(result => res.json({success:true, message: "Ad deleted"}))
})

app.patch('/ads', (req, res) => {  
    knex("posts").where({postsid: req.body.postsid}).update(req.body)
    .then(result => res.json({success:true, message: "Ad updated"}))
})

// Error Handling

app.use(function (err,req, res,next){
    res.status(err.status || 500);
    if (res.status == 404){
        res.json({'ERROR': "Data not found"})
    } else{
        res.json({
            'error': {
                message: "We were unable to retrieve your requested resource, please try again or re-do your request"
        }})
    }})

