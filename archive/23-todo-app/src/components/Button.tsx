import { ButtonPropsInterface } from '../types/ButtonProps.interface.ts'

const Button = ({ children, ...props }: Partial<ButtonPropsInterface>) => {
  return <button {...props}>{children}</button>
}

export default Button
