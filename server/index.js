require("dotenv").config({ path: __dirname + "../.env" });

let cors = require("cors");
let bodyParser = require("body-parser");
let express = require("express");

let app = express();
let port = process.env.PORT || 3000;

const knexConfig = require("../knexfile");
const knex = require("knex")(knexConfig.development);
const knexLogger = require("knex-logger");

const dataHelpers = require("./data-helpers")(knex);

app.use(knexLogger(knex));

app.use(cors());
// mongoose instance connection url connection
// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost/Tododb');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require("./api/routes/playThisRoutes"); //importing route
routes(app, dataHelpers); //register the route

app.listen(port);

console.log("todo list RESTful API server started on: " + port);
