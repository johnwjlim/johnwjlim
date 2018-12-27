/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
// const path = require('path')

// exports.createPages = ({ graphql, actions }) => {
//   const { createPage } = actions
//   return new Promise(( resolve, reject ) => {
//     const postTemplate = path.resolve('./src/templates/post.jsx')

//     graphql(`
//       {
//         allContentfulPost {
//           edges {
//             node {
//               id
//               slug
//             }
//           }
//         }
//       }
//     `).then((result) => {
//       if (result.errors) {
//         reject(result.errors)
//       }
//       result.data.allContentfulPost.edges.forEach((edge) => {
//         createPage ({
//           path: `/post/${edge.node.slug}`,
//           component: postTemplate,
//           context: {
//             slug: edge.node.slug
//           }
//         })
//       })
//     })

//     resolve()
//   })
// }