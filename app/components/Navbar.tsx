import React from 'react';
import { Link } from 'react-router';

export const Navbar = () => {
  return (
    <nav className='navbar'>
      <Link to='/' className='navbar-brand'>
        <p className='text-2xl fond-bold text-gradient uppercase'>Resumind</p>
      </Link>
      <Link to='/upload' className='primary-button w-fit'>
        UPLOAD RESUME
      </Link>
    </nav>
  );
};
