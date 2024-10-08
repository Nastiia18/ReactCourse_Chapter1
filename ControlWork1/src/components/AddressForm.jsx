import React from 'react';

const AddressForm = ({ firstName, lastName, phone, onChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className="address-form">
      <div>
        <label>
          First Name
          <input
            type="text"
            name="firstName"
            value={firstName}
            onChange={onChange}
          />
        </label>
      </div>
      <div>
        <label>
          Last Name
          <input
            type="text"
            name="lastName"
            value={lastName}
            onChange={onChange}
          />
        </label>
      </div>
      <div>
        <label>
          Phone
          <input type="text" name="phone" value={phone} onChange={onChange} />
        </label>
      </div>
      <button type="submit">Add Address</button>
    </form>
  );
};

export default AddressForm;
