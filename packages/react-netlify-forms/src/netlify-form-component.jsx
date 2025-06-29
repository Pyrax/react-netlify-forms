import { useNetlifyFormContext } from './netlify-form-context'
import { isEmptyChildren, isFunction } from './utils'

export const NetlifyFormComponent = ({ children, ...props }) => {
  const context = useNetlifyFormContext()
  const {
    formRef,
    formName,
    formAction,
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
      method="post"
      name={formName}
      action={formAction}
      onSubmit={handleSubmit}
      onReset={handleReset}
      data-netlify
      {...netlifyProps}
      {...props}
    >
      {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
      <input type="hidden" name="form-name" value={formName} />

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
