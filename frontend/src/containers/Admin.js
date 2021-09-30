import React, {useState, useEffect} from 'react';
import CreateReport from '../components/CreateReport';
import ViewReports from '../components/ViewReports';

const Admin = () => {
    return(
        <div>
            <h1>Admin</h1>
            <CreateReport />
            <ViewReports userMode={false}/>
        </div>
    );
};

export default Admin;