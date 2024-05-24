import React, { useState } from 'react';
import AdminSidebar from '../Admincomponents/AdminSidebar';
import users from '../data';
import './pagestyle.css'; // Ensure you have the appropriate CSS file imported

const AdminUsers = () => {
  const [selectedUser, setSelectedUser] = useState(null); // State to keep track of selected user
  const [searchTerm, setSearchTerm] = useState(''); // State to manage search input

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
                  <p>Password: {selectedUser.password}</p>
                  <p>Admin: {selectedUser.isAdmin ? 'Yes' : 'No'}</p>
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
