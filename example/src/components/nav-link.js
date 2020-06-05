/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'

const styles = {}

export default ({ href, to, ...props }) => {
  const isExternal = href.startsWith('http') // covers http and https
  const target = to || href
  return isExternal ? (
    <a {...props} href={href} sx={styles} />
  ) : (
    <Link
      as={Link}
      {...props}
      to={target}
      activeClassName='active'
      sx={styles}
    />
  )
}
