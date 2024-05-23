import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { startTransition } from 'react';
import './loginpagestyle.css';
import Logo from '../image/logo.png';
import users  from '../data';

const AdminLoginpage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    startTransition(() => {
      const user = users.find(
        (user) => user.name === username && user.password === password
      );
      if (user) {
        navigate('/admindashboard');
      } else {
        setError('Invalid username or password');
      }
    });
  };

  return (
    <section className='section'>
      <img src={Logo} alt="Logo" className='logo' />
      <div className='content'>
        <h1>Vanni Palm Corner</h1>
        <p>Discover Crafted Vanni Palm Treasures!!!!</p>
      </div>
      <div className='form'>
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <input
              type='text'
              placeholder='User Name'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label className='form-label'>User Name</label>
          </div>

          <div className='form-group'>
            <input
              type='password'
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label className='form-label'>Password</label>
          </div>

          {error && <p className='error'>{error}</p>}

          <button type='submit'>Login</button>
        </form>
      </div>
    </section>
  );
};

export default AdminLoginpage;
