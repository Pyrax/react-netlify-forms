import { createContext, useContext } from 'react'

export const NetlifyFormContext = createContext()
NetlifyFormContext.displayName = 'NetlifyFormContext'

export const NetlifyFormProvider = ({ children, ...props }) => (
  <NetlifyFormContext.Provider value={{ ...props }}>
    {children}
  </NetlifyFormContext.Provider>
)

export function useNetlifyFormContext() {
  return useContext(NetlifyFormContext)
}
