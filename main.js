const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors')

 

// create express app
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

app.use(cors())
// parse application/json
app.use(bodyParser.json())
app.use(express.static('course-catalog'))
// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to app"});
});
app.use('/uploads', express.static('uploads'));
require('./app/routes/course.routes.js')(app);

// listen for requests
app.listen(4000, () => {
    console.log("Server is listening on port 4000");
});