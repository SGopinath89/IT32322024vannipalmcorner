
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminSidebar from '../Admincomponents/AdminSidebar';
import './pagestyle.css'; // Ensure you have the appropriate CSS file imported

const API_URL = 'http://localhost:8080/api/users';

const AdminUsers = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null); // State to keep track of selected user
  const [searchTerm, setSearchTerm] = useState(''); // State to manage search input
  const [loading, setLoading] = useState(true); // State to track loading state
  const [error, setError] = useState(null); // State to track any errors

  useEffect(() => {
    axios.get(API_URL)
      .then(response => {
        setUsers(response.data);
        setLoading(false); // Once data is fetched, set loading to false
      })
      .catch(error => {
        console.error('Error fetching users:', error);
        setLoading(false); // Set loading to false in case of error
        setError('Error fetching data'); // Set an error message
      });
  }, []); // Empty dependency array means this effect runs once after initial render

  const handleUserClick = (user) => {
    setSelectedUser(user); // Set the selected user when a username is clicked
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    const foundUser = users.find((user) =>
      user.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setSelectedUser(foundUser); // Set the selected user based on search result
  };

  if (loading) {
    return <p>Loading...</p>; // Display loading message while fetching data
  }

  if (error) {
    return <p>{error}</p>; // Display error message if fetching data fails
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
                  <ul>
                    {selectedUser.orders.map((order, index) => (
                      <li key={index}>
                      <strong>Product Name:</strong> {order.product.productName}<br />
                      <strong>Order Date:</strong> {order.orderDate}<br />
                      <strong>Quantity Ordered:</strong> {order.quantityOrdered}
                    </li>
                    ))}
                  </ul>

                </>
              ) : (
                <p>Select a user to see details</p>
              )}
            </div>
          </div>
          <div className='many'>
            {users.map((user, index) => (
              <div
                key={index}
                className='product-item'
                onClick={() => handleUserClick(user)}
                style={{ cursor: 'pointer', padding: '10px', border: '1px solid #ccc', margin: '5px 0' }}
              >
                {user.name}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdminUsers;
