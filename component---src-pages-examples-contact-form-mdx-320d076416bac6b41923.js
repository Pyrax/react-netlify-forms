(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{EtHM:function(n,e,t){"use strict";t.r(e),t.d(e,"_frontmatter",(function(){return o})),t.d(e,"default",(function(){return s}));t("rGqo"),t("Btvt"),t("91GP"),t("mXGw");var a=t("7ljp");var o={title:"Contact form example"},r={_frontmatter:o};function s(n){var e=n.components,t=function(n,e){if(null==n)return{};var t,a,o={},r=Object.keys(n);for(a=0;a<r.length;a++)t=r[a],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,["components"]);return Object(a.b)("wrapper",Object.assign({},r,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"contact-form"},"Contact form"),Object(a.b)("p",null,"First, import required components in your class or function:"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"import { NetlifyForm, Honeypot } from 'react-netlify-forms'\n")),Object(a.b)("p",null,"Then, you can use the ",Object(a.b)("inlineCode",{parentName:"p"},"NetlifyForm")," component in place of the standard form tag. It will provide you form handlers, which manage submitting data to Netlify. Play around and modify this interactive example (",Object(a.b)("inlineCode",{parentName:"p"},"sx")," is used for styling):"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<NetlifyForm\n  name='Contact'\n  action='/thanks'\n  honeypotName='bot-field'\n  onSuccess={(response, context) => {\n    console.log('Successfully sent form data to Netlify Server')\n    context.formRef.current.reset()\n  }}\n>\n  {({ handleChange, success, error }) => (\n    <>\n      <Honeypot />\n      {success && (\n        <p sx={{ variant: 'alerts.success', p: 3 }}>\n          Thanks for contacting us!\n        </p>\n      )}\n      {error && (\n        <p sx={{ variant: 'alerts.muted', p: 3 }}>\n          Sorry, we could not reach servers. Because it only works on Netlify,\n          our GitHub demo does not provide a response.\n        </p>\n      )}\n      <div>\n        <label htmlFor='name' sx={{ variant: 'forms.label' }}>\n          Name:\n        </label>\n        <input\n          type='text'\n          name='name'\n          id='name'\n          onChange={handleChange}\n          sx={{ variant: 'forms.input' }}\n        />\n      </div>\n      <div sx={{ pt: 2 }}>\n        <label htmlFor='message' sx={{ variant: 'forms.label' }}>\n          Message:\n        </label>\n        <textarea\n          type='text'\n          name='message'\n          id='message'\n          rows='4'\n          onChange={handleChange}\n          sx={{ variant: 'forms.textarea' }}\n        />\n      </div>\n      <div sx={{ pt: 3 }}>\n        <button type='submit' sx={{ variant: 'buttons.success' }}>\n          Submit\n        </button>\n        <button type='reset' sx={{ variant: 'buttons.danger' }}>\n          Reset\n        </button>\n      </div>\n    </>\n  )}\n</NetlifyForm>\n")))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-examples-contact-form-mdx-320d076416bac6b41923.js.map