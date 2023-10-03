const express = require('express')
const bodyParser = require('body-parser')

const userRoutes = require('./Routes/users.js')
const app = express()
const PORT = 5000

app.use(bodyParser.json())

app.use('/users', userRoutes)

app.get('/', (req, res) => {
    res.send("Hello World")
})




app.listen(PORT, () => console.log(`Server listening on port ${PORT}!`))