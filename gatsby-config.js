module.exports = {
  siteMetadata: {
    title: `John Lim`,
    description: `I'm an Experience Designer and Front End Developer`,
    author: `John Lim`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        // icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['EB Garamond\:300,400,500,600,700', 'Inter\:100,200,300,400,500,600,650,700,800']
        },
        custom: {
          families: ['Untitled Sans\:300,400,500,700,900', 'Founders Grotesk\:400,500,600'],
          urls: ["/fonts/fonts.css"]
        }
      }
    },
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        threshold: 0.1,
        once: true,
        disable: false,
      }
    },
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-netlify-cache`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}


/**
 * TODO: implement gatsby-plugin-react-redux??
 * https://www.gatsbyjs.org/packages/gatsby-plugin-react-redux/
 */
