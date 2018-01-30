const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const app = express();
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');

//auth0

// API file for interacting with MongoDB



const user = require('./server/routes/user_route');
const question = require('./server/routes/question_route');
const discussion = require('./server/routes/discussion_route');
const tutorial = require('./server/routes/tutorial_route')






// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

// Angular DIST output folder
app.use(express.static(path.join(__dirname, 'dist')));

// API location
app.use('/user', user);
app.use('/question', question);
app.use('/discussion',discussion);
app.use('/tutorial',tutorial)





// Send all other requests to the Angular app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

//Set Port
const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`Running on localhost:${port}`));