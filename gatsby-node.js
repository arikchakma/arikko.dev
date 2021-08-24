const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const postTemplate = path.resolve('./src/templates/DishDetails.js');
  const { data } = await graphql(`
    query DishDetails {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        nodes {
          id
          frontmatter {
            slug
          }
        }
      }
    }
  `);

  // data.Dish.nodes.forEach(node => {
  //   actions.createPage({
  //     path: `${node.frontmatter.slug}`,
  //     component: path.resolve(`./src/templates/DishDetails.js`),
  //     context: {
  //       slug: node.frontmatter.slug,
  //     },
  //   });
  // });

  data.allMarkdownRemark.nodes.forEach(node => {
    createPage({
      path: `${node.frontmatter.slug}`,
      component: postTemplate,
      context: {
        id: node.id,
        slug: node.frontmatter.slug,
      },
    });
  });
};
