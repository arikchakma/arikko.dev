module.exports = {
  siteMetadata: {
    title: `Arik Chakma`,
    description: `A frontend chef, who is building his world.`,
    author: `@imarikchakma`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`,
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
        icon: `static/images/icons/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-styled-components`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
