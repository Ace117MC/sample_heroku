const express = require('express')

const app = express()

const PORT = process.env.PORT || 5555

app.get('/' , (req,res) => {
    res.send('<h1>Heroku Start !!!</h1>')
})

app.listen(PORT)