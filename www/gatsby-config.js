require('dotenv').config({
  path: `.env`
})

// Wrap ESM plugin to import them dynamically.
// require('...') -> await import('...')
const wrapESMPlugin = (name) =>
  function wrapESM(opts) {
    return async (...args) => {
      const mod = await import(name)
      const plugin = mod.default(opts)
      return plugin(...args)
    }
  }

module.exports = {
  pathPrefix: `/react-netlify-forms`,
  siteMetadata: {
    title: `react-netlify-forms`,
    description: `React components and hooks giving you the power of Netlify Forms. Start building serverless forms on Netlify with React.`,
    image: `/favicon.png`,
    siteUrl: `https://pyrax.github.io/react-netlify-forms/`
  },
  plugins: [
    `gatsby-plugin-catch-links`,
    'gatsby-plugin-theme-ui',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: `react-netlify-forms`,
        short_name: `react-netlify-forms`,
        start_url: `/`,
        background_color: `#f9fafa`,
        theme_color: `#1a6653`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`
      }
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        mdxOptions: {
          remarkPlugins: [
            wrapESMPlugin('remark-slug'),
            [wrapESMPlugin('remark-toc'), { tight: true }]
          ]
        }
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'components',
        path: './src/components/'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'readme',
        path: './README.md'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'license',
        path: './LICENSE.md'
      }
    }
  ]
}
