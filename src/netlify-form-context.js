import React from 'react'

export const NetlifyFormContext = React.createContext()
export const NetlifyFormProvider = NetlifyFormContext.Provider
export const NetlifyFormConsumer = NetlifyFormContext.Consumer

export function useNetlifyFormContext() {
  return React.useContext(NetlifyFormContext)
}
