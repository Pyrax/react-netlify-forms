/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'
import { NetlifyForm, Honeypot, Recaptcha } from 'react-netlify-forms'

export default () => (
  <NetlifyForm
    name='Contact'
    action='/thanks'
    onFormDataSent={(res) => {
      console.log('Successfully sent form data to Netlify Server' + res)
    }}
  >
    {({ handleChange }) => (
      <>
        <Honeypot name='bot-field' label='Leave this field empty:' />
        {/*<Recaptcha siteKey='ejqoweo' invisible={true} />*/}

        <div sx={{ pt: 2 }}>
          <label htmlFor='name' sx={{ variant: 'forms.label' }}>
            Name:
          </label>
          <input
            type='text'
            name='name'
            id='name'
            onChange={handleChange}
            sx={{ variant: 'forms.input' }}
          />
        </div>
        <div sx={{ pt: 2 }}>
          <label htmlFor='message' sx={{ variant: 'forms.label' }}>
            Message:
          </label>
          <textarea
            type='text'
            name='message'
            id='message'
            rows='4'
            onChange={handleChange}
            sx={{ variant: 'forms.textarea' }}
          />
        </div>

        <div sx={{ pt: 3 }}>
          <button type='submit' sx={{ variant: 'buttons.success' }}>
            Submit
          </button>
          <button type='reset' sx={{ variant: 'buttons.danger' }}>
            Reset
          </button>
        </div>
      </>
    )}
  </NetlifyForm>
)
