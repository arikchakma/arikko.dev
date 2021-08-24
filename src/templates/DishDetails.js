import { graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout/layout';
import SEO from '../components/layout/seo';
import Bio from '../components/vegetables/Bio';

export default function DishDetails({ data }) {
  const { html } = data.DishDataDetails;
  console.log(html);
  const { title, date } = data.DishDataDetails.frontmatter;
  console.log(data);

  return (
    <Layout>
      <SEO title={title} />
      <Wrapper>
        <ContentWrapper>
          <Header>
            <Heading>{title}</Heading>
            <Date>{date}</Date>
          </Header>
          <HTML dangerouslySetInnerHTML={{ __html: html }} />
        </ContentWrapper>
      </Wrapper>
      <Author>Who the hell wrote this?</Author>
      <Bio />
    </Layout>
  );
}

export const query = graphql`
  query ($slug: String) {
    DishDataDetails: markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
      }
    }
  }
`;

const Wrapper = styled.section``;

const ContentWrapper = styled.main``;

const Header = styled.header`
  max-width: 630px;
  margin-bottom: 20px;
`;

const Heading = styled.h1`
  font-family: 'Montserrat', sans-serif;

  /* font-family: 'Recoleta'; */
  font-weight: 900;
  font-size: 35px;
  margin-bottom: 10px;
`;

const Date = styled.p`
  font-family: 'Merriweather', serif;
  font-weight: 300;
  font-size: 16px;
  line-height: 140%;
  letter-spacing: -2%;
`;

const Author = styled.p`
  font-size: 25px;
  font-family: 'Recoleta';
  font-weight: 600;
  padding-top: 10px;
  padding-bottom: 10px;
`;

const HTML = styled.div`
  font-family: 'Merriweather', serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 180%;
  color: rgb(32, 32, 32);

  h1,
  h2,
  h3,
  h4,
  h5 {
    font-family: 'Recoleta';
    margin-bottom: 2rem;
  }

  h2 {
    font-size: 26px;
    font-weight: 600;
  }

  p {
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }

  li {
    margin-bottom: 0.5rem;
  }
`;
