import React from 'react';

const CustomersTableItem = ({ name, location, email, phone }) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{location || 'N/A'}</td>
      <td>{email}</td>
      <td>{phone || 'N/A'}</td>
    </tr>
  );
};

export default CustomersTableItem;
