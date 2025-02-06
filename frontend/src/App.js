import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import './style.css';

const App = () => {
  const [selectedItem, setSelectedItem] = useState('Application');

  return (
    <div className="app">
      <Sidebar setSelectedItem={setSelectedItem} />
      <Dashboard selectedItem={selectedItem} />
    </div>
  );
};

export default App;
