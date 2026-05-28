const express = require('express');
const app = express();
const appointmentsController = require("./controllers/appointmentsController")

const port = 3000;

app.get ('/', (req,res)=> {

    const data = {
                              

    "coord": {
      "lon": 10.99,
      "lat": 44.34
    },
    "weather": [
      {
        "id": 501,
        "main": "Rain",
        "description": "moderate rain",
        "icon": "10d"
      }
    ],
    "base": "stations",
    "main": {
      "temp": 298.48,
      "feels_like": 298.74,
      "temp_min": 297.56,
      "temp_max": 300.05,
      "pressure": 1015,
      "humidity": 64,
      "sea_level": 1015,
      "grnd_level": 933
    },
    "visibility": 10000,
    "wind": {
      "speed": 0.62,
      "deg": 349,
      "gust": 1.18
    },
    "rain": {
      "1h": 3.16
    },
    "clouds": {
      "all": 100
    },
    "dt": 1661870592,
    "sys": {
      "type": 2,
      "id": 2075663,
      "country": "IT",
      "sunrise": 1661834187,
      "sunset": 1661882248
    },
    "timezone": 7200,
    "id": 3163858,
    "name": "Zocca",
    "cod": 200
                         
                          
    }

    res.json(data)
})

app.get ('/', (req,res)=> {

  const data = homeController.getUsers();

  res.json(data);
})

app.get ('/appointments', (req,res)=> {

  
  const appointmentData = appointmentsController.getAppointments();

  res.json(appointmentData);
})

app.get ('/about', (req,res)=> {
    res.json('This is the about page Transition school 2024 programs')
})

app.get ('/contact', (req,res)=> {
    res.send('Contact us via mosespac2015@gmail.com')
})

app.get ('/api', (req,res)=> {
    res.send('This is the first version')
})

app.get ('/api/v1', (req,res)=> {
    res.send('This is version 1.0')
})

app.listen(port, () => {
    console.log('appointment boking app is listening on port' + port);
});

