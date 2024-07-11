import { ReactNode } from 'react'

interface TextErrorProps {
  children?: ReactNode
}

const TextError = ({ children }: TextErrorProps) => {
  return <div>{children}</div>
}

export default TextError
