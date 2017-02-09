let router = require('express').Router()
let Stars = require('../models/star-model')

router.get('/all/stars', (req, res) => {
    // mongoose's find is used below //
    Stars.find().then(stars => {
        res.send(stars)
    })
})

router.get('/stars/:id', (req, res) => {
    // mongoose's find with key (_id:) is used below //
    // Stars.find({_id: req.params.id}).then(stars => {
    Stars.findbyId(req.params.id).then(stars => {
        res.send(stars)
    })
    .catch 
})

router.post('/stars/', (req, res) => {
    // mongoose's find with key (_id:) is used below //
    // Stars.find({_id: req.params.id}).then(stars => {
    Stars.create(req.body).then(stars => {
        res.send(stars)
    })
    .catch (err => )
})
router.get('/stars/galaxy/:id', (req, res) => {
    // mongoose's find is used below //
    Stars.find().then(stars => {
        res.send(stars)
    })
})

module.exports = router