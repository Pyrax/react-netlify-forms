import React from 'react'
import { isFunction, isEmptyChildren } from './utils'
import { useNetlifyFormContext } from './netlify-form-context'

export const NetlifyFormComponent = ({ children, ...props }) => {
  const context = useNetlifyFormContext()
  const {
    formRef,
    formName,
    honeypotName,
    recaptchaEnabled,
    handleSubmit,
    handleReset
  } = context

  const netlifyProps = {}
  if (honeypotName) {
    netlifyProps['data-netlify-honeypot'] = honeypotName
  }
  if (recaptchaEnabled) {
    netlifyProps['data-netlify-recaptcha'] = true
  }

  return (
    <form
      ref={formRef}
      method='post'
      onSubmit={handleSubmit}
      onReset={handleReset}
      data-netlify
      {...netlifyProps}
      {...props}
    >
      {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
      <input type='hidden' name='form-name' value={formName} />

      {children
        ? isFunction(children)
          ? children(context)
          : !isEmptyChildren(children)
          ? children
          : null
        : null}
    </form>
  )
}
