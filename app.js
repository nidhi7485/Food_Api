const express = require('express')

require('dotenv').config()
const app = express()

const port = process.env.PORT || 3000

// db
const connectDB = require('./db/connect')

// router
const foodApiRouter = require('./routes/foodApiRoute')

// middleware
app.use(express.json())
app.use(express.urlencoded())
app.use(express.static('./public'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/landingPage.html')
})
app.get('/registration', (req, res) => {
  res.sendFile(__dirname + '/public/register.html')
})
app.use('/', foodApiRouter)

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, console.log(`server is running on port: ${port}...`))
  } catch (error) {
    console.log(error)
  }
}
start()
