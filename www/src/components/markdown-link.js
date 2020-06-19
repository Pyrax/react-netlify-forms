import React from 'react'
import { Link } from 'gatsby'

const isExternal = (path) =>
  path.startsWith('http://') ||
  path.startsWith('https://') ||
  path.startsWith('//')

// TODO: remove this temporary workaround for https://github.com/gatsbyjs/gatsby/issues/22989
const removePathPrefix = (path) => path.replace(/(react-netlify-forms\/)/g, '')

export const MarkdownNavLink = (props) => <MarkdownLink {...props} navLink />

export const MarkdownLink = ({
  children,
  href,
  to,
  navLink = false,
  ...props
}) => {
  const target = removePathPrefix(to || href)

  const linkProps = navLink ? { activeClassName: 'active' } : null

  return isExternal(href) ? (
    <a {...props} href={href}>
      {children}
    </a>
  ) : (
    <Link {...props} to={target} {...linkProps}>
      {children}
    </Link>
  )
}

export default MarkdownLink
