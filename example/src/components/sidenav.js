/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'

const createNestedLinks = (children, depth = 0) =>
  React.Children.toArray(children).reduce((acc, child) => {
    if (!React.isValidElement(child)) {
      return acc
    }
    const type = child.props && child.props.mdxType
    if (!child.props || !child.props.children) return acc
    if (type === 'a') return [...acc, child]
    if (depth > 0 && type === 'ul') {
      const last = acc[acc.length - 1]
      acc[acc.length - 1] = React.cloneElement(last, {
        links: createNestedLinks(child.props.children)
      })
      return acc
    }
    return [...acc, ...createNestedLinks(child.props.children, depth + 1)]
  }, [])

const NavList = ({ LinkComponent, links, depth = 0 }) => (
  <ul
    as='nav'
    sx={{
      listStyle: 'none',
      p: 0,
      m: 0,
      display: [depth ? 'none' : 'flex', depth ? 'none' : 'flex', 'flex'],
      flexFlow: ['row nowrap', null, 'column'],
      flex: '1 1',
      borderTop: 'border-top'
    }}
  >
    {links.map((link, i) => (
      <li
        key={i}
        sx={{
          display: ['flex', null, 'list-item'],
          flex: '1 1'
        }}
      >
        <LinkComponent
          href={link.props.href}
          children={link.props.children}
          className={link.props.className}
          sx={{
            variant: 'links.nav',
            flex: '1 1',
            display: ['flex', null, 'block'],
            flexDirection: 'column',
            alignItems: 'center',
            height: ['100%', null, 'auto'],
            pl: (depth + 1) * 2,
            pr: 2,
            py: [3, null, 2]
          }}
        />
        {link.props.links && (
          <NavList
            LinkComponent={LinkComponent}
            links={link.props.links}
            depth={depth + 1}
          />
        )}
      </li>
    ))}
  </ul>
)

const Sidenav = React.forwardRef(
  ({ children, components = {}, className, ...props }, ref) => {
    const links = createNestedLinks(children)
    const Link = components.a || 'a'

    return (
      <aside
        ref={ref}
        className={className}
        sx={{
          gridRow: [2, null, 1],
          position: 'sticky',
          top: [null, null, 0],
          left: 0,
          bottom: 0,
          zIndex: 1,
          width: [null, null, 256],
          maxHeight: ['none', null, '100vh'],
          overflowX: 'visible',
          overflowY: 'auto',
          bg: 'background'
        }}
      >
        <div sx={{ p: [0, null, 3] }}>
          <NavList links={links} LinkComponent={Link} />
        </div>
      </aside>
    )
  }
)

export default Sidenav
