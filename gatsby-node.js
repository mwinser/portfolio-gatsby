const portfolio = require('./content/projects.json')
const path = require('path')
const IMAGE_PATH = './src/images/'


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
    // 1. Extract the project data.
    const {
      title,
      description,
      image,
      link,
      git,
      wip,
      codepen,
    } = project;

    const { name, ext } = path.parse(image);
    const absolutePath = path.resolve(__dirname, IMAGE_PATH, image);

    const data = {
      name,
      ext,
      absolutePath,
      extension: ext.substring(1), 
    };

    const imageNode = {
      ...data,
      id: createNodeId(`project-image-${name}`),
      internal: {
        type: 'PortfolioProjectImage',
        contentDigest: createContentDigest(data),
      },
    };

    actions.createNode(imageNode);

    const node = {
      title,
      description,
      imageNode,
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

    // 3. Create the node
    actions.createNode(node);
  });
};
