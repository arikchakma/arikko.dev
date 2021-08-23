import React from 'react';
import styled from 'styled-components';

export default function Header() {
  return (
    <Wrapper>
      <ContentWrapper>Arikko</ContentWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.header``;

const ContentWrapper = styled.main`
  margin-bottom: 40px;
`;
