import React from 'react';
import styled from 'styled-components';
import logoA from '../../../static/images/logos/logo-a.svg';

export default function TitleLogoAnimation() {
  return (
    <Wrapper>
      <ContentWrapper>
        <LogoWrapper>
          {/* <Title>{logoFull}</Title> */}
          <Logo src={logoA} alt="Arikko" />
        </LogoWrapper>
      </ContentWrapper>
    </Wrapper>
  );
}

/// /////////////////////////
/// /////////////////////////
/// Main Wrapper
const Wrapper = styled.div``;

const ContentWrapper = styled.div``;

/// /////////////////////////
/// /////////////////////////
/// Text Wrapper
const LogoWrapper = styled.figure``;

const Logo = styled.img``;

// const Title = styled.h1`
//   font-family: Space Mono;
//   font-style: normal;
//   font-weight: bold;
//   font-size: 64px;
//   line-height: 100%;
//   /* identical to box height */

//   text-align: center;
//   letter-spacing: -0.2em;

//   color: #ffffff;
// `;
