const express = require('express');
const app = express();
//middleware
app.use(express.json());
const request = require('request');


const port = 3004;

let reports = [];


// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     next();
// });

// app.get('/user', (req, res) => {
//     request(
//         { url: 'https://github.com/gianclbal/covid19CAVaccineProgress/blob/main/frontend/src/assets/cartoboundary/californiaCountyData.geojson' },
//         (error, response, body) => {
//             if (error || response.statusCode !== 200) {
//                 return res.status(500).json({ type: 'error', message: err.message });
//             }

//             res.json(JSON.parse(body));
//         }
//     )
// });



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