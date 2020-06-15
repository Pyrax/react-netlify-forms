import React from 'react'
import { encodeFormData } from './utils'
import NetlifyFormReducer from './netlify-form-reducer'
import { NetlifyFormProvider } from './netlify-form-context'
import { NetlifyFormComponent } from './netlify-form-component'

export const useNetlifyForm = ({
  formName,
  formAction,
  honeypotName,
  enableRecaptcha: recaptchaEnabled,
  onSuccess,
  onFailure
}) => {
  const initialValues = {}
  const initialState = {
    success: false,
    error: false,
    response: null,
    values: initialValues,
    formName,
    formAction,
    honeypotName,
    recaptchaEnabled,
    recaptchaInvisible: false
  }
  const [state, dispatch] = React.useReducer(NetlifyFormReducer, initialState)
  const formRef = React.useRef(null)
  const recaptchaRef = React.useRef(null)

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
  const handleSubmit = async (event = null, values = {}) => {
    if (event) {
      event.preventDefault()
    }

    const form = formRef.current
    const formData = {
      'form-name': form.getAttribute('name'),
      ...values,
      ...state.values
    }

    if (state.recaptchaEnabled) {
      if (recaptchaRef.current === null) {
        throw new Error(
          'reCAPTCHA is enabled but reference not found, make sure you render the reCAPTCHA-component somewhere.'
        )
      }
      const isRecaptchaInvisible =
        recaptchaRef.current.props.size === 'invisible'
      const recaptchaValue = isRecaptchaInvisible
        ? await recaptchaRef.current.executeAsync()
        : recaptchaRef.current.getValue()

      formData['g-recaptcha-response'] = recaptchaValue
    }

    const response = await fetch('/', {
      method: 'POST',
      body: encodeFormData(formData)
    })
    const context = { state, formRef, recaptchaRef }
    if (response.status !== 200) {
      dispatch({ type: 'SET_ERROR' })
      return onFailure(response, context)
    }
    dispatch({ type: 'SET_SUCCESS' })
    return onSuccess(response, context)
  }
  const setHoneypotName = React.useCallback((ref) => {
    return dispatch({ type: 'SET_HONEYPOT_NAME', payload: ref })
  }, [])
  const enableRecaptcha = React.useCallback((enable) => {
    return dispatch({ type: 'ENABLE_RECAPTCHA', payload: enable })
  }, [])

  return {
    ...state,
    // add additional handlers for access through context:
    handleChange,
    handleSubmit,
    handleReset,
    setHoneypotName,
    enableRecaptcha,
    // references:
    formRef,
    recaptchaRef
  }
}

export const NetlifyForm = ({ children, ...props }) => (
  <NetlifyFormProvider {...props}>
    <NetlifyFormComponent>{children}</NetlifyFormComponent>
  </NetlifyFormProvider>
)
