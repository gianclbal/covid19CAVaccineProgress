import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import {setReports, setReport, setZipcode, setPersonsFullVac, setPersonsPartVac, setPopulation, setPercentOfPopulationFullVac, setPercentOfPopulationPartVac,setDate } from '../redux/actions/reportActions';

const CreateReport = () => {
    const dispatch = useDispatch();

    const reports = useSelector(state => state.reportReducer.reports);
    // const report = useSelector(state => state.reportReducer.report);

    const zipcode = useSelector(state => state.reportReducer.zipcode);
    const personsFullVac = useSelector(state => state.reportReducer.personsFullVac);
    const personsPartVac = useSelector(state => state.reportReducer.personsPartVac);
    const population = useSelector(state => state.reportReducer.population);
    const percentOfPopulationFullVac = useSelector(state => state.reportReducer.percentOfPopulationFullVac);
    const percentOfPopulationPartVac = useSelector(state => state.reportReducer.percentOfPopulationPartVac);
    const date = useSelector(state => state.reportReducer.date);


    const handleSave = (e) => {
        e.preventDefault()
        dispatch(setPercentOfPopulationFullVac((personsFullVac/population) * 100));
        dispatch(setPercentOfPopulationPartVac((personsPartVac/population) * 100));

        dispatch(setDate(Date.now));

        const report = {
            zipcode,
            personsFullVac,
            personsPartVac,
            population,
            percentOfPopulationFullVac,
            percentOfPopulationPartVac,
            date,
        }

        axios.post('/createVaccineReport', report)
            .then((res) => {
                console.log(res);
                const newReportArray = res.data.reports;
                dispatch(setReports(newReportArray));
            })
            .catch((e) => "Failed to make a vaccine report." + e);

        axios.get('/viewReports')
            .then((res) => {
                const newReportArray = res.data.reports;
                dispatch(setReports(newReportArray));
            })
            .catch(() => console.log("Failed to view reports"))
    }

    return (
        <div className="create-report-form">
            <h2>Create a report</h2>
            <label>Zipcode </label>
            <input
                name="zipcode"
                type="text"
                value={zipcode}
                onChange={(e) => dispatch(setZipcode(e.target.value))}
            />
            <label>Persons Fully Vaccinated </label>
            <input
                name="personsFullVac"
                type="text"
                value={personsFullVac}
                onChange={(e) => dispatch(setPersonsFullVac(e.target.value))}
            />
            <label>Persons Partially Vaccinated </label>
            <input
                name="personsPartVac"
                type="text"
                value={personsPartVac}
                onChange={(e) => dispatch(setPersonsPartVac(e.target.value))}
            />
            <label>Population </label>
            <input
                name="population"
                type="text"
                value={population}
                onChange={(e) => dispatch(setPopulation(e.target.value))}
            />

            <button type="submit" onClick={e => handleSave(e)} >Submit Report</button>
        </div>
    )
}

export default CreateReport;