"use strict";(self.webpackChunkreact_netlify_forms_www=self.webpackChunkreact_netlify_forms_www||[]).push([[395],{75012:function(t,e,n){n.r(e),n.d(e,{_frontmatter:function(){return p},default:function(){return d}});var a=n(63366),l=n(27378),r=n(64983),i=n(83441),o=["components"],p={title:"Documentation"},m={_frontmatter:p};function d(t){var e=t.components,n=(0,a.Z)(t,o);return(0,r.kt)("wrapper",Object.assign({},m,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"documentation"},"Documentation"),(0,r.kt)("h2",{id:"table-of-contents"},"Table of Contents"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#components"},"Components"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#netlifyform"},"NetlifyForm")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#usenetlifyform"},"useNetlifyForm")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#netlifyformprovider"},"NetlifyFormProvider")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#netlifyformcontext"},"NetlifyFormContext")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#usenetlifyformcontext"},"useNetlifyFormContext")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#netlifyformcomponent"},"NetlifyFormComponent")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#honeypot"},"Honeypot")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#recaptcha"},"reCAPTCHA"))))),(0,r.kt)("h2",{id:"components"},"Components"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"netlifyform"},"NetlifyForm"),(0,r.kt)("p",null,"Initializes state and functions with ",(0,r.kt)("inlineCode",{parentName:"p"},"useNetlifyForm")," and provides them with a context with ",(0,r.kt)("inlineCode",{parentName:"p"},"<NetlifyFormProvider/>"),". Renders a form using ",(0,r.kt)("inlineCode",{parentName:"p"},"<NetlifyFormComponent/>")," inside the context."),(0,r.kt)("p",null,"Available props:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Req"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"children"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"Children rendered inside the form like inputs.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"formProps"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"Additional props for the ",(0,r.kt)("inlineCode",{parentName:"td"},"<NetlifyFormComponent/>"),". Can be used to override default methods like ",(0,r.kt)("inlineCode",{parentName:"td"},"onSubmit")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"onReset"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"props"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"Passed as arguments to ",(0,r.kt)("inlineCode",{parentName:"td"},"useNetlifyForm")," for setting options for the Netlify Form.")))),(0,r.kt)("h3",{id:"usenetlifyform"},"useNetlifyForm"),(0,r.kt)("p",null,"Hook used by ",(0,r.kt)("inlineCode",{parentName:"p"},"<NetlifyForm />")," to create handlers and state which are used inside the form context."),(0,r.kt)("p",null,"Available props:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Req"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the form.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"action"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"Form action to fallback to when JavaScript is disabled.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"honeypotName"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"Needed when a honeypot is used because SSR needs to know it in advance.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"enableRecaptcha"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"Set this if reCAPTCHA is used because SSR needs to know it in advance.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onSuccess"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"Handler when data has been submitted to Netlify.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onFailure"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"Handler when Netlify sent an error.")))),(0,r.kt)("h3",{id:"netlifyformprovider"},"NetlifyFormProvider"),(0,r.kt)("p",null,"Providing values to ",(0,r.kt)("inlineCode",{parentName:"p"},"NetlifyFormContext"),"."),(0,r.kt)("p",null,"Available props:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Req"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"children"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"Children of context.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"props"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"Context values.")))),(0,r.kt)("h3",{id:"netlifyformcontext"},"NetlifyFormContext"),(0,r.kt)("p",null,"Form context which exposes form state, handlers and actions for consumers."),(0,r.kt)(i.NetlifyForm,{mdxType:"NetlifyForm"},(function(t){return(0,r.kt)(l.Fragment,null,"These are the props available through context:"," ",(0,r.kt)("ul",{sx:{variant:"list.inline"}},Object.keys(t).map((function(t){return(0,r.kt)("li",{key:"ctx-var-"+t,sx:{px:2}},(0,r.kt)("code",{bare:!0,sx:{variant:"styles.inlineCode"}},t))}))))})),(0,r.kt)("p",null,"For an usage example have a look at ",(0,r.kt)("a",{parentName:"p",href:"/react-netlify-forms/examples/contact-form/#using-context"},"Contact form example"),"."),(0,r.kt)("h3",{id:"usenetlifyformcontext"},"useNetlifyFormContext"),(0,r.kt)("p",null,"Hook-based variant for consuming ",(0,r.kt)("inlineCode",{parentName:"p"},"<NetlifyFormContext />"),"."),(0,r.kt)("h3",{id:"netlifyformcomponent"},"NetlifyFormComponent"),(0,r.kt)("p",null,"Renders a form with handlers provided by ",(0,r.kt)("inlineCode",{parentName:"p"},"NetlifyFormContext"),"."),(0,r.kt)("p",null,"Available props:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Req"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Children"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"Form content like inputs.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"props"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"Additional props passed to the form. Can be used to override default methods like ",(0,r.kt)("inlineCode",{parentName:"td"},"onSubmit")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"onReset"),".")))),(0,r.kt)("h3",{id:"honeypot"},"Honeypot"),(0,r.kt)("p",null,"Component to create a honeypot field which provides extra spam prevention. If a bot fills this field, Netlify dismisses the submitted form data."),(0,r.kt)("p",null,"Available props:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Req"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"label"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"Label as text before honeypot field.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"props"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"Additional props for input of the honeypot.")))),(0,r.kt)("h3",{id:"recaptcha"},"reCAPTCHA"),(0,r.kt)("p",null,"In Netlify dashboard you have to set SITE_RECAPTCHA_KEY and SITE_RECAPTCHA_SECRET. Also, make sure to provide SITE_RECAPTCHA_KEY to the reCAPTCHA component on the client using ",(0,r.kt)("inlineCode",{parentName:"p"},"siteKey"),"-prop."),(0,r.kt)("p",null,"Available props:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Req"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"siteKey"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"Recaptcha public site key.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"invisible"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"Set whether reCAPTCHA should be invisible or not.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"(any)")),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"Any other prop will be passed through to the ",(0,r.kt)("a",{parentName:"td",href:"https://www.npmjs.com/package/react-google-recaptcha#component-props"},"underlying component"),".")))))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-docs-mdx-4ba8eab9726833e452f5.js.map