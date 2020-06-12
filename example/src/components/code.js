/** @jsx jsx */
import { jsx, ThemeProvider, BaseStyles } from 'theme-ui'
import Prism from '@theme-ui/prism'
import { LiveProvider, LiveEditor, LivePreview, LiveError } from 'react-live'
import * as themeUI from 'theme-ui'
import * as reactNetlifyForms from 'react-netlify-forms'
import { previewTheme } from '../gatsby-plugin-theme-ui/index'

const GATSBY_SITE_RECAPTCHA_KEY = process.env.GATSBY_SITE_RECAPTCHA_KEY

const scope = {
  ...themeUI,
  ...reactNetlifyForms, // inject all exports from react-netlify-forms
  GATSBY_SITE_RECAPTCHA_KEY,
  Link: (props) => {
    if (props.activeClassName)
      return <span className={props.activeClassName} {...props} />
    return <span {...props} sx={{ cursor: 'pointer' }} />
  }
}

const injectJsx = (src) => `/** @jsx jsx */\n<>${src}</>`

export const LiveCode = ({ children }) => (
  <LiveProvider code={children} scope={scope} transformCode={injectJsx}>
    <BaseStyles>
      <div
        sx={{
          p: 2
        }}
      >
        <ThemeProvider theme={previewTheme}>
          <BaseStyles>
            <LivePreview />
          </BaseStyles>
        </ThemeProvider>
        <LiveError
          sx={{
            variant: 'alerts.danger',
            p: 3,
            mt: 4,
            mb: 2
          }}
        />
      </div>
      <pre
        sx={{
          my: 4
        }}
      >
        <LiveEditor padding={0} />
      </pre>
    </BaseStyles>
  </LiveProvider>
)

export default (props) => {
  if (props.live) {
    return <LiveCode {...props} />
  }
  return <Prism {...props} />
}
