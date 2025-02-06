import React, { useState } from 'react';
import './utilities.css';

function UtilitiesPlanner() {
  const [ageGroups, setAgeGroups] = useState({
    children: 0,
    adults: 0,
    seniors: 0
  });

  // Consumption coefficients (liters/kWh per person per day)
  const consumption = {
    water: { children: 100, adults: 150, seniors: 120 },
    energy: { children: 3, adults: 5, seniors: 4 },
    sewage: 0.8 // 80% of water consumption becomes sewage
  };

  const totalPopulation = Object.values(ageGroups).reduce((a, b) => a + b, 0);

  const calculateUtilities = () => ({
    water: (
      ageGroups.children * consumption.water.children +
      ageGroups.adults * consumption.water.adults +
      ageGroups.seniors * consumption.water.seniors
    ),
    energy: (
      ageGroups.children * consumption.energy.children +
      ageGroups.adults * consumption.energy.adults +
      ageGroups.seniors * consumption.energy.seniors
    ),
    sewage: (
      (ageGroups.children * consumption.water.children +
      ageGroups.adults * consumption.water.adults +
      ageGroups.seniors * consumption.water.seniors) * consumption.sewage
    )
  });

  const handleScroll = (group, e) => {
    const delta = Math.sign(e.deltaY);
    setAgeGroups(prev => ({
      ...prev,
      [group]: Math.max(0, prev[group] + (delta > 0 ? -1 : 1))
    }));
  };

  const utilities = calculateUtilities();

  return (
    <div className="utilities-planner">
      <h1>City Utilities Planner</h1>
      <div className="population-controls">
        {Object.entries(ageGroups).map(([group, count]) => (
          <div key={group} className="age-group" onWheel={(e) => handleScroll(group, e)}>
            <label>
              {group.charAt(0).toUpperCase() + group.slice(1)} ({count})
              <input
                type="range"
                min="0"
                max="100000"
                value={count}
                onChange={(e) => setAgeGroups(prev => ({
                  ...prev,
                  [group]: parseInt(e.target.value)
                }))}
              />
            </label>
            <div className="scroll-note">Scroll to adjust</div>
          </div>
        ))}
      </div>

      <div className="results">
        <div className="total-population">
          Total Population: {totalPopulation.toLocaleString()}
        </div>

        <div className="utility-cards">
          <div className="utility-card water">
            <h2>💧 Water Requirements</h2>
            <div className="value">{utilities.water.toLocaleString()} L/day</div>
            <div className="breakdown">
              <p>Children: {(ageGroups.children * consumption.water.children).toLocaleString()} L</p>
              <p>Adults: {(ageGroups.adults * consumption.water.adults).toLocaleString()} L</p>
              <p>Seniors: {(ageGroups.seniors * consumption.water.seniors).toLocaleString()} L</p>
            </div>
          </div>

          <div className="utility-card energy">
            <h2>⚡ Energy Demand</h2>
            <div className="value">{utilities.energy.toLocaleString()} kWh/day</div>
            <div className="breakdown">
              <p>Children: {(ageGroups.children * consumption.energy.children).toLocaleString()} kWh</p>
              <p>Adults: {(ageGroups.adults * consumption.energy.adults).toLocaleString()} kWh</p>
              <p>Seniors: {(ageGroups.seniors * consumption.energy.seniors).toLocaleString()} kWh</p>
            </div>
          </div>

          <div className="utility-card sewage">
            <h2>🚽 Sewage System</h2>
            <div className="value">{utilities.sewage.toLocaleString()} L/day</div>
            <div className="recommendation">
              Pipe diameter recommendation: {calculatePipeSize(utilities.sewage)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Helper function for pipe sizing (simplified calculation)
function calculatePipeSize(sewageFlow) {
  const flowRate = sewageFlow / 86400; // Convert L/day to L/sec
  if (flowRate < 1) return '150mm PVC';
  if (flowRate < 5) return '200mm PVC';
  if (flowRate < 10) return '300mm Concrete';
  return '500mm+ Concrete';
}

export default UtilitiesPlanner;