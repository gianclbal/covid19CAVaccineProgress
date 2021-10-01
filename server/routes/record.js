const express = require("express");

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const router = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;


// This section will help you get a list of all the records.
router.get("/reports", (req, res) => {
    let db_connect = dbo.getDb("reports");
    db_connect
        .collection("reports")
        .find({})
        .toArray((err, result) => {
            if (err) throw err;
            res.json(result);
        });
});

router.post("/reports/add", (req, response) => {
    let db_connect = dbo.getDb();
    let newreport = req.body;
    db_connect.collection("reports").insertOne(newreport, (err, res) => {
        if (err) throw err;
        response.json(res);
    })
});


// app.get("/", (req, res) => {

//     console.log("Hello world");
//     res.status(200).json({
//         success: true,
//         reports: reports,
//         statusCode: 200
//     })


// });

// app.post('/createVaccineReport', (req, res) => {

//     const newReport = req.body;
//     newReport.id = reports.length + 00000000;
//     reports.push(newReport);

//     res.status(200).json({
//         success: true,
//         reports: reports,
//         statusCode: 200
//     });
// })

// app.get('/viewReports', (req, res) => {
//     res.status(200).json({
//         success: true,
//         reports: reports,
//         statusCode: 200
//     })
// })

module.exports = router;