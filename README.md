# react-netlify-forms

> React components and hooks giving you the power of Netlify Forms. Start building serverless forms on Netlify with React. Honeypot fields and reCAPTCHA are included as ready-to-use components.

[![NPM](https://flat.badgen.net/npm/v/react-netlify-forms)](https://www.npmjs.com/package/react-netlify-forms)
[![minzipped package size](https://flat.badgen.net/bundlephobia/minzip/react-netlify-forms)](https://www.npmjs.com/package/react-netlify-forms)
[![JavaScript Style Guide](https://flat.badgen.net/badge/code%20style/standard/f2a)](https://standardjs.com)
[![License](https://flat.badgen.net/github/license/Pyrax/react-netlify-forms)](https://github.com/Pyrax/react-netlify-forms/blob/master/LICENSE.md)

[Go to documentation with live demo.](https://pyrax.github.io/react-netlify-forms)

## Features

It gives you all the features of Netlify Forms as simple and **reusable** React components which have been tested on Netlify.

- Default form handlers with support for file uploads.
- Spam prevention through included honeypot and reCAPTCHA components.
- Can be used alone or together with form libraries such as Formik or react-hook-form.

## Before using

This component must be used with Server-Side Rendering (SSR) because Netlify
searches for a `data-netlify` attribute on HTML `form` tags to setup their
Forms backend for you.

_Suggestions: Astro, Next.js, Remix or Vite_

## Install

```bash
npm install --save react-netlify-forms
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

## Acknowledgements

Thanks to [create-react-library](https://www.npmjs.com/package/create-react-library) for providing quick setup for NPM packages.
