const mongoose = require("mongoose")

const sampleSchema = new mongoose.Schema({
  data1: {
    type: String,
    required: true
  },
  active: {
    type: Boolean,
    required: true
  },
  data2: {
    type: String,
    required: true
  }
}, { timestamps: true })

sampleSchema.index({data1: 1}, {unique: true})

module.exports = mongoose.model("NodeData", sampleSchema)