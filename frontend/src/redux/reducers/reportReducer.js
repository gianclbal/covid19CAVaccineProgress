const INITIAL_STATE = {
    reports: [],
    report: {},
    zipcode: '',
    personsFullVac: 0,
    personsPartVac: 0,
    population: 0,
    percentOfPopulationFullVac: 0.0,
    percentOfPopulationPartVac: 0.0,
    date: 'YYYY-MM-DD',
}

const reportReducer = (state = INITIAL_STATE, action) => {
    switch (action.type){
        case 'REPORT_SET_REPORTS':
            return{
                ...state,
                reports: action.reports,
            }
        case 'REPORT_SET_REPORT':
            return{
                ...state,
                report: action.report,
            }
        case 'REPORT_SET_ZIPCODE':
            return {
                ...state,
                zipcode: action.zipcode,
            }
        case 'REPORT_SET_PERSONSFULLVAC':
            return {
                ...state,
                personsFullVac: action.personsFullVac,
            }
        case 'REPORT_SET_PERSONSPARTVAC':
            return {
                ...state,
                personsPartVac: action.personsPartVac,
            }
        case 'REPORT_SET_POPULATION':
            return {
                ...state,
                population: action.population,
            }
        case 'REPORT_SET_PERCENTOFPOPULATIONFULLVAC':
            return {
                ...state,
                percentOfPopulationFullVac: action.percentOfPopulationFullVac,
            }
        case 'REPORT_SET_PERCENTOFPOPULATIONPARTVAC':
            return{
                ...state,
                percentOfPopulationPartVac: action.percentOfPopulationPartVac
            }
        case 'REPORT_SET_DATE':
            return{
                ...state,
                date: action.date,
            }
        default:
            return state;
    }
};

export default reportReducer;