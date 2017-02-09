let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId

let schema = new Schema({
    name: { type: String, required: true },
    description: { type: String },
    galaxyId: {type: ObjectId, ref: 'Galaxy', required: true}
    // Relationships

    
})

module.exports = 