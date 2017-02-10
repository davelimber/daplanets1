let router = require('express').Router()
let Planets = require('../models/planet-model')

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

server.get('/planet/', (req, res) => {
    res.send({
        data: db.planets
    })
})




module.exports = router