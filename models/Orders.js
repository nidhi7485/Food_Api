const mongoose = require('mongoose')

const OrderSchema = new mongoose.Schema({
  orderName: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: [true],
  },
})

module.exports = mongoose.model('Order', OrderSchema)
