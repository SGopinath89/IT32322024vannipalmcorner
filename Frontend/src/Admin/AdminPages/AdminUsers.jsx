import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminSidebar from '../Admincomponents/AdminSidebar';
import './pagestyle.css';

const API_URL = 'http://localhost:8080/api/users';

const AdminUsers = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(API_URL)
      .then(response => {
        setLoading(false);
        if (Array.isArray(response.data)) {
          setUsers(response.data);
        } else {
          // Handle single user object
          setUsers([response.data]); // Wrap in an array
        }
      })
      .catch(error => {
        console.error('Error fetching users:', error);
        setLoading(false);
        setError('Error fetching data');
      });
  }, []);

  // useEffect(() => {
  //   axios.get(API_URL)
  //     .then(response => {
  //       if (Array.isArray(response.data)) {
  //         setUsers(response.data);
  //       } else {
  //         console.error('Response data is not an array:', response.data);
  //         setError('Unexpected data format');
  //       }
  //       setLoading(false);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching users:', error);
  //       setLoading(false);
  //       setError('Error fetching data');
  //     });
  // }, []);
  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    const foundUser = users.find((user) =>
      user.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setSelectedUser(foundUser);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className='main'>
      <div className='nav'>
        <AdminSidebar />
      </div>
      <section className='section'>
        <div className='head'>
          <h1>User details</h1>
        </div>
        <div className='detail'>
          <div className='data'>
            <input
              type='search'
              placeholder='Search users...'
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <div className='owndetail'>
              {selectedUser ? (
                <>
                  <img src={selectedUser.image || 'default-image.png'} alt={selectedUser.name} />
                  <h3>Name: {selectedUser.name}</h3>
                  <p>Email: {selectedUser.email}</p>
                  <h4>Ordered Products:</h4>
                  {selectedUser && selectedUser.orders ? (
                    <ul>
                      {selectedUser.orders.map((order, index) => (
                        <li key={index}>
                          <strong>Product Name:</strong> {order.product.product_name}<br />
                          <strong>Order Date:</strong> {order.order_date}<br />
                          <strong>Quantity Ordered:</strong> {order.quantity_ordered}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p>No orders available for this user.</p>
                  )}
                </>
              ) : (
                <p>Select a user to see details</p>
              )}
            </div>
          </div>
          <div className='many'>
            {Array.isArray(users) && users.length > 0 ? (
              users.map((user, index) => (
                <div
                  key={index}
                  className='product-item'
                  onClick={() => handleUserClick(user)}
                  style={{ cursor: 'pointer', padding: '10px', border: '1px solid #ccc', margin: '5px 0' }}
                >
                  {user.name}
                </div>
              ))
            ) : (
              <p>No users available</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdminUsers;