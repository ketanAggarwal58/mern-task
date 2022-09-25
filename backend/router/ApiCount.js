const router = require("express").Router();

const start = new Date();


const stop = new Date();

console.log('Time Taken to execute = ${(stop - start)/1000} seconds');


module.exports = router;