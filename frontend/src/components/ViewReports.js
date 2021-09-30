import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Report from './Report';
import { setReports, setReport, setZipcode, setPersonsFullVac, setPersonsPartVac, setPopulation, setPercentOfPopulationFullVac, setPercentOfPopulationPartVac, setDate } from '../redux/actions/reportActions';
import axios from 'axios';

const ViewReports = ({ userMode }) => {
    const dispatch = useDispatch();

    const reports = useSelector(state => state.reportReducer.reports);
    const report = useSelector(state => state.reportReducer.report);

    const zipcode = useSelector(state => state.reportReducer.zipcode);
    const personsFullVac = useSelector(state => state.reportReducer.personsFullVac);
    const personsPartVac = useSelector(state => state.reportReducer.personsPartVac);
    const population = useSelector(state => state.reportReducer.population);
    const percentOfPopulationFullVac = useSelector(state => state.reportReducer.percentOfPopulationFullVac);
    const percentOfPopulationPartVac = useSelector(state => state.reportReducer.percentOfPopulationPartVac);
    const date = useSelector(state => state.reportReducer.date);

    useEffect(() => {
        axios.get('/viewReports')
            .then((res) => {
                const newReportArray = res.data.reports;
                dispatch(setReports(newReportArray));
            })
            .catch(() => console.log("Failed to view reports"))
    }, []);

    return (
        <div>
            <h1>View Reports</h1>
            {reports.map((r, i) => (
                <Report key={i} r={r} userMode={userMode} />
            ))
            }
        </div>
    )
}

export default ViewReports;