import React, { useState } from 'react';
import './execute.css';

function UrbanPlanner() {
  const [population, setPopulation] = useState('');
  const [area, setArea] = useState('');
  const [plan, setPlan] = useState(null);

  // Basic urban planning formulas
  const calculatePlan = () => {
    const pop = Number(population);
    const ar = Number(area);

    if (pop <= 0 || ar <= 0) {
      alert('Please enter valid numbers greater than 0');
      return;
    }

    // Calculate density (people per square km)
    const density = pop / ar;

    // Area allocations (40% residential, 15% commercial, 15% industrial, 10% public, 20% green)
    const residentialArea = ar * 0.4;
    const commercialArea = ar * 0.15;
    const industrialArea = ar * 0.15;
    const publicArea = ar * 0.1;
    const parksArea = ar * 0.2;

    // Facility calculations
    const hospitals = Math.ceil(pop / 50000); // 1 hospital per 50,000 people
    const schools = Math.ceil(pop / 5000); // 1 school per 5,000 people
    const parks = Math.ceil(parksArea * 100); // 1 park per 1 hectare (0.01 km²)

    setPlan({
      density: density.toFixed(2),
      residentialArea: residentialArea.toFixed(2),
      commercialArea: commercialArea.toFixed(2),
      industrialArea: industrialArea.toFixed(2),
      publicArea: publicArea.toFixed(2),
      parksArea: parksArea.toFixed(2),
      hospitals,
      schools,
      parks
    });
  };

  return (
    <div className="urban-planner">
      <h1>Urban Planning Calculator</h1>
      <div className="input-section">
        <label>
          Total Population:
          <input
            type="number"
            value={population}
            onChange={(e) => setPopulation(e.target.value)}
            placeholder="Enter population"
          />
        </label>
        <label>
          Total Area (km²):
          <input
            type="number"
            value={area}
            onChange={(e) => setArea(e.target.value)}
            placeholder="Enter area in km²"
          />
        </label>
        <button onClick={calculatePlan}>Generate Plan</button>
      </div>

      {plan && (
        <div className="result-section">
          <h2>Urban Development Plan</h2>
          <div className="metrics">
            <div className="metric-card">
              <h3>Population Density</h3>
              <p>{plan.density} people/km²</p>
            </div>
          </div>
          
          <div className="plan-grid">
            <div className="plan-card">
              <h3>🏠 Residential Area</h3>
              <p>{plan.residentialArea} km² (40%)</p>
            </div>
            <div className="plan-card">
              <h3>🏢 Commercial Space</h3>
              <p>{plan.commercialArea} km² (15%)</p>
            </div>
            <div className="plan-card">
              <h3>🏭 Industrial Zone</h3>
              <p>{plan.industrialArea} km² (15%)</p>
            </div>
            <div className="plan-card">
              <h3>🏥 Healthcare Facilities</h3>
              <p>{plan.hospitals} Hospitals</p>
            </div>
            <div className="plan-card">
              <h3>📚 Educational Institutions</h3>
              <p>{plan.schools} Schools</p>
            </div>
            <div className="plan-card">
              <h3>🌳 Green Spaces</h3>
              <p>{plan.parksArea} km² (20%)</p>
              <p>{plan.parks} Parks</p>
            </div>
            <div className="plan-card">
              <h3>🏛 Public Services</h3>
              <p>{plan.publicArea} km² (10%)</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default UrbanPlanner;