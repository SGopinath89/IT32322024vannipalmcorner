import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminSidebar from '../Admincomponents/AdminSidebar';
import './pagestyle.css';

const API_URL = 'http://localhost:8080/api/product';

const AdminProducts = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(API_URL)
      .then(response => {
        setLoading(false);
        if (Array.isArray(response.data)) {
          setProducts(response.data);
        } else {
          // Handle single product object
          setProducts([response.data]); // Wrap in an array
        }
      })
      .catch(error => {
        console.error('Error fetching products:', error);
        setLoading(false);
        setError('Error fetching data');
      });
  }, []);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    const foundProduct = products.find((product) =>
      product.productName.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setSelectedProduct(foundProduct);
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
          <h1>Product details</h1>
        </div>
        <div className='detail'>
          <div className='data'>
            <input
              type='search'
              placeholder='Search products...'
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <div className='owndetail'>
              {selectedProduct ? (
                <>
                  <img src={selectedProduct.image || 'default-image.png'} alt={selectedProduct.productName} />
                  <h3>Product Name: {selectedProduct.productName}</h3>
                  <p>Seller: {selectedProduct.seller.sellerName}</p>
                  <p>Quantity Available: {selectedProduct.quantityAvailable}</p>
                </>
              ) : (
                <p>Select a product to see details</p>
              )}
            </div>
          </div>
          <div className='many'>
            {Array.isArray(products) && products.length > 0 ? (
              products.map((product, index) => (
                <div
                  key={index}
                  className='product-item'
                  onClick={() => handleProductClick(product)}
                  style={{ cursor: 'pointer', padding: '10px', border: '1px solid #ccc', margin: '5px 0' }}
                >
                  {product.productName}
                </div>
              ))
            ) : (
              <p>No products available</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdminProducts;
