const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
const { default: axios } = require('axios')
const {API_KEY, SERVER_PORT}=process.env

app.use(express.json())
app.use(cors())
const api='https://api.openweathermap.org/data/2.5/weather?units=metric'


app.use(express.static(`${__dirname}/public`))
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, '/index.html'))
// })

app.post('/', async (req, res) => {
    try {
        const { name } = req.body
        const cityData = await axios.get(`${api}&q=${name}&appid=${API_KEY}`)
        res.status(200).send(cityData.data);
      } catch (error) {
        console.error("ERROR GETTING DATA", error);
        res.sendStatus(400);
      }
})

app.listen(SERVER_PORT,()=>console.log(`up on ${SERVER_PORT}`))