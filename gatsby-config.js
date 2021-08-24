module.exports = {
  siteMetadata: {
    title: `Arik Chakma`,
    description: `A frontend chef, who is building his world.`,
    author: `@imarikchakma`,
    keywords: `Arik Chakma, Arikko, Arik, Chakma, arikko.dev, Arik Chakma dev, Mr Shadow Whisper`,
    image: `https://arikko-dev.s3.us-east-2.amazonaws.com/images/hero-og.jpg`,
  },
  plugins: [
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          'gatsby-remark-autolink-headers',
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              inlineCodeMarker: '÷',
            },
          },
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
            },
          },
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/content/posts`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Arik Chakma`,
        short_name: `Arikko`,
        start_url: `/`,
        background_color: `#07090E`,
        theme_color: `#07090E`,
        display: `minimal-ui`,
        icon: `static/images/icons/favicon.svg`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-styled-components`,
  ],
};
