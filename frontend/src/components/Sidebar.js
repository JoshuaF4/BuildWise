import React from 'react';
import './Sidebar.css';
import logo from './main.png';  // Your logo image
import { BiCalendarEvent } from "react-icons/bi";
import { TbClipboard } from "react-icons/tb";
import { MdPeopleAlt } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import cuslogo from './customerlogo.png'
const Sidebar = ({ setSelectedItem }) => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        {/* Logo and text */}
        <img src={logo} alt="BuildWise Logo" className="sidebar-logo" />
        <h2>BuildWise</h2>
      </div>
      <nav>
        <ul>
          <li><button onClick={() => setSelectedItem('Application')}><RxDashboard /> Dashboard</button></li>
          <li><button onClick={() => setSelectedItem('Calendar')}> <BiCalendarEvent /> Calendar</button></li>
          <li><button onClick={() => setSelectedItem('Project')}><TbClipboard /> Projects</button></li>
          <li><button onClick={() => setSelectedItem('Leads')}><MdPeopleAlt /> Leads</button></li>
          <li><button onClick={() => setSelectedItem('Customer')}><img src={cuslogo} alt="Logo" className="sidebar-cuslogo" />  Customers</button></li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
