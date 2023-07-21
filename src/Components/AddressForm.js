import React, { useState } from 'react';
import './AddressForm.css'; // Import the CSS file for styling

const AddressForm = ({ userData, onPreview }) => {
  const [address, setAddress] = useState('');
  const [toggleValue, setToggleValue] = useState(false);
  const [numberField, setNumberField] = useState('');
  const [alphabetField, setAlphabetField] = useState('');
  const [alphanumericField, setAlphanumericField] = useState('');
  const [error, setError] = useState('');

  const handlePreview = () => {
    // Add validation for different fields
    if (!address || !numberField || !alphabetField || !alphanumericField) {
      setError('Please fill out all the fields.');
    } else {
      onPreview({
        ...userData,
        address,
        toggleValue,
        numberField,
        alphabetField,
        alphanumericField,
      });
    }
  };

  // Add validation logic for different field types
  const handleNumberChange = (e) => {
    const value = e.target.value;
    // Allow only numbers in the numberField
    if (/^[0-9]*$/.test(value)) {
      setNumberField(value);
    }
  };

  const handleAlphabetChange = (e) => {
    const value = e.target.value;
    // Allow only alphabets in the alphabetField
    if (/^[A-Za-z]*$/.test(value)) {
      setAlphabetField(value);
    }
  };

  const handleAlphanumericChange = (e) => {
    const value = e.target.value;
    // Allow only alphanumeric characters in the alphanumericField
    if (/^[a-zA-Z0-9]*$/.test(value)) {
      setAlphanumericField(value);
    }
  };

  return (
    <div className="address-form-container">
      <h2 className="form-heading">Address Form</h2>
      <div className="form-group">
        <label>Email:</label>
        <input type="text" value={userData.email} readOnly />
      </div>
      <div className="form-group">
        <label>Password:</label>
        <input type="text" value={userData.password} readOnly />
      </div>
      <div className="form-group">
        <label>Address:</label>
        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Toggle Button:</label>
        <input
          type="checkbox"
          checked={toggleValue}
          onChange={() => setToggleValue((prev) => !prev)}
        />
      </div>
      <div className="form-group">
        <label>Number Field:</label>
        <input type="text" value={numberField} onChange={handleNumberChange} />
      </div>
      <div className="form-group">
        <label>Alphabet Field:</label>
        <input type="text" value={alphabetField} onChange={handleAlphabetChange} />
      </div>
      <div className="form-group">
        <label>Alphanumeric Field:</label>
        <input type="text" value={alphanumericField} onChange={handleAlphanumericChange} />
      </div>
      {error && <div className="error">{error}</div>}
      <button className="form-btn" onClick={handlePreview}>Preview</button>
    </div>
  );
};

export default AddressForm;
