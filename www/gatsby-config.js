require('dotenv').config({
  path: `.env`
})

module.exports = {
  pathPrefix: `/react-netlify-forms`,
  siteMetadata: {
    title: `react-netlify-forms`,
    description: `Netlify Forms as components and hook with default form handlers.`,
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
        short_name: `react-netlify-forms`,
        start_url: `/`,
        background_color: `#f9fafa`,
        theme_color: `#1a6653`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`
      }
    }
  ]
}
