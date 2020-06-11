import React from 'react'
import { encodeFormData, isFunction, isEmptyChildren } from './utils'
import NetlifyFormReducer from './netlify-form-reducer'
import { NetlifyFormProvider } from './netlify-form-context'

export function useNetlifyForm({
  honeypotName,
  recaptchaEnabled,
  onSuccess,
  onError
}) {
  const initialValues = {}
  const initialState = {
    success: false,
    error: false,
    response: null,
    values: initialValues,
    formRef: null,
    honeypotName,
    recaptcha: null,
    recaptchaEnabled,
    recaptchaVisible: true
  }
  const [state, dispatch] = React.useReducer(NetlifyFormReducer, initialState)

  const handleChange = ({ target: { name, value, files } }) => {
    dispatch({
      type: 'CHANGE_FORM_DATA',
      payload:
        files != null && files.length > 0
          ? { name, value: files[0] }
          : { name, value }
    })
  }
  const handleReset = () => {
    dispatch({
      type: 'RESET_FORM',
      payload: initialValues
    })
  }
  const handleSubmit = async (event) => {
    event.preventDefault()

    const form = event.target
    const formData = {
      'form-name': form.getAttribute('name'),
      ...state.values
    }

    if (state.recaptchaEnabled) {
      if (!state.recaptcha.current) {
        throw new Error(
          'reCAPTCHA is enabled but reference not found, make sure you render the reCAPTCHA-component somewhere.'
        )
      }
      const ref = state.recaptcha
      const recaptchaValue = state.recaptchaVisible
        ? ref.current.getValue()
        : await ref.current.executeAsync()

      formData['g-recaptcha-response'] = recaptchaValue
    }

    const response = await fetch('/', {
      method: 'POST',
      body: encodeFormData(formData)
    })
    if (response.status !== 200) {
      dispatch({ type: 'SET_ERROR' })
      return onError(response, state)
    }
    dispatch({ type: 'SET_SUCCESS' })
    onSuccess(response, state)
  }
  const setFormRef = React.useCallback((ref) => {
    return dispatch({ type: 'SET_FORM_REF', payload: ref })
  }, [])
  const setHoneypotName = React.useCallback((ref) => {
    return dispatch({ type: 'SET_HONEYPOT_NAME', payload: ref })
  }, [])
  const enableRecaptcha = React.useCallback((enable) => {
    return dispatch({ type: 'ENABLE_RECAPTCHA', payload: enable })
  }, [])
  const setRecaptcha = React.useCallback((ref) => {
    return dispatch({ type: 'SET_RECAPTCHA', payload: ref })
  }, [])
  const setRecaptchaVisible = React.useCallback((visiblity) => {
    return dispatch({
      type: 'SET_RECAPTCHA_VISIBLITY',
      payload: visiblity
    })
  }, [])

  return {
    ...state,
    // add additional handlers for access through context:
    handleChange,
    handleSubmit,
    handleReset,
    setFormRef,
    setHoneypotName,
    enableRecaptcha,
    setRecaptcha,
    setRecaptchaVisible
  }
}

export const NetlifyForm = ({
  children,
  name = 'Form',
  action,
  honeypotName = '',
  enableRecaptcha = false,
  onSuccess,
  ...props
}) => {
  const context = useNetlifyForm({ honeypotName, enableRecaptcha, onSuccess })

  const conditionalProps = {}
  if (context.honeypotName) {
    conditionalProps['data-netlify-honeypot'] = context.honeypotName
  }
  if (context.recaptchaEnabled) {
    conditionalProps['data-netlify-recaptcha'] = true
  }

  return (
    <NetlifyFormProvider value={context}>
      <form
        {...props}
        ref={context.setFormRef}
        name={name}
        action={action}
        method='post'
        onSubmit={context.handleSubmit}
        onReset={context.handleReset}
        data-netlify
        {...conditionalProps}
      >
        {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
        <input type='hidden' name='form-name' value={name} />

        {children
          ? isFunction(children)
            ? children(context)
            : !isEmptyChildren(children)
            ? React.Children.only(children)
            : null
          : null}
      </form>
    </NetlifyFormProvider>
  )
}
