const React = require('react')
const Layout = require('./src/components/layout').default

exports.wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}

exports.onRenderBody = ({ setHtmlAttributes }) => {
  setHtmlAttributes({ lang: 'en' })
}
