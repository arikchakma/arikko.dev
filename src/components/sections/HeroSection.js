import React from 'react';
import styled from 'styled-components';
import SEO from '../layout/seo';

export default function HeroSection() {
  return (
    <Wrapper>
      <SEO title="Home" image="/images/og/hero-og.jpg" />
      <ContentWrapper>
        <Heading>
          Chef
          <br /> is cooking!
        </Heading>
      </ContentWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: #07090e;
`;

const ContentWrapper = styled.div`
  max-width: 1440px;
  height: 100vh;
  margin: 0 auto;
  padding: 200px 120px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Heading = styled.h1`
  font-family: Recoleta;
  font-style: normal;
  font-weight: bold;
  font-size: 75px;
  line-height: 90%;
  text-align: center;
  background: linear-gradient(270.81deg, #ce63c3 -30.3%, #3b2ed0 95.45%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  user-select: none;
`;
