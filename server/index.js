
let cors = require('cors')
let bodyParser = require('body-parser');
let express = require('express');
var cookieSession = require('cookie-session')

let app = express();
let port = process.env.PORT || 3000;

const knexConfig  = require("../knexfile");
const knex        = require("knex")(knexConfig.development);
const knexLogger  = require("knex-logger");

const dataHelpers = require("./data-helpers")(knex)

app.use(knexLogger(knex));

app.use(cookieSession({
    name: 'session',
    keys: ['key1', 'key2', 'key3'],
    // Cookie Options
    // Session length is 2 hours
    cookie: {
        secure: false,
        httpOnly: false
    },
    maxAge: 24 * 60 * 60 * 1000
  }));

app.use(cors())
// mongoose instance connection url connection
// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost/Tododb'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/playThisRoutes'); //importing route
routes(app, dataHelpers); //register the route


app.listen(port);


console.log('todo list RESTful API server started on: ' + port);



let state = {
    userForms: {
        name: null,
        url: null
    }
}