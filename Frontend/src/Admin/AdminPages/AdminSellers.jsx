import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminSidebar from '../Admincomponents/AdminSidebar';
import './pagestyle.css'; 

const API_URL = 'http://localhost:8080/api/sellers';

const AdminSellers = () => {
  const [sellers, setSellers] = useState([]);
  const [selectedSeller, setSelectedSeller] = useState(null); 
  const [searchTerm, setSearchTerm] = useState(''); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 
  useEffect(() => {
    axios.get(API_URL)
      .then(response => {
        setSellers(response.data);
        setLoading(false); // Once data is fetched, set loading to false
      })
      .catch(error => {
        console.error('Error fetching users:', error);
        setLoading(false); // Set loading to false in case of error
        setError('Error fetching data'); // Set an error message
      });
  }, []); // Empty dependency array means this effect runs once after initial render

  const handleSellerClick = (seller) => {
    setSelectedSeller(seller); // Set the selected seller when a seller is clicked
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    const foundSeller = sellers.find((seller) =>
      seller.sellerName.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setSelectedSeller(foundSeller); // Set the selected seller based on search result
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
          <h1>Sellers Details</h1>
        </div>
        <div className='detail'>
          <div className='data'>
            <input
              type='search'
              placeholder='Search sellers...'
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <div className='owndetail'>
              {selectedSeller ? (
                <>
                  {/* Assuming you have an image and name field in your Seller entity */}
                  <img src={selectedSeller.image || 'default-image.png'} alt={selectedSeller.sellerName} />
                  <h3>{selectedSeller.seller_name}</h3>
                  
                </>
              ) : (
                <p>Select a seller to see details</p>
              )}
            </div>
          </div>
          <div className='many'>
            {sellers.map((user, index) => (
              <div
                key={index}
                className='product-item'
                onClick={() => handleSellerClick(user)}
                style={{ cursor: 'pointer', padding: '10px', border: '1px solid #ccc', margin: '5px 0' }}
              >
                {user.sellerName}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdminSellers;
