let mongoose = require('mongoose')
let Schema = mongoose.Schema


let galaxySchema = new Schema({
    name: { type: String, required: true },
    description: { type: String },
    //relationships
    stars: [{ type: ObjectId, ref: 'Star'}]
  })

// check db and use Galaxy or create if not there  - use singular name since it will be converted to plural//
let GalaxyModel = mongoose.model('Galaxy', galaxySchema)

// GalaxyModel.pre('del')

module.exports = GalaxyModel