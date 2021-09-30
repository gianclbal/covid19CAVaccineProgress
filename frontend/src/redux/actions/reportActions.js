export const setReports = reports => ({
    type: 'REPORT_SET_REPORTS',
    reports,
});

export const setReport = report => ({
    type: 'REPORT_SET_REPORT',
    report,
});

export const setZipcode = zipcode => ({
    type: 'REPORT_SET_ZIPCODE',
    zipcode,
});

export const setPersonsFullVac = personsFullVac => ({
    type: 'REPORT_SET_PERSONSFULLVAC',
    personsFullVac,
});

export const setPersonsPartVac = personsPartVac => ({
    type: 'REPORT_SET_PERSONSPARTVAC',
    personsPartVac,
});

export const setPopulation = population => ({
    type: 'REPORT_SET_POPULATION',
    population,
});

export const setPercentOfPopulationFullVac = percentOfPopulationFullVac => ({
    type: 'REPORT_SET_PERCENTOFPOPULATIONFULLVAC',
    percentOfPopulationFullVac,
});

export const setPercentOfPopulationPartVac = percentOfPopulationPartVac => ({
    type: 'REPORT_SET_PERCENTOFPOPULATIONPARTVAC',
    percentOfPopulationPartVac,
});


export const setDate = date => ({
    type: 'REPORT_SET_DATE',
    date,
});

