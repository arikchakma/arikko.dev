import React from 'react';
import styled from 'styled-components';

export default function Footer() {
  return (
    <Wrapper>
      <ContentWrapper>
        <TextWrapper>
          <MadeBy>made with love by arik chakma.</MadeBy>
          <Sleep>just sleep motherboard.</Sleep>
        </TextWrapper>
      </ContentWrapper>
    </Wrapper>
  );
}

/// //////////////////////
/// //////////////////////
// Main Wrapper
const Wrapper = styled.section`
  background: #080c14;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 50px;
`;

/// //////////////////////
/// //////////////////////
// Text Wrapper
const TextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-family: Space Grotesk;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 31px;
  /* identical to box height */

  letter-spacing: -0.002em;

  color: rgba(255, 255, 255, 0.4);
`;

const MadeBy = styled.p``;

const Sleep = styled.p``;
