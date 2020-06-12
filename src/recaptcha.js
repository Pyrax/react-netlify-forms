import React from 'react'
import { useNetlifyFormContext } from './netlify-form-context'
import GoogleRecaptcha from 'react-google-recaptcha'

export const Recaptcha = ({ siteKey = '', invisible = false }) => {
  const { recaptchaRef } = useNetlifyFormContext()

  return invisible ? (
    <GoogleRecaptcha sitekey={siteKey} ref={recaptchaRef} size='invisible' />
  ) : (
    <GoogleRecaptcha sitekey={siteKey} ref={recaptchaRef} />
  )
}
