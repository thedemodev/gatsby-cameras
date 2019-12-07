const path = require(`path`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allDirectusCamera {
            edges {
              node {
                directusId
              }
            }
        }
      }    
    `).then(results => {
      results.data.allDirectusCamera.edges.forEach(({node}) => {
        createPage({
          path: `/cameras/${node.directusId}`,
          component: path.resolve(`./src/components/CameraDetail.js`),
          context: {
            directusId: node.directusId,
          },
        });
      })
      resolve();
    })
  });
}