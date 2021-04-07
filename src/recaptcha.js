import React from 'react'
import { useNetlifyFormContext } from './netlify-form-context'
import GoogleRecaptcha from 'react-google-recaptcha'

export const Recaptcha = ({
  siteKey = '',
  invisible = false,
  ...passThroughProps
}) => {
  const { recaptchaRef } = useNetlifyFormContext()

  return (
    <GoogleRecaptcha
      {...passThroughProps}
      sitekey={siteKey}
      ref={recaptchaRef}
      {...(invisible ? { size: 'invisible' } : {})}
    />
  )
}
