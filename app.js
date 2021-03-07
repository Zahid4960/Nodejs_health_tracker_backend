const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const { sequelize } = require('./models')

// routes
const authRoute = require('./routes/authRoute')


app.use(express.json())
app.use(bodyParser.json())


app.use('/', authRoute)


app.listen({ port: 5000}, async (req, res) => { 
    try {
        console.log('server is running on localhost:5000')
        await sequelize.authenticate()
        console.log('Database contected!!')
    } catch (error) {
        console.log(error)
    }
})