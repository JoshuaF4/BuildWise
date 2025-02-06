import React from 'react';

const Sidebar = ({ setSelectedItem }) => {
  return (
    <div className="sidebar">
      <h2>Nav Bar</h2>
      <nav>
        <ul>
          <li><button onClick={() => setSelectedItem('Application')}>Application</button></li>
          <li><button onClick={() => setSelectedItem('Project')}>Project</button></li>
          <li><button onClick={() => setSelectedItem('Customer')}>Customer</button></li>
          <li><button onClick={() => setSelectedItem('Leads')}>Leads</button></li>
          <li><button onClick={() => setSelectedItem('Calendar')}>Calendar</button></li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
