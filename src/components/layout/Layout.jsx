import { Suspense } from 'react';
import Header from 'components/Header/Header';
import { Container } from 'components/container/Container.styled';
import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Header />
      <Container>
        <main>
          <ul style={{ listStyle: 'none', display: 'block' }}>
            <Suspense fallback={<div>Loading...</div>}>
              <Outlet />
            </Suspense>
          </ul>
        </main>
      </Container>
    </>
  );
};

export default Layout;
