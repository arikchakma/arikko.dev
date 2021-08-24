import React from 'react';
import styled from 'styled-components';

export default function Bio() {
  return (
    <Wrapper>
      <ContentWrapper>
        <TextWrapper>
          <Heading>Arik Chakma</Heading>
          <Spoiler>A frontend chef who is cooking his world!</Spoiler>
        </TextWrapper>
      </ContentWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.main``;

const ContentWrapper = styled.div``;

const TextWrapper = styled.div`
  max-width: 350px;
`;

const Heading = styled.h1``;

const Spoiler = styled.p``;
