/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import React from 'react'
import { Location } from '@reach/router'
import { Container } from '@theme-ui/components'
import { Global } from '@emotion/core'

import SEO from './seo'
import NavLink from './nav-link'
import MenuLinks from './menu-links.mdx'
import Sidenav from './sidenav'
import Pagination from './pagination'

const sidenavComponents = {
  wrapper: Sidenav,
  a: NavLink
}

const paginationComponents = {
  wrapper: Pagination
}

const Layout = ({ children, ...props }) => (
  <>
    <SEO {...props} />
    <Global
      styles={(theme) => ({
        'html, body, #___gatsby, #gatsby-focus-wrapper': { height: '100%' } // sticky footer
      })}
    />
    <div
      sx={{
        display: 'grid',
        gridTemplateColumns: ['100%', null, '1fr 2fr', '1fr 2fr 1fr'],
        gridTemplateRows: ['1fr auto', null, '100%'],
        minHeight: '100%' // sticky footer
      }}
    >
      <MenuLinks
        components={sidenavComponents}
        sx={{
          py: [null, null, 3],
          borderTop: (theme) => `2px solid ${theme.colors.muted}`
        }}
      />
      <Container px={[3, null, 0]} py={[2, null, 3]}>
        <main>
          {children}
          {
            <Location
              children={({ location }) => (
                <MenuLinks
                  sx={{ py: 4 }}
                  pathname={location.pathname}
                  components={paginationComponents}
                />
              )}
            />
          }
        </main>
        <footer sx={{ py: 2, textAlign: 'center' }}>
          © {new Date().getFullYear()} Björn Clees, made with &#10084;
          {` `}
          <Styled.a href='https://www.gatsbyjs.org'>Gatsby</Styled.a>
        </footer>
      </Container>
    </div>
  </>
)

export default Layout
