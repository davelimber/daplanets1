let express = require('express')
let router = express.Router()
let Galaxies = require('../models/galaxy-model')
let Stars = require('../models/star-model')

router.post('/galaxies', (req, res) => {
    let newGalaxy = req.body;

    console.log(newGalaxy.description)

    if (!newGalaxy.name || !newGalaxy.description) {
        return res.send('Sorry you must provide valid data')
    }

    Galaxies.create(newGalaxy)
        .then(galaxy => {
            console.log('in then state')
            res.send({
                message: 'successful creation of galaxy',
                data: galaxy
            })
        })
        .catch(error => {
            console.log('in error state')
            res.send({
                error: error
            })
        })
    // res.send({ message: 'success', data: newGalaxy })
});

router.get('/galaxies/:id', (req, res) => {
    let galaxyId = req.params.id
    Galaxies.find(galaxy => {
        return galaxy.id == galaxyId
    })
    if (galaxy) {
        return res.send({ data: galaxy })
    } return res.send({ error: 'Invaid ID' })

})

router.get('/galaxies', (req, res) => {

    res.send({
        data: Galaxies
    })
})

router.get('/galaxies/:galaxyId/stars/:starId?', (req, res) => {
    if (req.params.starId) {
        // do this later
    }

    Stars.find({ galaxyId: req.params.galaxyId })
        .then(stars => {
            res.send({
                data: stars
            })
        })
        .catch(err => {
            res.send({
                error: err
            })
        })
})


module.exports = router

