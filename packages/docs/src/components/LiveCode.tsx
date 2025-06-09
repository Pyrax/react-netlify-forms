import { LiveEditor, LiveError, LivePreview, LiveProvider } from 'react-live'
import * as components from 'react-netlify-forms'

interface LiveCodeProps {
  code: string
}

export default function LiveCode({ code }: LiveCodeProps) {
  return (
    <LiveProvider code={code.trim()} scope={{ ...components }}>
      <LiveEditor />
      <LivePreview />
      <LiveError />
    </LiveProvider>
  )
}
