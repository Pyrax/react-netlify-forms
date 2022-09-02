"use strict";(self.webpackChunkreact_netlify_forms_www=self.webpackChunkreact_netlify_forms_www||[]).push([[439],{92190:function(n,e,t){t.r(e),t.d(e,{_frontmatter:function(){return s},default:function(){return l}});var a=t(63366),o=(t(27378),t(64983)),r=["components"],s={title:"Contact form example"},i={_frontmatter:s};function l(n){var e=n.components,t=(0,a.Z)(n,r);return(0,o.kt)("wrapper",Object.assign({},i,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"contact-form"},"Contact form"),(0,o.kt)("p",null,"First, import required components in your class or function:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { NetlifyForm, Honeypot } from 'react-netlify-forms'\n")),(0,o.kt)("p",null,"Then, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"NetlifyForm")," component in place of the standard form tag. It will provide you form handlers, which manage submitting data to Netlify. Play around and modify this interactive example (",(0,o.kt)("inlineCode",{parentName:"p"},"sx")," is used for styling):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<NetlifyForm\n  name='Contact'\n  action='/thanks'\n  honeypotName='bot-field'\n  onSuccess={(response, context) => {\n    console.log('Successfully sent form data to Netlify Server')\n    context.formRef.current.reset()\n  }}\n>\n  {({ handleChange, success, error }) => (\n    <>\n      <Honeypot />\n      {success && (\n        <p sx={{ variant: 'alerts.success', p: 3 }}>\n          Thanks for contacting us!\n        </p>\n      )}\n      {error && (\n        <p sx={{ variant: 'alerts.muted', p: 3 }}>\n          Sorry, we could not reach servers. Because it only works on Netlify,\n          our GitHub demo does not provide a response.\n        </p>\n      )}\n      <div>\n        <label htmlFor='name' sx={{ variant: 'forms.label' }}>\n          Name:\n        </label>\n        <input\n          type='text'\n          name='name'\n          id='name'\n          onChange={handleChange}\n          sx={{ variant: 'forms.input' }}\n        />\n      </div>\n      <div sx={{ pt: 2 }}>\n        <label htmlFor='message' sx={{ variant: 'forms.label' }}>\n          Message:\n        </label>\n        <textarea\n          type='text'\n          name='message'\n          id='message'\n          rows='4'\n          onChange={handleChange}\n          sx={{ variant: 'forms.textarea' }}\n        />\n      </div>\n      <div sx={{ pt: 3 }}>\n        <button type='submit' sx={{ variant: 'buttons.success' }}>\n          Submit\n        </button>\n        <button type='reset' sx={{ variant: 'buttons.danger' }}>\n          Reset\n        </button>\n      </div>\n    </>\n  )}\n</NetlifyForm>\n")))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-examples-contact-form-mdx-8c191b9cc40928f1e36f.js.map