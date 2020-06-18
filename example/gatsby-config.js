require('dotenv').config({
  path: `.env`
})

module.exports = {
  pathPrefix: `/react-netlify-forms`,
  siteMetadata: {
    title: `react-netlify-forms`,
    description: `Reusable and customizable component for using Netlify Forms.`,
    author: `Pyrax`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: ['.mdx', '.md'],
        remarkPlugins: [
          require('remark-slug'),
          [require('remark-toc'), { tight: true }],
          require('remark-abbr')
        ]
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `react-netlify-forms`,
        short_name: `Forms example`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`
      }
    }
  ]
}
