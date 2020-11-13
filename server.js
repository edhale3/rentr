const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT || 6001
let bodyParser = require('body-parser');

const db = require('knex')({
    client:'pg',
    connection: process.env.DATABASE_URL,
    pool: { min: 0, max:15 }
})

const deps = { db }

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.get('/api/posts', async (req, res) => {
    const db = deps.db
    const records = await db('posts')
        .select()
    return res.json(records)
})

app.post('/api/post', async (req,res) => {
    const db = deps.db
    const post = await db('posts')
    .insert({
        post_title: req.body.item,
        category: req.body.category,
        post_price: req.body.price,
        image_url: req.body.url,
        description: req.body.description,
        unit_of_rental: req.body.unit
    })
    .catch(err => {
        throw err
    })
    res.send("Success")
})


if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, 'client/build')));
  // Handle React routing, return all requests to React app
    app.get('/*', function(req, res) {
      res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
  }



app.listen(port, ()=> [
    console.log(`Congratulations you are now listening on port:${port} `)
])