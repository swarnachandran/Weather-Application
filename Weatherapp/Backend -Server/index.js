const express = require('express');
const app = express();
const hostname = 'localhost'
const port = 5000;
require('dotenv').config();
const cors = require('cors');
const axios = require('axios');
const bodyParser = require('body-parser');

app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.listen(port, hostname, ()=>{
    console.log(`The server is running on ${hostname}${port}`)
})

app.post('/', async (req,res) => {
    const {cityname} = req.body
    // console.log(req.body.cityname)

if (cityname.length <= 2){
    return(res.status(400).json({message: 'City name provided is incorrect!'}))
    alert('no!')
}
else{
    const weather = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${process.env.api_key}&units=metric`)
    res.send(weather.data)
    console.log(weather.data)
}
})
