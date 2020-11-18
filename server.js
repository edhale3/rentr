const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT || 6001
let bodyParser = require('body-parser');
let path = require('path')

const db = require('knex')({
    client:'pg',
    connection: process.env.DATABASE_URL,
    pool: { min: 0, max:15 }
})

const deps = { db }

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())




// function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
//     var R = 6371; // Radius of the earth in km
//     var dLat = deg2rad(lat2-lat1);  // deg2rad below
//     var dLon = deg2rad(lon2-lon1); 
//     var a = 
//       Math.sin(dLat/2) * Math.sin(dLat/2) +
//       Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
//       Math.sin(dLon/2) * Math.sin(dLon/2)
//       ; 
//     var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
//     var d = R * c; // Distance in km
//     return d;
//   }
  
// function deg2rad(deg) {
//   return deg * (Math.PI/180)
// }

//latitude: 1 degree = 69 miles
//          1 mile = 0.01449275 degrees
/*

5 miles = 0.07246375 degrees
15 miles = 0.21739125 degrees
25 miles = 0.36231875 degrees
50 miles = 0.7246375 degrees
100 miles = 1.449275 degrees
250 miles = 3.6231875 degrees

Longitude:
                    Cosine of current latitude in radians, convert to Miles
1 degree = (111.32*Math.cos((CurrentLatitude * Math.PI)/180) * .621371)
1 mile = 1/(111.32*Math.cos((CurrentLatitude * Math.PI)/180) * .621371)
5 miles = 5/(111.32*Math.cos((CurrentLatitude * Math.PI)/180) * .621371)
15 miles = 15/(111.32*Math.cos((CurrentLatitude * Math.PI)/180) * .621371)
25 miles = 25/111.32*(111.32*Math.cos((CurrentLatitude * Math.PI)/180) * .621371)
50 miles = 50/(111.32*Math.cos((CurrentLatitude * Math.PI)/180) * .621371)
100 miles = 100/(111.32*Math.cos((CurrentLatitude * Math.PI)/180) * .621371)
250 miles = 250/(111.32*Math.cos((CurrentLatitude * Math.PI)/180) * .621371)

*/




app.get('/api/posts', async (req, res) => {
    const db = await deps.db
    const filters =  await req.query
    if(Object.keys(filters).length !== 0){
        console.log("You got here: ", filters)
        let maxLngEast = await parseFloat(filters.lng) + (filters.radius/(111.32*Math.cos((parseFloat(filters.lat) * Math.PI)/180) * .621371))
        let maxLngWest = await parseFloat(filters.lng) - (filters.radius/(111.32*Math.cos((parseFloat(filters.lat) * Math.PI)/180) * .621371))
        let maxLatNorth = await parseFloat(filters.lat) + (filters.radius * 0.01449275)
        let maxLatSouth = await parseFloat(filters.lat) - (filters.radius * 0.01449275)
        await console.log(filters)
        const records = await db('posts')
            .select()
            .where(function(){
                if(filters.unit){
                    this.where('unit_of_rental',`${filters.unit}`)
                } else {
                    this.whereNot('unit_of_rental','none')
                }
            })
            .andWhere('longitude','>',`${filters.lng !== undefined? maxLngWest : -180}`)
            .andWhere('longitude','<',`${filters.lng !== undefined? maxLngEast : 180}`)
            .andWhere('latitude','<',`${filters.lat !== undefined? maxLatNorth : 90}`)
            .andWhere('latitude','>',`${filters.lat !== undefined? maxLatSouth : -90}`)
            .catch(err => {
                throw new Error(err)
            })
            await console.log(records)
        return res.json(records)
    } else {
        const records = await db('posts').select()
        .catch(err => {
            throw Error(err)
        })
        return res.json(records)
    }
})

app.post('/api/post', async (req,res) => {
    const db = deps.db
    const post = await db('posts')
    .insert({
        post_title: req.body.item,
        post_price: req.body.price,
        description: req.body.description,
        city_location: req.body.city_location,
        state_location: req.body.state_location,
        latitude: req.body.lat,
        longitude: req.body.lng,
        image_url: req.body.url,
        category: req.body.category,
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