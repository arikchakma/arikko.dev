import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

export default function Header() {
  return (
    <Wrapper>
      <ContentWrapper>
        <Link to="/">arikko</Link>
        <Chill>f*cking chill</Chill>
      </ContentWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.header``;

const ContentWrapper = styled.main`
  margin-bottom: 45px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    font-weight: 700;
    font-size: 40px;
    text-decoration: none;
  }
`;

const Chill = styled.p``;
