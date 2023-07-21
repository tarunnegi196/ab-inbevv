import React from 'react';

const PreviewPage = ({ userData }) => {
  return (
    <div>
      <h2>Preview Page</h2>
      <div>
        <strong>Email:</strong> {userData.email}
      </div>
      <div>
        <strong>Password:</strong> {userData.password}
      </div>
      <div>
        <strong>Address:</strong> {userData.address}
      </div>
      <div>
        <strong>Toggle Value:</strong> {userData.toggleValue ? 'Yes' : 'No'}
      </div>
      {/* Display other fields here */}
    </div>
  );
};

export default PreviewPage;
