export default function (state, action) {
  const { type, payload } = action
  switch (type) {
    case 'CHANGE_FORM_DATA': {
      const { name, value, type } = payload
      return {
        ...state,
        values: {
          ...state.values,
          [name]: type !== 'checkbox' ? value : payload.checked
        }
      }
    }
    case 'RESET_FORM': {
      const initialData = payload
      return {
        ...state,
        values: initialData
      }
    }
    case 'SET_SUCCESS':
      return {
        ...state,
        success: true,
        error: false,
        submitting: false,
        submitted: true
      }
    case 'SET_ERROR':
      return { ...state, success: false, error: true, submitting: false }
    case 'SET_SUBMITTING':
      return { ...state, submitting: true }
    case 'SET_HONEYPOT_NAME':
      return { ...state, honeypotName: payload }
    case 'ENABLE_RECAPTCHA':
      return { ...state, recaptchaEnabled: payload }
    default:
      throw new Error(`Action type "${type}" is not defined.`)
  }
}
