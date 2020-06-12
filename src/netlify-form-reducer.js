export default function (state, action) {
  const { type, payload } = action
  switch (type) {
    case 'CHANGE_FORM_DATA': {
      const { name, value } = payload
      return {
        ...state,
        values: {
          ...state.values,
          [name]: value
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
      return { ...state, success: true, error: false }
    case 'SET_ERROR':
      return { ...state, success: false, error: true }
    case 'SET_HONEYPOT_NAME':
      return { ...state, honeypotName: payload }
    case 'ENABLE_RECAPTCHA':
      return { ...state, recaptchaEnabled: payload }
    default:
      throw new Error(`Action type "${type}" is not defined.`)
  }
}
