const express = require('express');
const app = express();
const cors = require("cors");
require("dotenv").config({path: "./config.env"})
const port = process.env.PORT || 3004;


//middleware
app.use(require("./routes/record"));
app.use(cors());
app.use(express.json());
const request = require('request');

const dbo = require("./db/conn");

app.listen(port, () => {
    // perform a database connection when server starts
    dbo.connectToServer((err) => {
      if (err) console.error(err);
   
    });
    console.log(`Server is running on port: ${port}`);
  });