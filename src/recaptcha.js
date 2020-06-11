import React from 'react'
import { useNetlifyFormContext } from './netlify-form-context'
import GoogleRecaptcha from 'react-google-recaptcha'

export const Recaptcha = ({ siteKey = '', invisible = false }) => {
  const { setRecaptcha, setRecaptchaVisible } = useNetlifyFormContext()
  setRecaptchaVisible(!invisible)

  return invisible ? (
    <GoogleRecaptcha sitekey={siteKey} ref={setRecaptcha} size='invisible' />
  ) : (
    <GoogleRecaptcha sitekey={siteKey} ref={setRecaptcha} />
  )
}
