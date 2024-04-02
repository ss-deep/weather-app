const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path')
const { default: axios } = require('axios')

app.use(express.json())
app.use(cors())
const api='https://api.openweathermap.org/data/2.5/weather?q='
const appid = '191217c6a57a66a4e9fc63731c965a2b'

// app.use(express.static(`${__dirname}/public`))
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'))
})

app.post('/city', (req, res) => {
    try {
        const { name } = req.body
        
        res.status(200).send(name);
      } catch (error) {
        console.error("ERROR GETTING DATA", error);
        res.sendStatus(400);
      }
})
// app.post(`${api}${city}&appid=${appid}`, (req,res) => {
//     console.log(res.data);
// })
//leander&appid=191217c6a57a66a4e9fc63731c965a2b

app.listen(5501,()=>console.log('Up on port 5501'))