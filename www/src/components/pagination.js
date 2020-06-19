/** @jsx jsx */
// Pagination from https://github.com/system-ui/theme-ui/blob/master/packages/sidenav/src/index.tsx
// Copyright (c) 2019 Brent Jackson
import React from 'react'
import { jsx } from 'theme-ui'

const flattenLinks = (children) =>
  React.Children.toArray(children).reduce((acc, child) => {
    if (React.isValidElement(child)) {
      if (child.props && child.props.mdxType === 'a') {
        return [...acc, child]
      }
      if (!child.props || !child.props.children) return acc
      return React.Children.toArray([
        ...acc,
        ...flattenLinks(child.props.children)
      ])
    }
    return acc
  }, [])

const PaginationLink = ({
  label,
  children,
  mdxType,
  originalType,
  parentName,
  ...props
}) => (
  <a
    {...props}
    sx={{
      fontSize: 1,
      color: 'inherit',
      textDecoration: 'none',
      fontWeight: 'bold'
    }}
  >
    <div>{label}</div>
    <div
      sx={{
        fontSize: 3
      }}
    >
      {children}
    </div>
  </a>
)

const Pagination = ({ pathname = '', children, ...props }) => {
  const links = flattenLinks(children)
  const index = links.findIndex(
    (link) => React.isValidElement(link) && link.props.href === pathname
  )
  const hasPagination = index > -1
  const previous = links[index - 1]
  const next = links[index + 1]

  return (
    <div
      {...props}
      sx={{
        display: 'flex'
      }}
    >
      {hasPagination && previous && React.isValidElement(previous) && (
        <PaginationLink {...previous.props} label='Previous:' />
      )}
      <div sx={{ mx: 'auto' }} />
      {hasPagination && next && React.isValidElement(next) && (
        <PaginationLink {...next.props} label='Next:' />
      )}
    </div>
  )
}

export default Pagination
