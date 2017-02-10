let express = require('express')
let router = express.Router()
let Galaxies = require('../models/galaxy-model')
let Stars = require('../models/star-model')

router.post('/galaxies', (req, res) => {
    let newGalaxy = req.body;

    // console.log(newGalaxy.description)

    // if (!newGalaxy.name || !newGalaxy.description) {
    //     return res.send('Sorry you must provide valid data')
    // }

    Galaxies.create(newGalaxy)
        .then(galaxy => {
            // console.log('in then state')
            res.send({
                message: 'successful creation of new galaxy',
                data: galaxy
            })
        })
        .catch(error => {
            // console.log('in error state')
            res.send({
                error: error
            })
        })
});

router.get('/galaxies/:id', (req, res) => {
    Galaxies.findById(req.params.id)
        .then(galaxy => {
            res.send({ data: galaxy })
        })
        .catch(err => {
            res.send({
                error: err
            })
        })

})

router.get('/galaxies', (req, res) => {
    Galaxies.find()
        .then(galaxy => {
            res.send({
                data: galaxy
            })
                .catch(err => {
                    res.send({
                        error: err
                    })
                })
        })
})

router.get('/galaxies/:galaxyId/stars/:starId?', (req, res) => {
    if (req.params.starId) {
        Stars.find({ starId: req.params.starId })
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

