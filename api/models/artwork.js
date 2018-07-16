const { Schema, mongoose } = require('./db')
const User = require('./user')

const ArtworkSchema = Schema({ //Artwork schema
    title: String,
    image: Text,
    description: Text,
    price: Number,
    catagory: String, 
    artist: { // The db will auto add an artist _id 
        type: Schema.Types.ObjectId,
        ref: 'User'
    } 
})

const Artwork = mongoose.model('Artwork', ArtworkSchema)

module.exports = Artwork