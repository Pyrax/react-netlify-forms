import React from 'react'
import { useNetlifyFormContext } from './netlify-form-context'

export const Honeypot = ({
  name = '__honeypot',
  label = `Don't fill out the following field:`
}) => {
  const { handleChange, setHoneypot } = useNetlifyFormContext()

  return (
    <p hidden>
      <label>
        {label} <input name={name} onChange={handleChange} ref={setHoneypot} />
      </label>
    </p>
  )
}
