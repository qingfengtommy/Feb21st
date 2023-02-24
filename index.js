const express = require('express')
const app = express()
const axios = require('axios')

app.set('view engine', 'ejs')
app.set('views', './views')

app.get('/', function (req, res) {
    res.render('home')
})

app.get('/characters', async (req, res) => {
    try {
        const response = await axios.get("https://swapi.dev/api/people")
        res.render('characters', { characters: response.data })
    }
    catch (error) {
        console.log(error)
    }
}
)

app.listen(3000, () => {
    console.log("listening on port 3000")
})