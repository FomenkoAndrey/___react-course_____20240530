import { ButtonPropsInterface } from '../types/ButtonProps.interface.ts'

const Button = ({ children, onClick, title, disabled }: ButtonPropsInterface) => {
  return (
    <button onClick={onClick} title={title} disabled={disabled}>
      {children}
    </button>
  )
}

export default Button
