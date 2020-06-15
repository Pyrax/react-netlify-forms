import React from 'react'
import { useNetlifyForm } from './netlify-form'
import { isFunction, isEmptyChildren } from './utils'

export const NetlifyFormContext = React.createContext()
export const NetlifyFormProvider = ({
  children,
  name = 'Form',
  action = '',
  honeypotName = '',
  enableRecaptcha = false,
  onSuccess = () => {},
  onFailure = () => {}
}) => {
  const context = useNetlifyForm({
    formName: name,
    formAction: action,
    honeypotName,
    enableRecaptcha,
    onSuccess,
    onFailure
  })

  return (
    <NetlifyFormContext.Provider value={context}>
      {children
        ? isFunction(children)
          ? children(context)
          : !isEmptyChildren(children)
          ? React.Children.only(children)
          : null
        : null}
    </NetlifyFormContext.Provider>
  )
}
export const NetlifyFormConsumer = NetlifyFormContext.Consumer

export function useNetlifyFormContext() {
  return React.useContext(NetlifyFormContext)
}
