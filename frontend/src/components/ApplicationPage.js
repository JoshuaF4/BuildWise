import React from 'react';
import './ApplicationPages.css'; // Import styles
import { FaFileAlt, FaTools, FaMagic, FaWrench, FaShieldAlt, FaDollarSign } from 'react-icons/fa';
const applications = [
  { id: 1, name: 'Sales Form', icon: <FaFileAlt /> },
  { id: 2, name: 'Installation', icon: <FaTools /> },
  { id: 3, name: 'Cleaning', icon: <FaMagic /> },
  { id: 4, name: 'Maintenance', icon: <FaWrench /> },
  { id: 5, name: 'Solar Compliance', icon: <FaShieldAlt /> },
  { id: 6, name: 'Vendor Financing', icon: <FaDollarSign /> },
];

const ApplicationPage = () => {
  return (
    <div className="application-container">
      <div className="app-grid">
        {applications.map((app) => (
          <div key={app.id} className="app-card">
            <div className="app-icon">{app.icon}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApplicationPage;
