import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

export default function BlogSection() {
  const data = useStaticQuery(graphql`
    query MDXData {
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        nodes {
          slug
          excerpt
          frontmatter {
            title
            date(formatString: "Do MMMM YYYY")
          }
        }
      }
      site {
        siteMetadata {
          description
          title
        }
      }
    }
  `);
  // const data = useStaticQuery(graphql`
  //   query MyQuery {
  //     allMdx(sort: { order: DESC, fields: frontmatter___date }) {
  //       edges {
  //         node {
  //           frontmatter {
  //             title
  //             date(formatString: "Do MMMM YYYY")
  //           }
  //           excerpt
  //           slug
  //         }
  //       }
  //     }
  //   }
  // `);

  // const siteTitle = data.siteTitle.siteMetadata.title;
  const { allMdx, site } = data;
  console.log(allMdx, site);

  const siteTtile = site.siteMetadata.title;
  const siteDescription = site.siteMetadata.description;

  const posts = allMdx.nodes;

  return (
    <Wrapper>
      <h1>{siteTtile}</h1>
      <p>{siteDescription}</p>
      {posts.map(post => {
        const { title, date } = post.frontmatter;

        return (
          <div className="card">
            <h1 className="card-title">{title}</h1>
            <p className="card-date">{date}</p>
            <p className="card-description">{post.excerpt}</p>
          </div>
        );
      })}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  font-family: 'Recoleta';
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-weight: 600;
    font-size: 30px;
  }

  p {
    font-weight: 300;
    max-width: 200px;
    text-align: center;
  }
`;
