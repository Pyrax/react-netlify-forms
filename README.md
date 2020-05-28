# react-netlify-forms

> Reusable and customizable component for using Netlify Forms. Useful for creating multiple Netlify Forms on your site without repeating yourself. Honeypot fields and reCAPTCHA are available as ready-to-use components.

[![NPM](https://img.shields.io/npm/v/react-netlify-forms.svg)](https://www.npmjs.com/package/react-netlify-forms) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Features

- Provides support for file uploads through standard input fields.
- Spam prevention using honeypot fields and reCAPTCHA.
- Can be used alone or together with form libraries such as Formik.
- Tested components for Netlify Forms.

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
import 'react-netlify-forms/dist/index.css'

class Example extends Component {
  render() {
    return <MyComponent />
  }
}
```

## License

MIT © [Pyrax](https://github.com/Pyrax)

---

Thanks to [create-react-library](https://www.npmjs.com/package/create-react-library) for providing quick setup for NPM packages.
