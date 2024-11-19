import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'; // Optionally, if you want to use external styles

const Sidebar = () => {
  return (
    <div
      style={{
        width: '250px',
        height: '100vh',
        backgroundImage: 'url("https://images6.alphacoders.com/123/1233563.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white', // To make text visible over the background
        padding: '20px',
      }}
    >
      <h3>ICDAS2.1</h3>
      <ul>
        <li><Link to="/dashboard">Home</Link></li>
        <li><Link to="/real-time">Real-time</Link></li>
        <li><Link to="/data-log-analysis">Data Log Analysis</Link></li>
        <li>Audit Trails
          <ul>
            <li><Link to="/alarm-audit-trail">Alarm Audit Trail</Link></li>
            <li><Link to="/equipment-audit-trail">Equipment Audit Trail</Link></li>
            <li><Link to="/user-audit-trail">User Audit Trail</Link></li>
            <li><Link to="/email-audit-trail">Email Audit Trail</Link></li>
            <li><Link to="/sms-audit-trail">SMS Audit Trail</Link></li>
            <li><Link to="/review-approved">Review/Approved</Link></li>
          </ul>
        </li>
        <li><Link to="/archive-analysis">Archive Analysis</Link></li>
        <li><Link to="/company-information">Company Information</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
