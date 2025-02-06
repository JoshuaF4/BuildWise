import React, { useState } from 'react';
import CustomersTableItem from './CustomersTableItem';

function CustomersTable() {
  const [list, setList] = useState([]); 
  const [showForm, setShowForm] = useState(false);  
  const [newCustomer, setNewCustomer] = useState({ name: '', location: '', email: '', phone: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCustomer({ ...newCustomer, [name]: value });
  };

  const handleAddCustomer = () => {
    if (!newCustomer.name || !newCustomer.email) {
      alert('Name and Email are required!');
      return;
    }

    const newEntry = { id: list.length + 1, ...newCustomer };
    setList([...list, newEntry]); 
    setNewCustomer({ name: '', location: '', email: '', phone: '' });
    setShowForm(false); 
  };

  return (
    <div className="table-container">
      <h2>Customers</h2>
      <button className="add-btn" onClick={() => setShowForm(!showForm)}>
        {showForm ? 'Cancel' : 'Add New'}
      </button>

      {showForm && (
        <div className="customer-form">
          <input type="text" name="name" placeholder="Name" value={newCustomer.name} onChange={handleInputChange} />
          <input type="text" name="location" placeholder="Location" value={newCustomer.location} onChange={handleInputChange} />
          <input type="email" name="email" placeholder="Email" value={newCustomer.email} onChange={handleInputChange} />
          <input type="text" name="phone" placeholder="Phone" value={newCustomer.phone} onChange={handleInputChange} />
          <button onClick={handleAddCustomer} className="save-btn">Add</button>
        </div>
      )}

      <table className="customer-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Location</th>
            <th>Email</th>
            <th>Mobile</th>
          </tr>
        </thead>
        <tbody>
          {list.map((customer) => (
            <CustomersTableItem key={customer.id} {...customer} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CustomersTable;
