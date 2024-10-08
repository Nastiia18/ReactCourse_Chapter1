import React, { useState } from 'react';
import AddressForm from './AddressForm';
import AddressTable from './AddressTable';
import SearchInput from './SearchInput';

const AddressContainer = () => {
  const [addresses, setAddresses] = useState([]);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.firstName || !formData.lastName || !formData.phone) {
      setErrorMessage('Please fill in all fields');
      return;
    }

    if (editingId) {
      setAddresses((prevAddresses) =>
        prevAddresses.map((address) =>
          address.id === editingId ? { ...formData, id: editingId } : address
        )
      );
      setEditingId(null);
    } else {
      const newAddress = { id: Date.now(), ...formData };
      setAddresses([...addresses, newAddress]);
    }

    setFormData({ firstName: '', lastName: '', phone: '' });
    setErrorMessage('');
  };

  const startEditing = (id) => {
    const addressToEdit = addresses.find((address) => address.id === id);
    if (addressToEdit) {
      setFormData(addressToEdit);
      setEditingId(id);
      setErrorMessage('');
    }
  };

  const filteredAddresses = addresses.filter(
    (address) =>
      address.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      address.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      address.phone.includes(searchQuery)
  );

  return (
    <div>
      <SearchInput searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <AddressForm
        firstName={formData.firstName}
        lastName={formData.lastName}
        phone={formData.phone}
        onChange={handleChange}
        onSubmit={handleSubmit}
        errorMessage={errorMessage}
      />
      <AddressTable
        addresses={filteredAddresses}
        onEdit={startEditing}
        isEditing={editingId !== null}
        editingId={editingId}
      />
    </div>
  );
};

export default AddressContainer;
