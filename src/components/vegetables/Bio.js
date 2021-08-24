import React from 'react';
import styled from 'styled-components';
import fav from '../../../static/images/icons/favicon.png';

export default function Bio() {
  return (
    <Wrapper>
      <ContentWrapper>
        <Image src={fav} alt="Making tasty" />
        <TextWrapper>
          <Heading>
            Frontend world of <a href="https://github.com/arikchakma">Arik Chakma</a>
          </Heading>
          <Spoiler>A frontend chef who is cooking his world!</Spoiler>
        </TextWrapper>
      </ContentWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  margin-top: 10px;
  margin-bottom: 80px;
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const TextWrapper = styled.div`
  max-width: 350px;
  line-height: 160%;
`;

const Heading = styled.h1`
  a {
    font-size: 20px;
  }
`;

const Spoiler = styled.p``;

const Image = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  margin-right: 20px;
`;
