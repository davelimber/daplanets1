let router = require('express').Router()
let Stars = require('../models/star-model')

router.get('/stars', (req, res) => {
    // mongoose's find is used below //
    Stars.find().then(stars => {
        res.send(stars)
    })
})

router.get('/stars/:id', (req, res) => {
    // mongoose's find with key (_id:) is used below //
    // Stars.find({_id: req.params.id}).then(stars => {
    Stars.findbyId(req.params.id)
        .then(stars => {
            res.send({ data: stars })
        })
        .catch(err => {
            res.send({ error: err })
        })
})

router.post('/stars', (req, res) => {
    // mongoose's find with key (_id:) is used below //
    // Stars.find({_id: req.params.id}).then(stars => {
    Stars.create(req.body).then(stars => {
        res.send(stars)
    })
        .catch(err => {
            res.send({ error: err })
        })
})




server.put('/stars/:id', (req, res) => {
    Stars.findbyId(req.params.id)
        .then(stars => {
            if ()
            res.send({ data: stars })
        })
        .catch(err => {
            res.send({ error: err })
        })
    
  })  
    // let starId = req.params.id
    // db.galaxies.stars.find(star => {
    //     if (star.id == starID) {
    //         db.stars.star.name = res.data.name;
    //         db.stars.star.description = res.data.description;
    //         return res.send({ data: star })
    //     }

    // });
    // return res.send({ error: 'Invaid star ID' })



server.delete('/stars/:id', (req, res) => {
    let starId = req.params.id
    db.galaxies.stars.find(star => {
        if (star.id == starID) {
            db.stars.star.splice(star.id, 1);
            return res.send({ data: star });
        }
    });

})




module.exports = router