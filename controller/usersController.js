const User = require('../models/User')

const registerUser = async (req, res) => {
  try {
    // console.log(req.body)
    const user = await User.create(req.body)
    const token = user.creatjwt()
    res.status(200).json({ msg: 'user added successfully', user, token })
  } catch (error) {
    console.log(error)
  }
}

const logIn = async (req, res) => {
  try {
    const { phone, password } = req.body
    // console.log(phone, password)
    if (!phone || !password) {
      return res.send('please provide email or password')
    }
    const user = await User.findOne({ phone })
    if (!user) {
      return res.send('invalid credential')
    }
    const isPasswordCorrect = await user.comparePassword(password)
    if (!isPasswordCorrect) {
      return res.send('invalid credential')
    }
    const token = user.creatjwt()
    res.status(200).json({ msg: 'successfully login', user, token })
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  registerUser,
  logIn,
}
