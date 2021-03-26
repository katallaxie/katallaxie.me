import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { irBlack } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

export interface CodeProps {
  children?: React.ReactNode
  className?: string
}

export const CodeBlock = ({
  className,
  children,
  ...props
}: CodeProps): JSX.Element => {
  const language = className.replace(/language-/, '')

  return (
    <SyntaxHighlighter language={language} style={irBlack} {...props}>
      {children}
    </SyntaxHighlighter>
  )
}

export default CodeBlock
