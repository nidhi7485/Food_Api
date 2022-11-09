const express = require('express')
const router = express.Router()

const { registerUser, logIn } = require('../controller/usersController')
const {
  addOrder,
  orderDetails,
  createOrder,
} = require('../controller/orderController')
router.route('/add-user').post(registerUser)
router.route('/login-user').post(logIn)
router.route('/add-order/:id').post(addOrder)
router.route('/add-product').post(createOrder)
router.route('/get-order').post(orderDetails)
module.exports = router
