import React from 'react';

const AddressTable = ({ addresses, onEdit, isEditing, editingId }) => {
  return (
    <table className="address-table">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Phone</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {addresses.length > 0 ? (
          addresses.map((address) => (
            <tr key={address.id}>
              <td>{address.firstName}</td>
              <td>{address.lastName}</td>
              <td>{address.phone}</td>
              <td>
                <button
                  onClick={() => onEdit(address.id)}
                  style={{
                    margin: '5px',
                    backgroundColor: '#93ca95',
                    color: 'white',
                  }}
                >
                  {editingId === address.id ? 'Save' : 'Edit'}
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td className="no-addresses">No addresses found.</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default AddressTable;
