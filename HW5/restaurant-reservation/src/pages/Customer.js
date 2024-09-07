// src/pages/Customer.js
import React from 'react';
import './Customer.css';

const Customer = () => {
  return (
    <div className="customer-container">
      <header className="customer-header">
        <img src="/logo.png" alt="Logo" className="logo" />
        <h1>Reserve Table From Anywhere!</h1>
        <div className="user-info">
          <span>Welcome, Mohammad!</span>
          <button className="reservations-button">My Reservations</button>
        </div>
      </header>

      <div className="customer-details">
        <p>Your reservations are also emailed to <span className="email">MohammadAmanlou2@gmail.com</span></p>
        <div className="address-info">
          <span>Address: Tehran, Iran</span>
          <button className="logout-button">Logout</button>
        </div>
      </div>

      <div className="work-progress">
        <p>Work in progress...</p>
      </div>

      <footer className="customer-footer">
        <p>Copyright © 2024 Mizdooni - All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Customer;
