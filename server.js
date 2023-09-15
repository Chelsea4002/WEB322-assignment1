/********************************************************************************* 
* WEB322 – Assignment 1
* I declare that this assignment is my own work in accordance with Seneca Academic Policy.
* No part of this assignment has been copied manually or electronically from any other source
* (including web sites) or distributed to other students.
*
* Name: Hyerang Cho        Student ID: 165832221       Date: September 15, 2023
*
* Online (Cyclic) URL: 
*
********************************************************************************/

const express = require('express'); // "require" the Express module
const app = express(); // obtain the "app" object
const HTTP_PORT = process.env.PORT || 8080; // assign a port

app.get('/', (req, res) => {
    res.send('Hello World!');
  });

// start the server on the port and output a confirmation ot the console
app.listen(HTTP_PORT, () => console.log(`server listening on: ${HTTP_PORT}`));