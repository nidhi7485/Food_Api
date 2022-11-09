const User = require('../models/User')
const Orders = require('../models/Orders')

const createOrder = async (req, res) => {
  const order = await Orders.create(req.body)
  res.json({ order })
}

const addOrder = async (req, res) => {
  const { id: userId } = req.params
  const userDetails = await User.find({ _id: userId })
  console.log(userDetails)
  res.send('order added')
}

const orderDetails = async (req, res) => {
  res.send('order details')
}
const getCurrentOrders = async (req, res) => {
  const orders = await Orders.find({ user: req.user.userId })
  res.json({ orders, count: orders.length })
}

module.exports = {
  addOrder,
  orderDetails,
  createOrder,
}
