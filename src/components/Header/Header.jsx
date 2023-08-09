import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container } from 'components/container/Container.styled';
const Header = () => {
  return (
    <Container style={{ backgroundColor: 'aqua' }}>
      <nav>
        <ul
          style={{
            display: 'flex',
            gap: '16px',
            listStyle: 'none',
          }}
        >
          <li>
            <NavLink to="/">HomePage</NavLink>
          </li>
          <li>
            <NavLink to="/movies">MoviesPage</NavLink>
          </li>
        </ul>
      </nav>
    </Container>
  );
};

export default Header;
