import React, { useState } from 'react';
import CustomersTable from './CustomersTable';
import LeadsTable from './LeadsTable';
import ProjectsTable from './ProjectsTable';
import CalendarPage from './calendar'; 
import ApplicationPage from './ApplicationPage'; // Import ApplicationPage

const Dashboard = ({ selectedItem }) => {
  const [hideHeading, setHideHeading] = useState(false);

  return (
    <div className="dashboard">
      {!hideHeading}  {/* Hide heading when inside an app */}
      <div className="content" style={{ width: "100%", height: "100%" }}>
        {selectedItem === "Customer" && <CustomersTable />}
        {selectedItem === "Leads" && <LeadsTable />}
        {selectedItem === "Project" && <ProjectsTable />}
        {selectedItem === "Calendar" && <CalendarPage />}
        {selectedItem === "Application" && <ApplicationPage hideDashboardHeading={setHideHeading} />}
      </div>
    </div>
  );
};

export default Dashboard;
