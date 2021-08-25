const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const postTemplate = path.resolve('./src/templates/DishDetails.js');
  const { data } = await graphql(`
    query DishDetails {
      allMdx {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `);

  data.allMdx.nodes.forEach(node => {
    createPage({
      path: `${node.frontmatter.slug}`,
      component: postTemplate,
      context: { slug: node.frontmatter.slug },
    });
  });
};
