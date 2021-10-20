import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import navigationData from '../../data/navigationData';
import TitleLogoAnimation from '../animations/TitleLogoAnimation';

export default function Header() {
  return (
    <Wrapper>
      <ContentWrapper>
        <Link to="/">
          <TitleLogoAnimation />
        </Link>

        <NavWrapper>
          <NavBar>
            {navigationData.map(el => (
              <NavItem>
                <Link to={el.url}>{el.title}</Link>
              </NavItem>
            ))}
          </NavBar>
        </NavWrapper>
      </ContentWrapper>
    </Wrapper>
  );
}

/// ///////////////////////////
/// ///////////////////////////
// Main Wrapper
const Wrapper = styled.section`
  width: 100vw;

  position: absolute;
  top: 0;
  z-index: 1;

  /* background: #080c14; */
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 50px;
`;

/// ///////////////////////////
/// ///////////////////////////
// Nav Wrapper
const NavWrapper = styled.nav``;

const NavBar = styled.ol`
  display: flex;
  gap: 40px;
`;

const NavItem = styled.li`
  list-style-type: none;
  a {
    color: #e8eefc;

    font-family: 'Space Mono', monospace;
    font-weight: bold;
    font-size: 24px;
    line-height: 120%;

    letter-spacing: -0.02em;

    transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);

    :hover,
    :active {
      color: #8cabf2;
      letter-spacing: 0;
    }
  }
`;
