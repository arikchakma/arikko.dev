import React from 'react';
import styled from 'styled-components';
import TextAnimation from '../animations/TextAnimation';
import SEO from '../layout/seo';

export default function HeroSection() {
  return (
    <Wrapper>
      <SEO title="A Frontend Chef's World" />
      <ContentWrapper>
        <Heading>
          <TextAnimation /> this dish like mom does!
        </Heading>
      </ContentWrapper>
      <HiringWrapper>
        <P>Wanna hire me for your delicious dish?</P>
        <ContactMom>
          <ContactLink href="/">contact</ContactLink> my mom!
        </ContactMom>
      </HiringWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  background: #080c14;
`;

const ContentWrapper = styled.div`
  max-width: 1440px;
  height: 100vh;
  margin: 0 auto;
  padding: 0 120px;
  display: grid;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    padding: 0 80px;
  }

  @media screen and (max-width: 450px) {
    padding: 0 30px;
  }

  @media screen and (max-width: 320px) {
    padding: 0 20px;
  }
`;

const Heading = styled.h1`
  max-width: 550px;
  font-family: Recoleta;
  font-style: normal;
  font-weight: bold;
  font-size: 75px;
  line-height: 90%;
  text-align: center;
  background: linear-gradient(270.81deg, #ce63c3 -30.3%, #3b2ed0 95.45%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media screen and (max-width: 768px) {
    font-size: 65px;
  }

  @media screen and (max-width: 450px) {
    font-size: 35px;
  }

  /* @media screen and (max-width: 320px) {
    /* min-width: 300px; */
  } */
`;

const HiringWrapper = styled.div`
  position: absolute;
  bottom: 50px;
  width: 100%;

  padding: 0 20px;
  color: #405380;

  /* font-family: 'Recoleta', sans-serif; */
  font-family: 'Space Grotesk', sans-serif;
  font-size: 25px;
  text-align: center;

  opacity: 0.8;
`;

const P = styled.p`
  color: #e8eefc;
`;

const ContactMom = styled.p`
  color: #e8eefc;
`;

const ContactLink = styled.a`
  font-weight: normal;
  background: linear-gradient(270.81deg, #ce63c3 -30.3%, #3b2ed0 95.45%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  :hover {
    border-bottom: 1px solid #405380;
  }
`;
