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

var db = {
    galaxies: [],
    stars: [],
    planets: [],
    moons: [],
}

server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }))
server.use(galaxyRoutes)
server.use(starRoutes)

// // server.listen(8080, function () {
//     console.log('THE SERVER IS RUNNING ON PORT 8080')
// })

// Post to objects



   
server.post('/stars', (req, res) => {

    let star = req.body
    console.log(star)
    if (!star.galaxyId) {
        return res.send({ error: 'provide galaxy ID' })
    }
    let galaxy = db.galaxies.find(galaxy => {
        return galaxy.id == star.galaxyId
    })

    if (galaxy) {
        star.id = uuid.v1();
        db.stars.push(star);
        // also add the star id to the galaxy stars
        db.galaxies.push('star:' + star.id)
        return res.send({
            message: 'successful created star in the ' + galaxy.name + ' galaxy.',
            data: star
        })
    }
    return res.send({ error: 'this galaxyIds bad' + star.galaxyId })
})

server.post('/planet/', (req, res) => {
    let planet = req.body

    if (!planet.starId) {
        return res.send({ error: 'provide star ID' })
    }
    let star = db.stars.find(star => {
        return star.id == planet.starId
    })

    if (star) {
        planet.id = uuid.v1();
        db.planets.push(planet);
        // also add the planet id to the star
        db.stars.push('planet: '+planet.id);
        return res.send({
            message: 'successful created planet in the ' + star.name + ' galaxy.',
            data: planet
        })
    }
    return res.send({ error: 'this starId is bad' + planet.starId })
})


server.post('/moons/', (req, res) => {
    let moon = req.body

    if (moon.starId) {
        return res.send({ error: 'provide moon ID' })
    }
    let planet = db.planets.find(planet => {
        return star.id == planet.starId
    })

    if (planet) {
        planet.id = uuid.v1();
        db.planet.push(planet);
        // also add the moon id to the planet
        db.planet.push('moon: '+moon.id);
        return res.send({
            message: 'successful created moon in the ' + planet.name + '.',
            data: planet
        })
    }
    return res.send({ error: 'this starId is bad' + planet.starId })

})

// // Put (modify) to objects 

server.put('/moons/:id', (req, res) => {
    let moonId = req.params.id
    db.moons.find(moon => {
        if (moon.id == moonID) {
            db.moons.moon.name = res.data.name;
            db.moons.moon.description = res.data.description;
            return res.send({ data: noon })
        }

    });
    return res.send({ error: 'Invaid Moon ID' })
})

server.put('/planet/:id', (req, res) => {
    let planetId = req.params.id
    db.planets.find(planet => {
        if (planet.id == planetID) {
            db.planets.planet.name = res.data.name;
            db.planets.planet.description = res.data.description;
            return res.send({ data: planet })
        }

    });
    return res.send({ error: 'Invaid planet ID' })


})

server.put('/stars/:id', (req, res) => {
    let starId = req.params.id
    db.galaxies.stars.find(star => {
        if (star.id == starID) {
            db.stars.star.name = res.data.name;
            db.stars.star.description = res.data.description;
            return res.send({ data: star })
        }

    });
    return res.send({ error: 'Invaid star ID' })

})

// // Delete objects 

server.delete('/moons/:id', (req, res) => {
    let moonId = req.params.id
    db.moon.find(moon => {
        if (moon.id == moonID) {
            db.moons.moon.splice(moon.id, 1);
            return res.send({ data: moon });
        }
    });
    return res.send({ error: 'Invaid moon ID' })

})

server.delete('/planet/:id', (req, res) => {
    let planetId = req.params.id
    db.planet.find(planet => {
        if (planet.id == planetID) {
            db.planets.planet.splice(planet.id, 1);
            return res.send({ data: planet });
        }
    });
    return res.send({ error: 'Invaid planet ID' })

})

server.delete('/planet/:id', (req, res) => {
    let planetId = req.params.id
    db.planet.find(planet => {
        if (planet.id == planetID) {
            db.planets.planet.splice(planet.id, 1);
            return res.send({ data: planet });
        }
    });
    return res.send({ error: 'Invaid planet ID' })

})

server.delete('/stars/:id', (req, res) => {
    let starId = req.params.id
    db.galaxies.stars.find(star => {
        if (star.id == starID) {
            db.stars.star.splice(star.id, 1);
            return res.send({ data: star });
        }
    });
    return res.send({ error: 'Invaid star ID' })
})


// // get all info on object by ID

server.get('/moons/:id', (req, res) => {
    let moonId = req.params.id
    db.moons.find(moon => {
        return moon.id == moonId
    })
    if (moon) {
        return res.send({ data: moon })
    }
    return res.send({ error: 'Invaid Moon ID' })
})

server.get('/planet/:id', (req, res) => {
    let planetId = req.params.id
    db.planets.find(planet => {
        return planet.id == planetId
    })
    if (planet) {
        return res.send({ data: planet })
    }
    return res.send({ error: 'Invaid Planet ID' })
})

server.get('/stars/:id', (req, res) => {
    let starId = req.params.id
    db.stars.find(star => {
        return star.id == starId
    })
    if (star) {
        return res.send({ data: star })
    }
    return res.send({ error: 'Invaid ID' })
})




// //get all info on objects



server.get('/stars/', (req, res) => {
    res.send({
        data: db.stars
    })

})

server.get('/moons/', (req, res) => {
    res.send({
        data: db.moons
    })

})

server.get('/planet/', (req, res) => {
    res.send({
        data: db.planets
    })
})


