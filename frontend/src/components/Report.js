import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setReports, setReport, setZipcode, setPersonsFullVac, setPersonsPartVac, setPopulation, setPercentOfPopulationFullVac, setPercentOfPopulationPartVac, setDate } from '../redux/actions/reportActions';

const Report = (props) => {
    const dispatch = useDispatch();

    const reports = useSelector(state => state.reportReducer.reports);

    return (
        <div>
            <table className="vaccinationReportsTable">
                <tbody>
                    <tr>
                        <td>Zipcode</td>
                        <td>{props.r.zipcode}</td>
                    </tr>
                    <tr>
                        <td>Persons Fully Vaccinated</td>
                        <td>{props.r.personsFullVac}</td>
                    </tr>
                    <tr>
                        <td>Persons Partially Vaccinated</td>
                        <td>{props.r.personsPartVac}</td>
                    </tr>
                    <tr>
                        <td>Percent of Population Fully Vaccinated</td>
                        <td>{props.r.percentOfPopulationFullVac}</td>
                    </tr>
                    <tr>
                        <td>Percent of Population Partially Vaccinated</td>
                        <td>{props.r.percentOfPopulationPartVac}</td>
                    </tr>
                    <tr>
                        <td>Population</td>
                        <td>{props.r.population}</td>
                    </tr>

                </tbody>
            </table>
        </div>
    );
};

export default Report;