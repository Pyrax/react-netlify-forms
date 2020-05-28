import React from 'react'
import { useNetlifyFormContext } from './netlify-form-context'
import GoogleRecaptcha from 'react-google-recaptcha'

export const Recaptcha = ({ siteKey, invisible = false }) => {
  const { setRecaptcha, setRecaptchaInvisible } = useNetlifyFormContext()
  setRecaptchaInvisible(invisible)

  return (
    <GoogleRecaptcha
      sitekey={siteKey}
      ref={setRecaptcha}
      invisible={invisible}
    />
  )
}
