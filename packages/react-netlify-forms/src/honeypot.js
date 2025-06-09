import React from 'react'
import { useNetlifyFormContext } from './netlify-form-context'

export const Honeypot = ({
  label = `Leave the following field empty:`,
  ...props
}) => {
  const { handleChange, honeypotName } = useNetlifyFormContext()

  return (
    <p hidden>
      <label>
        {label}{' '}
        <input
          type="text"
          {...props}
          name={honeypotName}
          onChange={handleChange}
        />
      </label>
    </p>
  )
}
