import React, {useState, useEffect} from 'react';
import CreateReport from '../components/CreateReport';
import ViewReports from '../components/ViewReports';
import MapSelection from '../components/Map';

const User = () => {
    return(
        <div>
            <h1>User</h1>
            <ViewReports userMode={true}/>
            <MapSelection />
        </div>
    );
};

export default User;