/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${___dirname}/src/pages`,
      },
    },
  ],
  siteMetadata: {
    title: "Web Warrior",
    description: "web dev portfolio",
    copyright: "This website is copyright 2023"
  }
}
