const heading = {
  fontFamily: 'heading',
  fontWeight: 'heading',
  lineHeight: 'heading'
}

// Based on theme-ui/swiss with different colors
export const theme = {
  breakpoints: ['30em', '48em', '80em'],
  colors: {
    text: 'hsl(165, 20%, 20%)',
    background: 'hsl(190, 10%, 98%)',
    primary: 'hsl(165, 60%, 25%)',
    secondary: 'hsl(125, 80%, 35%)',
    highlight: 'hsl(114, 40%, 90%)',
    muted: 'hsl(165, 20%, 94%)',
    gray: 'hsl(165, 20%, 75%)',
    purple: 'hsl(250, 60%, 30%)'
  },
  fonts: {
    body:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace'
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  fontWeights: {
    body: 400,
    heading: 700,
    display: 900
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25
  },
  textStyles: {
    heading,
    display: {
      variant: 'textStyles.heading',
      fontSize: [5, 6],
      fontWeight: 'display',
      letterSpacing: '-0.03em',
      mt: 3
    }
  },
  styles: {
    Container: {
      p: 3,
      maxWidth: 1024
    },
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body'
    },
    h1: {
      variant: 'textStyles.display'
    },
    h2: {
      variant: 'textStyles.heading',
      fontSize: 5
    },
    h3: {
      variant: 'textStyles.heading',
      fontSize: 4
    },
    h4: {
      variant: 'textStyles.heading',
      fontSize: 3
    },
    h5: {
      variant: 'textStyles.heading',
      fontSize: 2
    },
    h6: {
      variant: 'textStyles.heading',
      fontSize: 1
    },
    a: {
      color: 'primary',
      '&:hover': {
        color: 'secondary'
      }
    },
    pre: {
      variant: 'prism',
      fontFamily: 'monospace',
      fontSize: 1,
      p: 3,
      overflow: 'auto'
    },
    code: {
      fontFamily: 'monospace',
      fontSize: 1
    },
    inlineCode: {
      fontFamily: 'monospace',
      color: 'secondary',
      bg: 'muted'
    },
    table: {
      width: '100%',
      my: 4,
      borderCollapse: 'separate',
      borderSpacing: 0,
      'th,td': {
        textAlign: 'left',
        py: '4px',
        pr: '4px',
        pl: 0,
        borderColor: 'muted',
        borderBottomStyle: 'solid'
      }
    },
    th: {
      verticalAlign: 'bottom',
      borderBottomWidth: '2px'
    },
    td: {
      verticalAlign: 'top',
      borderBottomWidth: '1px'
    },
    hr: {
      border: 0,
      borderBottom: '1px solid',
      borderColor: 'muted'
    },
    img: {
      maxWidth: '100%'
    }
  },
  // Prism theme based on https://github.com/PrismJS/prism-themes/blob/master/themes/prism-duotone-forest.css
  prism: {
    backgroundColor: '#2a2d2a',
    color: '#90c392',
    '.comment,.prolog,.doctype,.cdata,.punctuation': {
      color: '#779077'
    },
    '.namespace': {
      opacity: 0.7
    },
    '.tag,.operator,.number': {
      color: '#d0c14e'
    },
    '.property,.function': {
      color: '#cebd8c'
    },
    '.tag-id,.selector,.atrule-id': {
      color: '#f0fff0'
    },
    '.attr-name': {
      color: '#b3d6b3'
    },
    '.boolean,.string,.entity,.url,.attr-value,.keyword,.control,.directive,.unit,.statement,.regex,.at-rule,.placeholder,.variable': {
      color: '#cee073'
    },
    '.deleted': {
      textDecorationLine: 'line-through'
    },
    '.inserted': {
      textDecorationLine: 'underline'
    },
    '.italic': {
      fontStyle: 'italic'
    },
    '.important,.bold': {
      fontWeight: 'bold'
    },
    '.important': {
      color: '#b3d6b3'
    },
    '.highlight': {
      background: '#435643'
    }
  }
}

export default theme
