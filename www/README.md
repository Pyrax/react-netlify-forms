<center>

<h1 style="display:none;">react-netlify-forms docs</h1>

**This README is a placeholder. It will be replaced by the README in the main directory on build. Please only edit the original README in the root.**

<div style="display:none;" aria-hidden>

[Go to documentation with live demo.](https://pyrax.github.io/react-netlify-forms)

</div>

</center>

<Alert variant='muted'>

## Before using

This component must be used with Server-Side Rendering (SSR) because Netlify
searches for a `data-netlify` attribute on HTML `form` tags to setup their
Forms backend for you.

➡️ _Suggestions for SSR: GatsbyJS, Next.js, react-static_

</Alert>

## Install

Either install with NPM via:

```bash
npm install --save react-netlify-forms
```

or with YARN via:

```bash
yarn add react-netlify-forms
```

## Usage

In the following example a contact form with two inputs and a honeypot for extra spam prevention is shown. It also works without JavaScript by falling back to a serverside-rendered form which just submits data with an usual POST request:

```jsx
import React from 'react'
import { NetlifyForm, Honeypot } from 'react-netlify-forms'

const ContactForm = () => (
  <NetlifyForm name='Contact' action='/thanks' honeypotName='bot-field'>
    {({ handleChange, success, error }) => (
      <>
        <Honeypot />
        {success && <p>Thanks for contacting us!</p>}
        {error && (
          <p>Sorry, we could not reach our servers. Please try again later.</p>
        )}
        <div>
          <label htmlFor='name'>Name:</label>
          <input type='text' name='name' id='name' onChange={handleChange} />
        </div>
        <div>
          <label htmlFor='message'>Message:</label>
          <textarea
            type='text'
            name='message'
            id='message'
            rows='4'
            onChange={handleChange}
          />
        </div>
        <div>
          <button type='submit'>Submit</button>
        </div>
      </>
    )}
  </NetlifyForm>
)

export default ContactForm
```

For more examples please browse through our website.

## License

MIT © [Björn Clees](https://github.com/Pyrax)

---

Thanks to [create-react-library](https://www.npmjs.com/package/create-react-library) for providing quick setup for NPM packages.
