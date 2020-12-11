var path = require('path')
// Require Express to run server and routes
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
// Start up an instance of app
const app = express()
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const cors = require('cors');
app.use(cors());
// Initialize the main project folder

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    // res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
// Setup Server 
app.listen(8000, function () {
    console.log('Example app listening on port 8000!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
// Setup empty JS object to act as endpoint for all routes
const projectData = {
    data: []
};

// Initialize all route with a callback function
app.get('/all', sendData)
// Callback function to complete GET '/all'
function sendData(req, res) {
    res.send(projectData)
}

app.post('/sendData', info)
function info(req, res) {
    console.log(req.body)
    // Push data
    let newData = {
         lng: req.body.lng,
         lat: req.body.lat,
         countryName: req.body.countryName
         
    }
    projectData.data.push(newData);
    console.log(projectData)
}
module.exports = app