import { graphql, Link, useStaticQuery } from 'gatsby';
// import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

export default function BlogSection() {
  // Getting all dishes: posts data from MDX
  const data = useStaticQuery(graphql`
    query DishData {
      Dish: allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
        nodes {
          frontmatter {
            title
            spoiler
            date(formatString: "Do MMMM YYYY")
            slug
          }
          id
        }
      }
    }
  `);
  const dishes = data.Dish.nodes;
  return (
    <Wrapper>
      {dishes.map(dish => {
        const { id } = dish;
        const { title, spoiler, date, slug } = dish.frontmatter;

        return (
          <ContentWrapper key={id}>
            <ArticleWrapper>
              <HeaderWrapper>
                <Header>
                  <Link to={slug}>{title}</Link>
                </Header>
                <Small>{date} • ☕️☕️☕️ 14 min read</Small>
              </HeaderWrapper>
            </ArticleWrapper>
            <Spoiler>{spoiler}</Spoiler>
          </ContentWrapper>
        );
      })}
    </Wrapper>
  );
}

const Wrapper = styled.section``;

const ContentWrapper = styled.article`
  margin-bottom: 40px;
`;

const ArticleWrapper = styled.div``;

const HeaderWrapper = styled.header`
  margin-bottom: 10px;
`;

const Header = styled.h3`
  a {
    font-family: 'Montserrat', sans-serif;
    font-weight: 900;
    font-size: 28px;
    line-height: 140%;
    margin-bottom: 10px;
    text-decoration: none;
    cursor: pointer;
  }
`;

const Small = styled.small`
  font-size: 14px;
`;

const Spoiler = styled.p``;
