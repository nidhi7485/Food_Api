const express = require('express')
const router = express.Router()

const { registerUser, logIn } = require('../controller/usersController')

router.route('/add-user').post(registerUser)
router.route('/login-user').post(logIn)

module.exports = router
