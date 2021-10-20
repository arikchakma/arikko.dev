import React from 'react';
import styled from 'styled-components';

export default function ChatSection() {
  return (
    <Wrapper>
      <ContentWrapper>
        <TextWrapper>
          <Description>
            The best day to chat with <Span>arikko</Span> was one year ago. The second best is
            today!
          </Description>
        </TextWrapper>
      </ContentWrapper>
    </Wrapper>
  );
}

/// ///////////////////////
/// ///////////////////////
// Main Wrapper
const Wrapper = styled.section`
  background: #080c14;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 200px 50px;

  display: grid;
  justify-content: center;
  align-items: center;
`;

/// ///////////////////////
/// ///////////////////////
// Text Wrapper
const TextWrapper = styled.div`
  max-width: 900px;
`;

const Description = styled.p`
  font-family: 'Space Grotesk', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 48px;
  line-height: 110%;

  text-align: center;
  letter-spacing: -0.02em;

  color: #ffffff;
`;

const Span = styled.div`
  display: inline-block;
  background: linear-gradient(270.81deg, #ce63c3 -30.3%, #3b2ed0 95.45%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
