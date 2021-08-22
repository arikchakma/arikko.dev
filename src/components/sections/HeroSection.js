import React from 'react';
import styled from 'styled-components';
import SEO from '../layout/seo';

export default function HeroSection() {
  return (
    <Wrapper>
      <SEO
        title="Home"
        image="/images/og/hero-og.jpg"
        description="A frontend chef's world."
      />
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

  @media screen and (max-width: 768px) {
    padding: 200px 80px;
  }

  @media screen and (max-width: 450px) {
    padding: 200px 30px;
  }

  @media screen and (max-width: 320px) {
    padding: 200px 20px;
  }
`;

const Heading = styled.h1`
  min-width: 350px;
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

  @media screen and (max-width: 768px) {
    font-size: 65px;
  }

  @media screen and (max-width: 450px) {
    font-size: 35px;
  }

  @media screen and (max-width: 320px) {
    min-width: 300px;
  }
`;
