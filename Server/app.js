const http = require('http');
const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

//connect to the database mongodb
dotenv.config({ path: './.env' });
require('./db/connection');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.listen(port, () => console.log(`Backend started on port ${port}!`));

