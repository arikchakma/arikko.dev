import React from 'react';
import styled from 'styled-components';
// import Header from './Header';
import './layout.css';

function Layout({ children }) {
  return (
    <Wrapper>
      {/* <Header /> */}
      {children}
    </Wrapper>
  );
}

const Wrapper = styled.main`
  position: relative;
`;

export default Layout;
