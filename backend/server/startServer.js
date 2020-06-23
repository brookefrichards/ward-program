'use strict';

const getServerApp = require('./getServerApp');
const app = getServerApp();
const port = 3000;

function functionToRunWhenServerStarts() {
    console.log(`Ward Program Web App Listening on port ${port}`);
}

app.listen(port, functionToRunWhenServerStarts);
