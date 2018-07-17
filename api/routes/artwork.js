const express = require('express')
const router = express.Router()
const Artwork = require('../models/artwork')

// router.get('/artwork', (req, resp) => {
//     Get all artworks out of the database
//     let count = req.session.count || 1
//     console.log(`count=${count}`)
//     req.session.count = (count + 1)
//     Movie.find({}).populate('director').then(movies => {
//         resp.json(movies)
//     })
// })

// This shows an individual artwork with ALL INFO price, description, artist name. 
//EG this route will be used for PRODUCT PAGE and  And for GALLERY SHOP (in CARDS the Buy NOW button OnClick goto artwork id of this artwork)
router.get('/artwork/:id', (req, resp) => {
    const id = req.params.id
    Artwork.findById(id).then(artwork => {
        resp.json(artwork)
    })
})

//  Need component for  GALLERY SHOP that displays image, title, artist
// router.get('/artwork/:id', (req, resp) => {
//     const id = req.params.id.title.image
//     Artwork.findById(id).then(artwork => {
//         resp.json(artwork)
//     })
// })

// Need component for SLIDER that displays the artwork by id as images ONLY.

// Need component for LANDING PAGE that displays the artwork as images ONLY in gridwork display in VIRTUAL GALLERY



// Creates an instance of an artwork  New artwork with all the params of artwork.
router.post('/artwork', (req, resp) => {
    const artwork = req.body
    Artwork.create(artwork).then(artwork => {
        resp.json(artwork)
    })
})

module.exports = router