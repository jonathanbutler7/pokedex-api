const express = require('express')
const morgan = require('morgan')

const app = express()

app.use(morgan('dev'))

app.use((req,res) => {
    res.send("Hello world")
})

const PORT = 5000

app.listen(PORT, () => {
    console.log(`yada yada ${PORT}`)
})