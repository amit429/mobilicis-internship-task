const express = require("express");
const routes = require("express").Router();
require("../db/connection");
const User = require("../models/User");

routes.get("/", (req, res) => {
  res.send("Hello from the server");
});

//route to get all the users
routes.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (err) {
    res.send("Error " + err);
  }
});

// route for Users which have income lower than $5 USD and have a car of brand “BMW” or “Mercedes”.
routes.get("/users/income", async (req, res) => {
  try {
    const users = await User.aggregate([
      {
        $addFields: {
          income: {
            $toDouble: { $substr: ["$income", 1, -1] }, // convert income to number
          },
        },
      },
      {
        $match: {
          income: { $lt: 5 },
          car: { $in: ["BMW", "Mercedes-Benz"] },
        },
      },
    ]);

    res.send(users);
  } catch (err) {
    res.send("Error " + err);
  }
});

// route for Male Users which have phone price greater than 10,000.
routes.get("/users/phone-price", async (req, res) => {
  try {
    const users = await User.aggregate([
      {
        $match: {
          phone_price: { $regex: /\d+/ }, // match phone_price that contains digits
          gender: "Male",
          $expr: { $gt: [{ $toInt: "$phone_price" }, 10000] }, // convert phone_price to number and filter by greater than 10000
        },
      },
      { $sort: { phone_price: -1 } },
      // { $skip: (req.params.skip-1)*10 },
      // { $limit: 30 },
    ]);

    res.send(users);
  } catch (err) {
    res.send("Error " + err);
  }
});


//. Users whose last name starts with “M” and has a quote character length greater than 15 and email includes his/her last name.
routes.get("/users/lastname", async (req, res) => {
  try {
    const users = await User.aggregate([
      {
        $match: {
          last_name: { $exists: true },
          quote: { $exists: true, $type: "string" },
        },
      },
      {
        $addFields: {
          quoteLength: { $strLenBytes: "$quote" },
        },
      },
      {
        $match: {
          last_name: { $regex: /^M/i },
          email: { $regex: /M/i },
          quoteLength: { $gt: 15 },
        },
      },
      { $sort: { last_name: 1, first_name: 1 } },
    ]);
    res.send(users);
  } catch (err) {
    res.send("Error " + err);
  }
});

//Users which have a car of brand “BMW”, “Mercedes” or “Audi” and whose email does not include any digit.
routes.get("/users/car", async (req, res) => {
  try {
    const users = await User.find({
      $and: [
        { car: { $in: ["BMW", "Mercedes-Benz", "Audi"] } },
        { email: { $not: /\d/ } },
      ],
    });
    res.send(users);
  } catch (err) {
    res.send("Error " + err);
  }
});

//Show the data of top 10 cities which have the highest number of users and their average income.
routes.get("/users/city", async (req, res) => {
  try {
    const results = await User.aggregate([
      {
        $group: {
          _id: "$city",
          count: { $sum: 1 },
          totalIncome: { $sum: { $toDouble: { $substr: ["$income", 1, -1] } } },
        },
      },
      { $sort: { count: -1 } },
      
      { $limit: 10 },
    ]);

    res.send(results);
  } catch (err) {
    res.send("Error " + err);
  }
});

module.exports = routes;
