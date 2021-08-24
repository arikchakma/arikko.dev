const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query DishDetails {
      Dish: allMarkdownRemark {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `);

  data.Dish.nodes.forEach(node => {
    actions.createPage({
      path: node.frontmatter.slug,
      component: path.resolve(`./src/templates/DishDetails.js`),
      context: {
        slug: node.frontmatter.slug,
      },
    });
  });
};
