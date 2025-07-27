import React, { useState, useEffect } from 'react';

function LeadsTable({ leads: initialLeads, createLead }) {
  const [leads, setLeads] = useState(initialLeads || []);
  const [showForm, setShowForm] = useState(false);
  const [newLead, setNewLead] = useState({ name: '', email: '', phone: '', status: 'New' });

  useEffect(() => {
    setLeads(initialLeads || []);
  }, [initialLeads]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewLead({ ...newLead, [name]: value });
  };

  const handleAddLead = async () => {
    if (!newLead.name || !newLead.email || !newLead.phone) {
      alert('Name, Email and Phone are required!');
      return;
    }

    try {
      // Call the createLead prop function to make the POST request
      await createLead(newLead);  // Await the promise

      // Clear the form and close it
      setNewLead({ name: '', email: '', phone: '', status: 'New' });
      setShowForm(false);
    } catch (error) {
      console.error("Error creating lead:", error);
      alert("Failed to create lead. See console for details.");  // User-friendly error
    }
  };

  return (
    <div className="table-container">
      <h2>Leads</h2>
      <button className="add-btn" onClick={() => setShowForm(!showForm)}>
        {showForm ? 'Cancel' : 'Add New'}
      </button>

      {showForm && (
        <div className="customer-form">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={newLead.name}
            onChange={handleInputChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={newLead.email}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={newLead.phone}
            onChange={handleInputChange}
          />
          <button onClick={handleAddLead} className="save-btn">
            Add
          </button>
        </div>
      )}

      <table className="customer-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {leads.map((lead) => (
            <tr key={lead.id}>
              <td>{lead.name}</td>
              <td>{lead.email}</td>
              <td>{lead.phone}</td>
              <td>{lead.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LeadsTable;
