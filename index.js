// import express to use express
const express = require('express');
// assign the express instance to app variable
const app = express();
// select the port to connect to
const port = 8000;
// setting up the view engine
app.set('view engine', 'ejs');
app.set('views', './views')


// import routes from routes/index.js
const router = require('./routes');
// use express router 
app.use('/', router)

// now listen on port by .listen() method
app.listen(port, function (err) {
    if (err) {
        console.log(`Error while running the server :  ${err.message}`);
        return
    }
    console.log(`Server running on port :  ${port}`);
})