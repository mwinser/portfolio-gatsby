const portfolio = require('./content/projects.json')


exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })
}

exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  portfolio.content.map((project) => {

    const {
      title,
      description,
      image,
      link,
      git,
      wip,
      codepen,
    } = project;

    const node = {
      title,
      description,
      image,
      link,
      git,
      wip,
      codepen,
      id: createNodeId(`project-${title}`),
      internal: {
        type: 'PortfolioProject',
        contentDigest: createContentDigest(project),
      },
    };


    actions.createNode(node);
  });
};
