(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{pfKO:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return i})),n.d(t,"default",(function(){return l}));n("rGqo"),n("Btvt"),n("91GP"),n("mXGw");var a=n("7ljp");var r,s=(r="Alert",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),Object(a.b)("div",e)}),o={_frontmatter:{}};function c(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["components"]);return Object(a.b)("wrapper",Object.assign({},o,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("center",null,Object(a.b)("h1",{style:{display:"none"}},"react-netlify-forms"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"React components and hooks giving you the power of Netlify Forms. Start building serverless forms on Netlify with React. Honeypot fields and reCAPTCHA are included as ready-to-use components.")),Object(a.b)("p",null,Object(a.b)("a",Object.assign({parentName:"p"},{href:"https://www.npmjs.com/package/react-netlify-forms"}),Object(a.b)("img",Object.assign({parentName:"a"},{src:"https://flat.badgen.net/npm/v/react-netlify-forms",alt:"NPM"}))),"\n",Object(a.b)("a",Object.assign({parentName:"p"},{href:"https://www.npmjs.com/package/react-netlify-forms"}),Object(a.b)("img",Object.assign({parentName:"a"},{src:"https://flat.badgen.net/bundlephobia/minzip/react-netlify-forms",alt:"minzipped package size"}))),"\n",Object(a.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/Pyrax/react-netlify-forms/actions"}),Object(a.b)("img",Object.assign({parentName:"a"},{src:"https://flat.badgen.net/github/status/Pyrax/react-netlify-forms",alt:"Build status"}))),"\n",Object(a.b)("a",Object.assign({parentName:"p"},{href:"https://standardjs.com"}),Object(a.b)("img",Object.assign({parentName:"a"},{src:"https://flat.badgen.net/badge/code%20style/standard/f2a",alt:"JavaScript Style Guide"}))),"\n",Object(a.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/Pyrax/react-netlify-forms/blob/master/LICENSE.md"}),Object(a.b)("img",Object.assign({parentName:"a"},{src:"https://flat.badgen.net/github/license/Pyrax/react-netlify-forms",alt:"License"})))),Object(a.b)("div",{style:{display:"none"},"aria-hidden":!0},Object(a.b)("p",null,Object(a.b)("a",Object.assign({parentName:"p"},{href:"https://pyrax.github.io/react-netlify-forms"}),"Go to documentation with live demo.")))),Object(a.b)("h2",{id:"features"},"Features"),Object(a.b)("p",null,"It gives you all the features of Netlify Forms as simple and ",Object(a.b)("strong",{parentName:"p"},"reusable")," React components which have been tested on Netlify."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Default form handlers with support for file uploads."),Object(a.b)("li",{parentName:"ul"},"Spam prevention through included honeypot and reCAPTCHA components."),Object(a.b)("li",{parentName:"ul"},"Can be used alone or together with form libraries such as Formik or react-hook-form.")),Object(a.b)(s,{variant:"muted",mdxType:"Alert"},Object(a.b)("h2",{id:"before-using"},"Before using"),Object(a.b)("p",null,"This component must be used with Server-Side Rendering (SSR) because Netlify\nsearches for a ",Object(a.b)("inlineCode",{parentName:"p"},"data-netlify")," attribute on HTML ",Object(a.b)("inlineCode",{parentName:"p"},"form")," tags to setup their\nForms backend for you."),Object(a.b)("p",null,"➡️ ",Object(a.b)("em",{parentName:"p"},"Suggestions for SSR: GatsbyJS, Next.js, react-static"))),Object(a.b)("h2",{id:"install"},"Install"),Object(a.b)("p",null,"Either install with NPM via:"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"npm install --save react-netlify-forms\n")),Object(a.b)("p",null,"or with YARN via:"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"yarn add react-netlify-forms\n")),Object(a.b)("h2",{id:"usage"},"Usage"),Object(a.b)("p",null,"In the following example a contact form with two inputs and a honeypot for extra spam prevention is shown. It also works without JavaScript by falling back to a serverside-rendered form which just submits data with an usual POST request:"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),"import React, { Component } from 'react'\n\nimport { NetlifyForm, Honeypot } from 'react-netlify-forms'\n\nexport default ContactForm = () => (\n  <NetlifyForm name='Contact' action='/thanks' honeypotName='bot-field'>\n    {({ handleChange, success, error }) => (\n      <>\n        <Honeypot />\n        {success && <p>Thanks for contacting us!</p>}\n        {error && (\n          <p>Sorry, we could not reach our servers. Please try again later.</p>\n        )}\n        <div>\n          <label htmlFor='name'>Name:</label>\n          <input type='text' name='name' id='name' onChange={handleChange} />\n        </div>\n        <div>\n          <label htmlFor='message'>Message:</label>\n          <textarea\n            type='text'\n            name='message'\n            id='message'\n            rows='4'\n            onChange={handleChange}\n          />\n        </div>\n        <div>\n          <button type='submit'>Submit</button>\n        </div>\n      </>\n    )}\n  </NetlifyForm>\n)\n")),Object(a.b)("p",null,"For more examples please browse through our website."),Object(a.b)("h2",{id:"license"},"License"),Object(a.b)("p",null,"MIT © ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/Pyrax"}),"Björn Clees")),Object(a.b)("hr",null),Object(a.b)("p",null,"Thanks to ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"https://www.npmjs.com/package/create-react-library"}),"create-react-library")," for providing quick setup for NPM packages."))}c.isMDXComponent=!0;var i={},b={_frontmatter:i};function l(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["components"]);return Object(a.b)("wrapper",Object.assign({},b,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("center",null,Object(a.b)("img",{src:"cover.png",alt:"react-netlify-forms",title:"react-netlify-forms",style:{padding:"1rem 0.5rem 0rem 0.5rem",maxHeight:"140px"}})),Object(a.b)(c,{mdxType:"Readme"}))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-index-mdx-6ca5dd4dc04c34c21ee4.js.map