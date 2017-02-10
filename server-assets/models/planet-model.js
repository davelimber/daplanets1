let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId

let schema = new Schema({
    name: { type: String, required: true },
    description: { type: String },
    PlanetId: {type: ObjectId, ref: 'Star', required: true}
    // Relationships

    
})




module.exports = mongoose.model('Planet', schema)