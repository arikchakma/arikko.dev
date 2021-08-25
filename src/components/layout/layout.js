/* eslint-disable react/jsx-props-no-spreading */
import { MDXProvider } from '@mdx-js/react';
import { preToCodeBlock } from 'mdx-utils';
import React from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import Theme from '../../data/Theme';
import CodeBlock from '../vegetables/CodeBlock';
import Footer from './Footer';
import Header from './Header';
import './layout.css';

const GlobalStyle = createGlobalStyle`
`;

const components = {
  pre: preProps => {
    const props = preToCodeBlock(preProps);
    // if there's a codeString and some props, we passed the test
    if (props) {
      return <CodeBlock {...props} />;
    }
    // it's possible to have a pre without a code in it
    return <pre {...preProps} />;
  },
};

function Layout({ children }) {
  return (
    <Wrapper>
      <MDXProvider components={components}>
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
