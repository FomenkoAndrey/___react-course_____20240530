interface ButtonProps {
  text: string
  type: 'submit' | 'reset' | 'button'
  disabled?: boolean

  [key: string]: any
}

const Button = ({ text, type, ...rest }: ButtonProps) => {
  const { disabled } = rest
  const buttonClass: string = disabled ? 'bg-gray-500' : 'bg-blue-500 hover:bg-blue-700'
  return (
    <button
      type={type}
      className={`${buttonClass} text-white font-bold py-2 px-4 rounded w-full`}
      {...rest}
      disabled={disabled}
    >
      {text}
    </button>
  )
}

export default Button
