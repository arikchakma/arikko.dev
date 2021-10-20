import React from 'react';
import styled from 'styled-components';
import Partners from '../utils/Partners';

export default function PartnersSection() {
  return (
    <Wrapper>
      <ContentWrapper>
        <TextWrapper>
          <Heading>Cooked For</Heading>
        </TextWrapper>

        <PartnersWrapper>
          <Partners />
        </PartnersWrapper>
      </ContentWrapper>
    </Wrapper>
  );
}

/// /////////////////////////
/// /////////////////////////
// Main Wrapper
const Wrapper = styled.section`
  background: #080c14;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 200px 50px;
  padding-top: 50px;

  display: grid;
  justify-content: center;
  align-items: center;

  gap: 35px;
`;

/// /////////////////////////
/// /////////////////////////
// Text Wrapper
const TextWrapper = styled.div``;

const Heading = styled.h3`
  font-family: 'Space Grotesk', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 31px;

  text-align: center;
  letter-spacing: 1px;
  text-transform: uppercase;

  color: #ffffff;
`;

/// /////////////////////////
/// /////////////////////////
// Partners Wrapper
const PartnersWrapper = styled.div``;
