'use client';

import React from 'react';
import './error.css';

const Error = ({ error }) => {
  return (
    <div className="body-error">
      <div className="error-container">
        <h1 className="error-text">Error</h1>
        <p className="error-message">
          {error || 'information displayed when an unforeseen problem occurs,'}
          {error}
          usually on a computer or other device.....
        </p>
        <button type="button" className="error-ok">
          OK
        </button>
      </div>
    </div>
  );
};

export default Error;
