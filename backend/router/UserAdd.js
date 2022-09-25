const router = require("express").Router();
const User = require("../model/user");

/*
*
* On Local Machine the time of Execution of the API was - 0.014 Seconds
* Database Used is - MongoDB
* The System used was Apple Macbook Air M1 2021 Model.
*
*/

// API Type - Post
// Status Code - 201
// URL Endpoint - http://localhost:8000/add
// Created By - @ketanAggarwal58
router.post('/add', async (req, res) => {
    const start = new Date();

    const user = new User({
        FirstName: req.body.FirstName,
        LastName: req.body.LastName,
        email: req.body.email,
        phoneNo: req.body.phoneNo
    });
    try {
        const savedUser = await user.save();
        res.status(201).json(savedUser);
    } catch (error) {
        res.status(400).send('error: ' + error);
    }

    const stop = new Date();

    console.log(`Time Taken to execute = ${(stop - start)/1000} seconds`);
});

module.exports = router;