import React from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './adminsidebarstyle.css'

const AdminSidebar = () => {
  return (
    <>
    <div className='sidebar'>
        <div className='users'>
            <button>Users</button>
        </div>
        <div className='sellers'>
            <button>Sellers</button>
        </div>
        <div className='products'>
            <button>Products</button>
        </div>

    </div>
    </>
   
  );
};

export default AdminSidebar;
