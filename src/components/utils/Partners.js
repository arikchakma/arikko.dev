import React from 'react';
import styled from 'styled-components';
import partnersData from '../../data/partnersData';

export default function Partners() {
  return (
    <Wrapper>
      <ContentWrapper>
        {partnersData.map(el => (
          <PartnerImage>
            <Img src={`images/logos/${el.img}.svg`} alt={el.title} placeholder="blurred" />
          </PartnerImage>
        ))}
      </ContentWrapper>
    </Wrapper>
  );
}

/// ///////////////////
/// ///////////////////
// Main Wrapper
const Wrapper = styled.div``;

const ContentWrapper = styled.div`
  display: flex;
  /* gap: 5px; */
`;

const PartnerImage = styled.figure``;

const Img = styled.img``;
