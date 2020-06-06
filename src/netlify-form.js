import React from 'react'
import { encodeFormData, isFunction, isEmptyChildren } from './utils'
import NetlifyFormReducer from './netlify-form-reducer'
import { NetlifyFormProvider } from './netlify-form-context'

export function useNetlifyForm({ onFormDataSent }) {
  const initialValues = {}
  const initialState = {
    formData: initialValues,
    honeypot: null,
    recaptcha: null,
    recaptchaInvisible: true
  }
  const [state, dispatch] = React.useReducer(NetlifyFormReducer, initialState)

  const handleChange = ({ target: { name, value, files } }) => {
    dispatch({
      type: 'FORM_DATA_CHANGED',
      payload:
        files != null && files.length > 0
          ? { name, value: files[0] }
          : { name, value }
    })
  }
  const handleReset = () => {
    dispatch({
      type: 'FORM_RESET',
      payload: initialValues
    })
  }
  const handleSubmit = async (event) => {
    // TODO: add recaptcha, make sure invisible recaptchas are handled
    // as well!
    event.preventDefault()
    const form = event.target
    const result = await fetch('/', {
      method: 'POST',
      body: encodeFormData({
        'form-name': form.getAttribute('name'),
        ...state.formData
      })
    })
    onFormDataSent(result)
  }
  const setHoneypot = (ref) => {
    if (ref !== state.honeypot) {
      return dispatch({ type: 'HONEYPOT_SET', payload: ref })
    }
  }
  const setRecaptcha = (ref) => {
    if (ref !== state.recaptcha) {
      return dispatch({ type: 'RECAPTCHA_SET', payload: ref })
    }
  }
  const setRecaptchaInvisible = (invisible) => {
    if (invisible !== state.recaptchaInvisible) {
      return dispatch({
        type: 'RECAPTCHA_VISIBILITY_CHANGED',
        payload: invisible
      })
    }
  }

  return {
    ...state,
    handleChange,
    handleSubmit,
    handleReset,
    setHoneypot,
    setRecaptcha,
    setRecaptchaInvisible
  }
}

export const NetlifyForm = ({ children, ...props }) => {
  const context = useNetlifyForm(props)

  const { name, action, onFormDataSent, ...childProps } = props
  return (
    <NetlifyFormProvider value={context}>
      <form
        {...childProps}
        name={name}
        action={action}
        method='post'
        onSubmit={context.handleSubmit}
        onReset={context.handleReset}
        data-netlify
        data-netlify-honeypot={Boolean(context.honeypot)}
        data-netlify-recaptcha={Boolean(context.recaptcha)}
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
