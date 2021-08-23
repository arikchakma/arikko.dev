import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import './layout.css';

function Layout({ children }) {
  return (
    <Wrapper>
      <Header />
      <main>{children}</main>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 42px 100px;
`;

export default Layout;
