import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div

    style={{
      display:'flex',
      gap:'16px',
height:"40px",
outline:'1px solid teal',
padding:"20px",
    }}
    >
      <div>
        <NavLink to="/">HomePage</NavLink>
      </div>
      <div>
        <NavLink to="/movies">MoviesPage</NavLink>
      </div>
    </div>
  );
};

export default Header;
