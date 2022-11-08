const registerUser = async (req, res) => {
  try {
    res.status(200).json({ msg: 'register' })
  } catch (error) {
    console.log(error)
  }
}

const logIn = async (req, res) => {
  try {
    res.status(200).json({ msg: 'successfully signin' })
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  registerUser,
  logIn,
}
