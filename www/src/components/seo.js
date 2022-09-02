import React from 'react'
import { useSiteMetadata } from '../hooks/use-site-metadata'

export const SEO = ({ title, subtitle, description, pathname, children }) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    image,
    siteUrl
  } = useSiteMetadata()

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}${pathname || ``}`
  }

  const fullTitle = subtitle ? `${subtitle} | ${seo.title}` : seo.title

  return (
    <>
      <title>{fullTitle}</title>
      <meta name='description' content={seo.description} />
      <meta name='image' content={seo.image} />

      <meta property='og:title' content={fullTitle} />
      <meta property='og:description' content={seo.description} />
      <meta property='og:type' content='website' />
      <meta property='og:site_name' content={seo.title} />

      <link rel='icon' type='image/png' href='/favicon.png' />
      {children}
    </>
  )
}
