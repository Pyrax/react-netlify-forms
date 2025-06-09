import GoogleRecaptcha from 'react-google-recaptcha'
import { useNetlifyFormContext } from './netlify-form-context'

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
