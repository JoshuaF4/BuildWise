import React from 'react';
import CustomersTable from './CustomersTable';
import LeadsTable from './LeadsTable';
import ProjectsTable from './ProjectsTable';
import CalendarPage from './calendar'; 
import ApplicationPage from './ApplicationPage'; // Import ApplicationPage

const Dashboard = ({ selectedItem }) => {
  return (
    <div className="dashboard">
      <h1>{selectedItem}</h1>
      <div className="content">
        {selectedItem === 'Customer' && <CustomersTable />}
        {selectedItem === 'Leads' && <LeadsTable />}
        {selectedItem === 'Project' && <ProjectsTable />}
        {selectedItem === 'Calendar' && <CalendarPage />}
        {selectedItem === 'Application' && <ApplicationPage />} {/* Add ApplicationPage */}
      </div>
    </div>
  );
};

export default Dashboard;
