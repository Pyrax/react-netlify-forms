import React from 'react'

export const NetlifyFormContext = React.createContext()
NetlifyFormContext.displayName = 'NetlifyFormContext'

export const NetlifyFormProvider = ({ children, ...props }) => (
  <NetlifyFormContext.Provider value={{ ...props }}>
    {children}
  </NetlifyFormContext.Provider>
)

export function useNetlifyFormContext() {
  return React.useContext(NetlifyFormContext)
}
