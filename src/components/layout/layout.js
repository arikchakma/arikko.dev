import React from 'react';
import styled from 'styled-components';
import GlobalStyle from '../styles/GlobalStyle';
import Footer from './Footer';
import Header from './Header';

function Layout({ children }) {
  return (
    <Wrapper>
      <GlobalStyle />
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
