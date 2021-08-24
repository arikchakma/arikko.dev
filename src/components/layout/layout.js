import React from 'react';
import styled from 'styled-components';
import Footer from './Footer';
import Header from './Header';
import './layout.css';

function Layout({ children }) {
  return (
    <Wrapper>
      <Header />
      <main>{children}</main>
      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: 650px;
  margin: 0 auto;
  padding: 42px 50px;
`;

export default Layout;
