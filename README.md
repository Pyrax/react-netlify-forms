# react-netlify-forms

> Reusable and customizable component for using Netlify Forms. Useful for creating multiple Netlify Forms on your site without repeating yourself. Honeypot fields and reCAPTCHA are available as ready-to-use components.

[![NPM](https://img.shields.io/npm/v/react-netlify-forms.svg)](https://www.npmjs.com/package/react-netlify-forms) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Features

- Support for file uploads.
- Spam prevention through honeypot and reCAPTCHA components exported from this package.
- Can be used alone or together with form libraries such as Formik.

<Alert variant='muted'>

## Before using

This component must be used with Server-Side Rendering (SSR) because Netlify
searches for a `data-netlify` attribute on HTML `form` tags to setup their
Forms backend for you.

➡️ _Suggestions for SSR: GatsbyJS, Next.js, react-static_

</Alert>

## Install

### Install with NPM:

```bash
npm install --save react-netlify-forms
```

### Install with YARN:

```bash
yarn add react-netlify-forms
```

## Usage

```jsx
import React, { Component } from 'react'

import MyComponent from 'react-netlify-forms'

class Example extends Component {
  render() {
    return <MyComponent />
  }
}
```

## License

MIT © [Björn Clees](https://github.com/Pyrax)

---

Thanks to [create-react-library](https://www.npmjs.com/package/create-react-library) for providing quick setup for NPM packages.
