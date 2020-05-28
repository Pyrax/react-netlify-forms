export default function (state, action) {
  switch (action.type) {
    case 'FORM_DATA_CHANGED':
      const { name, value } = action.payload
      return {
        ...state,
        formData: {
          ...state.formData,
          [name]: value
        }
      }
    case 'FORM_RESET':
      const initialData = action.payload
      return {
        ...state,
        formData: initialData
      }
    case 'HONEYPOT_SET':
      return { ...state, honeypot: action.payload }
    case 'RECAPTCHA_SET':
      return { ...state, recaptcha: action.payload }
    case 'RECAPTCHA_VISIBILITY_CHANGED':
      return { ...state, recaptchaInvisible: action.payload }
    default:
      throw new Error(`Action type "${action.type}" is not defined.`)
  }
}
