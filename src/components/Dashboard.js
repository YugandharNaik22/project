import React from 'react';
import Sidebar from './Sidebar';

const Dashboard = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ marginLeft: '250px', padding: '20px' }}>
        <h2>ICDAS2.1</h2>
        {/* Content of Dashboard */}
      </div>
    </div>
  );
};

export default Dashboard;
