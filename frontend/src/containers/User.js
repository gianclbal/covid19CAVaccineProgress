import React, {useState, useEffect} from 'react';
import CreateReport from '../components/CreateReport';
import ViewReports from '../components/ViewReports';
import MapWithAKmlLayer from '../components/Map';

const User = () => {
    return(
        <div>
            <h1>User</h1>
            <ViewReports userMode={true}/>
            <MapWithAKmlLayer />
        </div>
    );
};

export default User;