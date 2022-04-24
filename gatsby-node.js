exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
  type Mdx implements Node {
    frontmatter: MdxFrontmatter!
  }
  type MdxFrontmatter {
    mainDisplay: File @fileByRelativePath
    mainDisplayVideoMP4: File @fileByRelativePath
    mainDisplayVideoWEBM: File @fileByRelativePath
  }
`

  createTypes(typeDefs)
}
