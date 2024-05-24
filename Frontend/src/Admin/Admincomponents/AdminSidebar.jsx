import React, { useTransition } from 'react'; // Import only useTransition
import { useNavigate } from 'react-router-dom';
import './adminsidebarstyle.css';

const AdminSidebar = () => {
  const navigate = useNavigate();
  const [isPending, startTransition] = useTransition(); // Destructure correctly

  const handleUser = () => {
    startTransition(() => {
      navigate('/adminuser');
    });
  };

  const handleProduct = () => {
    startTransition(() => {
      navigate('/adminproduct');
    });
  };

  const handleSeller = () => {
    startTransition(() => {
      navigate('/adminseller');
    });
  };

  return (
    <>
      <div className='sidebar'>
        <div className='user'>
          <button type='button' onClick={handleUser}>Users</button>
        </div>
        <div className='sellers'>
          <button type='button' onClick={handleSeller}>Sellers</button>
        </div>
        <div className='products'>
          <button type='button' onClick={handleProduct}>Products</button>
        </div>
      </div>
      {isPending && <div>Loading...</div>} {/* Optional: Show loading indicator */}
    </>
  );
};

export default AdminSidebar;
