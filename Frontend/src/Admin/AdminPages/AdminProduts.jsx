import React from 'react';
import AdminSidebar from '../Admincomponents/AdminSidebar';
import './pagestyle.css';

import Logo from '../image/logo.png';

const AdminProducts = () => {
  return (
    <div className='main'>
      <div className='nav'>
        <AdminSidebar></AdminSidebar>
      </div>
      <section className='section'>
        <div className='head'>
          <h1>Products details </h1>
        </div>
        <div className='detail'>
          <div className='data'>
            <input type='search'></input>
            <div className='owndetail'>
              <img></img>
              <h3> Name: </h3>
            </div>
          </div>
          <div className='many'>

          </div>
        </div>
      </section>


    </div>

  );
};

export default AdminProducts;
