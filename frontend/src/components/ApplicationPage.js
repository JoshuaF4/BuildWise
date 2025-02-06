import React, { useState } from 'react';
import './ApplicationPages.css'; // Import styles
import UrbanPlanner from './execute.js';
import UtilitiesPlanner from './utilities.js';
import { FaFileAlt, FaTools } from 'react-icons/fa';
import { IoCarOutline } from "react-icons/io5";
import { MdBalance } from "react-icons/md";
import { BsFillBarChartFill } from "react-icons/bs";
import comingSoonImg from './loading.png'; // Import Coming Soon image

const applications = [
  { id: 1, name: 'Urban Planning', icon: <FaFileAlt />, component: <UrbanPlanner /> },
  { id: 2, name: 'Utilities Management', icon: <FaTools />, component: <UtilitiesPlanner /> },
  { id: 3, name: 'Project Analytics', icon: <BsFillBarChartFill />, component: null },
  { id: 4, name: 'Traffic & Mobility', icon: <IoCarOutline />, component: null },
  { id: 5, name: 'Legal Guidelines', icon: <MdBalance />, component: null },
  { id: 6, name: 'Coming Soon', image: comingSoonImg, component: null }, // Use an image instead of an icon
];

const ApplicationPage = ({ hideDashboardHeading }) => {
  const [selectedApp, setSelectedApp] = useState(null);

  // Hide Dashboard heading when an application is selected
  hideDashboardHeading(selectedApp !== null);

  return (
    <div className="application-container">
      {selectedApp ? (
        <div className="selected-app">
          <button className="back-button" onClick={() => setSelectedApp(null)}>Back</button>
          {selectedApp}
        </div>
      ) : (
        <div className="app-grid">
          {applications.map((app) => (
            <div 
              key={app.id} 
              className="app-card" 
              onClick={() => app.component && setSelectedApp(app.component)} // Open selected app
            >
              <div className="app-icon">
                {app.image ? <img src={app.image} alt={app.name} className="app-image" /> : app.icon}
              </div>
              <p>{app.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ApplicationPage;
