import { useCallback, useReducer, useRef } from 'react'
import { NetlifyFormComponent } from './netlify-form-component'
import { NetlifyFormProvider } from './netlify-form-context'
import NetlifyFormReducer from './netlify-form-reducer'
import { encodeFormData } from './utils'

export const useNetlifyForm = ({
  name = 'Form',
  action = '',
  honeypotName = '',
  enableRecaptcha = false,
  onSuccess = () => {},
  onFailure = () => {}
}) => {
  const initialValues = {}
  const initialState = {
    success: false,
    error: false,
    submitting: false,
    submitted: false,
    response: null,
    values: initialValues,
    formName: name,
    formAction: action,
    honeypotName,
    recaptchaEnabled: enableRecaptcha,
    recaptchaInvisible: false
  }
  const [state, dispatch] = useReducer(NetlifyFormReducer, initialState)
  const formRef = useRef(null)
  const recaptchaRef = useRef(null)

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

    const formData = {
      'form-name': state.formName,
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

    dispatch({ type: 'SET_SUBMITTING' })

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
  const setHoneypotName = useCallback((ref) => {
    return dispatch({ type: 'SET_HONEYPOT_NAME', payload: ref })
  }, [])
  const enableRecaptchaHandler = useCallback((enable) => {
    return dispatch({ type: 'ENABLE_RECAPTCHA', payload: enable })
  }, [])

  return {
    ...state,
    // add additional handlers for access through context:
    handleChange,
    handleSubmit,
    handleReset,
    setHoneypotName,
    enableRecaptcha: enableRecaptchaHandler,
    // references:
    formRef,
    recaptchaRef
  }
}

export const NetlifyForm = ({ children, formProps, ...props }) => {
  const context = useNetlifyForm(props)

  return (
    <NetlifyFormProvider {...context}>
      <NetlifyFormComponent {...formProps}>{children}</NetlifyFormComponent>
    </NetlifyFormProvider>
  )
}
