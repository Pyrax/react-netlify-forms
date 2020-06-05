/** @jsx jsx */
import { jsx } from 'theme-ui'
import code from '../components/code'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'

const heading = (Tag) => (props) => {
  if (!props.id) return <Tag {...props} />
  return (
    <Tag
      {...props}
      sx={{
        ':hover .anchor-icon': {
          visibility: 'visible'
        }
      }}
    >
      <a
        href={`#${props.id}`}
        sx={{
          position: 'absolute',
          transform: 'translateX(-100%)',
          mt: '-2px',
          color: 'primary',
          textDecoration: 'none',
          ':focus .anchor-icon': {
            visibility: 'visible'
          }
        }}
      >
        <FontAwesomeIcon
          icon={faLink}
          className='anchor-icon'
          sx={{
            visibility: 'hidden',
            fontSize: 1
          }}
        />
      </a>
      {props.children}
    </Tag>
  )
}

const components = {
  pre: (props) => props.children,
  code,
  h1: heading('h1'),
  h2: heading('h2'),
  h3: heading('h3'),
  h4: heading('h4'),
  h5: heading('h5'),
  h6: heading('h6')
}

export default components
