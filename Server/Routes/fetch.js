const express = require('express');
const routes = require('express').Router();
require("../db/connection");
const User = require("../models/User");

routes.get('/' , (req,res) => {
    res.send("Hello from the server");
});

module.exports = routes;