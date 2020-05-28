import React from 'react'

export const encodeFormData = (data) => {
  const formData = new FormData()

  for (const key of Object.keys(data)) {
    formData.append(key, data[key])
  }

  return formData
}

export const isFunction = (x) => typeof x === 'function'

export const isEmptyChildren = (x) => React.Children.count(x) === 0
