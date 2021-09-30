const express = require('express');
const app = express();
//middleware
app.use(express.json());


const port = 3004;

let reports = [];

app.get("/", (req, res) => {

    console.log("Hello world");
    res.status(200).json({
        success: true,
        reports: reports,
        statusCode: 200
    })


});

app.post('/createVaccineReport', (req, res) => {

    const newReport = req.body;
    newReport.id = reports.length + 00000000;
    reports.push(newReport);

    res.status(200).json({
        success: true,
        reports: reports,
        statusCode: 200
    });
})

app.get('/viewReports', (req, res) => {
    res.status(200).json({
        success: true,
        reports: reports,
        statusCode: 200
    })
})

app.listen(port, () => console.log(`Gateway on port ${port}!`))