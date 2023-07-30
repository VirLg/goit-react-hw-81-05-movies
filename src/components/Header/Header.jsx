import React from 'react';
import { NavLink } from 'react-router-dom';
const Header = () => {
  return (
    <>
      <div>
        <NavLink to="/">HomePage</NavLink>
      </div>

      <div>
        <NavLink to="/movies">Movies</NavLink>
      </div>
      <div>
        <NavLink to="/movieDetails">MoviesDetails</NavLink>
      </div>
    </>
  );
};

export default Header;
