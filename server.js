const app = require('express')()

const PORT = process.env.PORT || 5555

app.use('/' , express.static(__dirname + '/public'))

app.get('/' , (req,res) => {
    res.send('<h1>Heroku Start !!!</h1>')
})

app.post('/search' , async (req,res) => {
    res.redirect(`www.google.com/search?q=`+req.body.search)
})




app.listen(PORT)