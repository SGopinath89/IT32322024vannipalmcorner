import React from 'react';
import AdminSidebar from '../Admincomponents/AdminSidebar';
import Logo from '../image/logo.png';
import './dashboardstyle.css';

const AdminDashBoard = () => {
  return (
    <div className='main'>
      <div className='nav'>
      <AdminSidebar></AdminSidebar>
      </div>
      <section className='section'>
        <img src={Logo} alt="Logo" className='logo' />
        <div className='content'>
          <h1>Vanni Palm Corner</h1>
          <p>Discover Crafted Vanni Palm Treasures!!!!</p>
        </div>


      </section>


    </div>

  );
};

export default AdminDashBoard;
