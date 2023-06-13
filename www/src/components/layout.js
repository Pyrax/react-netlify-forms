/** @jsx jsx */
import { jsx, Themed } from 'theme-ui'
import { MDXProvider } from '@mdx-js/react'
import { Location } from '@reach/router'
import { Container } from '@theme-ui/components'
import { Global } from '@emotion/react'

import { SEO } from './seo'
import { MarkdownNavLink, MarkdownLink } from './markdown-link'
import MenuLinks from './menu-links.mdx'
import Sidenav from './sidenav'
import Pagination from './pagination'

const sidenavComponents = {
  wrapper: Sidenav,
  a: MarkdownNavLink
}

const paginationComponents = {
  wrapper: Pagination,
  a: MarkdownLink
}

const Layout = ({ children, ...props }) => (
  <MDXProvider>
    <SEO {...props} />
    <Global
      styles={{
        'html, body, #___gatsby, #gatsby-focus-wrapper': { height: '100%' } // sticky footer
      }}
    />
    <div
      sx={{
        display: 'grid',
        gridTemplateColumns: ['auto', null, '1fr 2fr', '1fr 2fr 1fr'],
        gridTemplateRows: ['1fr auto', null, 'auto'],
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
      <Container px={[3, null, null, 0]} py={[2, null, 3]}>
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
          © {new Date().getFullYear()} Björn Clees, made with &#10084; using
          {` `}
          {/* eslint-disable-next-line react/jsx-pascal-case */}
          <Themed.a href='https://www.gatsbyjs.org'>Gatsby</Themed.a>
        </footer>
      </Container>
    </div>
  </MDXProvider>
)

export default Layout
