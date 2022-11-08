const express = require('express')

const app = express()

const port = process.env.PORT || 3000

const start = async () => {
  try {
    app.listen(port, console.log(`server is running on port: ${port}...`))
  } catch (error) {
    console.log(error)
  }
}
start()
