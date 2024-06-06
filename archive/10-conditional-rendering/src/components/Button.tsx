interface ButtonPropsInterface {
  onClick: () => void
  text: string
}

const Button = ({ onClick, text }: ButtonPropsInterface) => {
  return <button onClick={onClick}>{text}</button>
}

export default Button
