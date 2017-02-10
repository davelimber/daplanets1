let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId

let schema = new Schema({
    name: { type: String, required: true },
    description: { type: String },
    MoonId: {type: ObjectId, ref: 'Planet', required: true}
    // Relationships

    
})



module.exports = mongoose.model('Moon', schema)