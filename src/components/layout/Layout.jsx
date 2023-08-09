import Header from 'components/Header/Header';
import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <Header />
      <main>
        <ul style={{ listStyle: 'none' }}>
          <Outlet />
        </ul>
      </main>
    </div>
  );
};

export default Layout;
