import { graphql, Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout/layout';
import SEO from '../components/layout/seo';
import Bio from '../components/vegetables/Bio';

export default function DishDetails({ data }) {
  const { body } = data.DishDataDetails;
  const { title, date, spoiler } = data.DishDataDetails.frontmatter;
  const { previous, next } = data;

  return (
    <Layout>
      <SEO title={title} description={spoiler} />
      <Wrapper>
        <ContentWrapper>
          {/* Header */}
          <Header>
            <Heading>{title}</Heading>
            <Date>{date}</Date>
          </Header>
          {/*
           * This one is for MD
           * <HTML dangerouslySetInnerHTML={{ __html: html }} />
           */}
          <HTML>
            {/* This one is for MDX */}
            <MDXRenderer>{body}</MDXRenderer>
          </HTML>
        </ContentWrapper>
      </Wrapper>
      <nav className="blog-post-nav">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={`/${previous.slug}`} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={`/${next.slug}`} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
      {/* Footer */}
      <Author>Who the hell wrote this?</Author>
      <Bio />
    </Layout>
  );
}

// Quering data from GraphGl
export const query = graphql`
  query ($id: String, $prevDishId: String, $nextDishId: String) {
    DishDataDetails: mdx(id: { eq: $id }) {
      body
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        spoiler
      }
    }
    previous: mdx(id: { eq: $prevDishId }) {
      slug
      frontmatter {
        title
      }
    }
    next: mdx(id: { eq: $nextDishId }) {
      slug
      frontmatter {
        title
      }
    }
  }
`;

// Styling

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

    a {
      display: none;
      margin-right: 5px;
    }

    :hover a {
      display: inline-block;
    }
  }

  p {
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }

  li {
    margin-bottom: 0.5rem;
  }
`;
