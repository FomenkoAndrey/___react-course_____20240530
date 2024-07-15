import { ReactNode } from 'react'

interface TextErrorProps {
  children?: ReactNode
}

const TextError = ({ children }: TextErrorProps) => {
  return <div className="text-red-500 text-sm">{children}</div>
}

export default TextError
