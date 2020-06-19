import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

function SEO(props) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )
  const { title, description } = props.pageContext.frontmatter || {}

  const metaTitle = title || site.siteMetadata.title
  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang: 'en-US'
      }}
      title={metaTitle}
      titleTemplate={title ? `%s | ${site.siteMetadata.title}` : null}
      meta={[
        {
          name: `description`,
          content: metaDescription
        },
        {
          property: `og:title`,
          content: metaTitle
        },
        {
          property: `og:description`,
          content: metaDescription
        },
        {
          property: `og:type`,
          content: `website`
        },
        {
          name: `twitter:card`,
          content: `summary`
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author
        },
        {
          name: `twitter:title`,
          content: metaTitle
        },
        {
          name: `twitter:description`,
          content: metaDescription
        }
      ]}
    />
  )
}

export default SEO
