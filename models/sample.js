const mongoose = require("mongoose")

const sampleSchema = new mongoose.Schema({
  temp: {
    type: Number,
    required: true
  },
  humidity: {
    type: Number,
    required: true
  },
  co: {
    type: Number,
    required: true
  },
  triggers: {
    type: Boolean,
    default: false
  }

}, { timestamps: false })

// sampleSchema.index({data1: 1}, {unique: true})

module.exports = mongoose.model("fdas", sampleSchema)