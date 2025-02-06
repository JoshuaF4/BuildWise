import React, { useState } from 'react';

function LeadsTable() {
  const [leads, setLeads] = useState([]);  
  const [showForm, setShowForm] = useState(false);  
  const [newLead, setNewLead] = useState({ name: '', company: '', email: '', phone: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewLead({ ...newLead, [name]: value });
  };

  const handleAddLead = () => {
    if (!newLead.name || !newLead.email) {
      alert('Name and Email are required!');
      return;
    }

    const newEntry = { id: leads.length + 1, ...newLead };
    setLeads([...leads, newEntry]); 
    setNewLead({ name: '', company: '', email: '', phone: '' });
    setShowForm(false); 
  };

  return (
    <div className="table-container">
      <h2>Leads</h2>
      <button className="add-btn" onClick={() => setShowForm(!showForm)}>
        {showForm ? 'Cancel' : 'Add New'}
      </button>

      {showForm && (
        <div className="customer-form">
          <input type="text" name="name" placeholder="Name" value={newLead.name} onChange={handleInputChange} />
          <input type="text" name="company" placeholder="Company" value={newLead.company} onChange={handleInputChange} />
          <input type="email" name="email" placeholder="Email" value={newLead.email} onChange={handleInputChange} />
          <input type="text" name="phone" placeholder="Phone" value={newLead.phone} onChange={handleInputChange} />
          <button onClick={handleAddLead} className="save-btn">Add</button>
        </div>
      )}

      <table className="customer-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Company</th>
            <th>Email</th>
            <th>Mobile</th>
          </tr>
        </thead>
        <tbody>
          {leads.map((lead) => (
            <tr key={lead.id}>
              <td>{lead.name}</td>
              <td>{lead.company}</td>
              <td>{lead.email}</td>
              <td>{lead.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LeadsTable;
