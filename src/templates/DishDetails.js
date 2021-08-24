import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
// import styled from 'styled-components';
import Layout from '../components/layout/layout';
// import SEO from '../components/layout/seo';

export default function DishDetails() {
  const data = useStaticQuery(graphql`
    query MyQuery($eq: String) {
      DishDataDetails: markdownRemark(frontmatter: { slug: { eq: $eq } }) {
        frontmatter {
          title
          date(formatString: "Do MMMM YYYY")
        }
        html
      }
    }
  `);

  console.log(data);

  // const { html } = data.DishDataDetails;
  // console.log(html);
  // const { title, date } = data.DishDataDetails.frontmatter;

  return (
    <Layout>
      {/* <SEO title={title} />
      <Wrapper>
        <ContentWrapper>
          <Header>
            <Heading>{title}</Heading>
            <Date>{date}</Date>
          </Header>
          <HTML dangerouslySetInnerHTML={{ __html: html }} />
        </ContentWrapper>
      </Wrapper> */}
      Hello
    </Layout>
  );
}

// const Wrapper = styled.section``;

// const ContentWrapper = styled.main``;

// const Header = styled.header`
//   max-width: 630px;
//   margin-bottom: 20px;
// `;

// const Heading = styled.h1`
//   /* font-family: 'Recoleta'; */
//   font-weight: 900;
//   font-size: 35px;
//   margin-bottom: 10px;
// `;

// const Date = styled.p`
//   font-family: 'Merriweather', serif;
//   font-weight: 300;
//   font-size: 14px;
//   line-height: 140%;
//   letter-spacing: -2%;
// `;

// const HTML = styled.div`
//   font-family: 'Merriweather', serif;
//   font-size: 14px;
//   font-weight: 300;
//   line-height: 160%;
//   color: rgb(32, 32, 32);

//   h1,
//   h2,
//   h3,
//   h4,
//   h5 {
//     font-family: 'Recoleta';
//     margin-bottom: 1rem;
//   }

//   h2 {
//     font-size: 26px;
//     font-weight: 600;
//   }

//   p {
//     margin-bottom: 1rem;
//   }
// `;
