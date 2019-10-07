module.exports = {
  siteMetadata: {
    title: `Stephen Zhao`,
    description: `Stephen's personal website`,
    author: `@stephen-zhao`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/data/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Stephen Zhao`,
        short_name: `Stephen Zhao`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        //icon: `src/images/gatsby-icon.png`, // TODO: add personal icon
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-typescript`,
    // TODO: enable offline functionality
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
