import { merge } from 'theme-ui'

import { swiss } from '@theme-ui/presets'
import github from '@theme-ui/prism/presets/prism-tomorrow'

import sketchy from 'theme-ui-sketchy-preset'
import 'typeface-architects-daughter'

const buttonBase = { fontSize: 'inherit', px: 3, py: 2, mr: 2 }

const extendVariants = (variants, extend) =>
  Object.entries(variants)
    .map(([k, v]) => {
      return { [k]: { ...v, ...extend } }
    })
    .reduce((acc, x) => {
      return { ...acc, ...x }
    })

export const previewTheme = merge(sketchy, {
  buttons: extendVariants(sketchy.buttons, buttonBase),
  forms: {
    label: {
      width: '100%',
      display: 'flex'
    },
    input: {
      display: 'block',
      width: '100%',
      p: 2,
      fontSize: 'inherit',
      lineHeight: 'inherit',
      border: '1px solid',
      color: 'inherit',
      bg: 'transparent',
      ...sketchy.forms.input
    },
    textarea: {
      display: 'block',
      width: '100%',
      p: 2,
      fontSize: 'inherit',
      lineHeight: 'inherit',
      border: '1px solid',
      borderRadius: '4px',
      color: 'inherit',
      bg: 'transparent',
      ...sketchy.forms.textarea
    },
    select: {
      display: 'block',
      width: '100%',
      p: 2,
      appearance: 'none',
      fontSize: 'inherit',
      lineHeight: 'inherit',
      border: '1px solid',
      borderRadius: 4,
      color: 'inherit',
      bg: 'transparent',
      ...sketchy.forms.select
    }
  }
})

export default merge(swiss, {
  styles: {
    pre: {
      ...github
    }
  },
  links: {
    nav: {
      p: 2,
      color: 'inherit',
      fontWeight: 'bold',
      fontSize: 1,
      textDecoration: 'none',
      bg: 'transparent',
      transition: 'background-color .2s ease-out',
      '&:hover': {
        bg: 'highlight'
      },
      '&.active': {
        color: 'primary',
        bg: 'highlight'
      }
    }
  },
  alerts: {
    muted: {
      color: 'text',
      bg: 'muted',
      display: 'block',
      border: (theme) => `2px solid ${theme.colors.highlight}`,
      'h1:first-of-type, h2:first-of-type, h3:first-of-type, h4:first-of-type, h5:first-of-type, h6:first-of-type': {
        mt: 2
      }
    }
  }
})
