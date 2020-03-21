const express = require('express');
const app = express();

// middleware
function logger(req, res, next) {
    console.log('I am logger');
    next(); // for next processing
}

function logger2(req, res, next) {
    console.log('I am logger2');
    next(); // for next processing
}

// Add middleware
app.use(logger);
app.use(logger2)

app.listen(3000, () => {
    console.log('Server is running');
})
