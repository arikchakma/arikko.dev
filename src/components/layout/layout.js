import React from 'react';
import styled from 'styled-components';
import Footer from './Footer';
import Header from './Header';
import './layout.css';

function Layout({ children }) {
  return (
    <Wrapper>
      <Header />
      {children}
      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled.main`
  position: relative;
`;

export default Layout;
