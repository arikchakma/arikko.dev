import storage from 'local-storage-fallback';
import React, { useLayoutEffect, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import ThemeData from '../../data/Theme';
import ThemeContext from '../lib/ThemeContext';
import GlobalStyle from '../styles/GlobalStyle';
import Footer from './Footer';
import './Global.css';
import Header from './Header';

function Layout({ children }) {
  const [theme, setTheme] = useState(
    storage.getItem('theme') ? JSON.parse(storage.getItem('theme')) : true
  );

  function changeTheme() {
    setTheme(t => !t);
    storage.setItem('theme', !theme);
  }

  useLayoutEffect(() => {
    function toogleTheme() {
      changeTheme();
      changeTheme();
    }
    window.addEventListener('load', toogleTheme);
    window.addEventListener('reload', toogleTheme);

    return () => {
      window.removeEventListener('load');
      window.removeEventListener('reload');
    };
  });

  return (
    <ThemeContext.Provider value={{ changeTheme }}>
      <ThemeProvider theme={theme ? ThemeData.light : ThemeData.dark}>
        <Wrapper>
          <GlobalStyle />
          <Header />
          <main>{children}</main>
          <Footer />
        </Wrapper>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

const Wrapper = styled.div`
  max-width: 650px;
  margin: 0 auto;
  padding: 42px 50px;

  @media screen and (max-width: 650px) {
    padding: 50px 20px;
  }
`;

export default Layout;
