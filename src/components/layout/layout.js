import { MDXProvider } from '@mdx-js/react';
import React from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import Theme from '../../data/Theme';
import Footer from './Footer';
import Header from './Header';
import './layout.css';

const GlobalStyle = createGlobalStyle`
`;

function Layout({ children }) {
  return (
    <Wrapper>
      <MDXProvider>
        <ThemeProvider theme={Theme}>
          <GlobalStyle />
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </MDXProvider>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 42px 100px;
`;

export default Layout;
