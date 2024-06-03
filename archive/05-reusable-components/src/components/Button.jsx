const Button = ({ text, type, num, disabled }) => {
  return (
    <div>
      {/*{disabled ? <h2>Disabled button</h2> : <h2>Enabled button</h2>}*/}
      <h2>{disabled ? 'Disabled button' : `Enabled ${num} button`}</h2>
      <button type={type} disabled={disabled}>
        {text}
      </button>
    </div>
  )
}

export default Button
