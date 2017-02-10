let router = require('express').Router()
let Moons = require('../models/moon-model')

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

server.get('/moons/', (req, res) => {
    res.send({
        data: db.moons
    })

})

module.exports = router