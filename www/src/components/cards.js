/** @jsx jsx */
import { jsx } from 'theme-ui'

const gridStyles = (columns = 2) => {
  return {
    listStyle: 'none',
    display: 'grid',
    gridTemplateColumns: ['auto', null, `repeat(${columns}, 1fr)`],
    gridGap: [2, null, 4],
    p: 0
  }
}

export default ({ children, columns, ...props }) => (
  <div
    {...props}
    sx={{
      ol: gridStyles(columns),
      ul: gridStyles(columns),
      p: {
        m: 0
      },
      a: {
        variant: 'text.heading',
        display: 'block',
        fontWeight: 'bold',
        fontSize: 3,
        color: 'inherit',
        textDecoration: 'none',
        ':hover,:focus': {
          color: 'primary'
        }
      }
    }}
  >
    {children}
  </div>
)
