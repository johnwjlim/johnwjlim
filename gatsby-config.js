module.exports = {
  siteMetadata: {
    title: 'John Lim',
    description: 'John has a website! Nobody thought this day would ever come',
    author: '@johnwjlim',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'John Lim',
        short_name: 'johnwjlim',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `1mwb8avtjcbe`,
        accessToken: `d83b2c83ed68c141ed411a7aad1a336e70f06f668a0ed0896bf97c3b3fbcc1d2`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`
      },
    },
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        typekit: {
          id: `lfp2koe`
        }
      }
    },
  ],
}
