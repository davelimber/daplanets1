let express = require('express')
let bodyParser = require('body-parser')
let uuid = require('uuid')
let mongoose = require('mongoose')
let galaxyRoutes = require('./server-assets/routes/galaxy-routes')
let starRoutes = require('./server-assets/routes/star-routes')
//do not push connection string to github //
const connectionString = 'mongodb://spaceman:password12@ds056789.mlab.com:56789/spaceground';
const PORT = 8080;

let connection = mongoose.connection;

mongoose.connect(connectionString, {
    server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
    replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } }
});

connection.on('error', (err) => {
    console.log('there was a connection problem', err)
});

connection.once('open', () => {
    console.log('now connected to db')
    server.listen(8080, function () {
        console.log('server working', 'http://localhost' + PORT)
    })
})



// for testing //
// Galaxies.create({
//     name: 'AM12',
//     description: 'a cool place!'
// })

"use strict";
var express = require('express')
var bodyParser = require('body-parser')
var uuid = require('uuid')


var server = express()

// var db = {
//     galaxies: [],
//     stars: [],
//     planets: [],
//     moons: [],
// }

server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }))
server.use(galaxyRoutes)
server.use(starRoutes)










