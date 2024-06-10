import { ComponentPropsInterface } from '../types/ComponentProps.interface.ts'

const ParentComponent = ({ children, color }: ComponentPropsInterface) => {
  const componentStyle = {
    backgroundColor: color,
    padding: '20px',
    margin: '20px'
  }

  return (
    <div style={componentStyle}>
      <h1>Parent Component Header</h1>
      {children}
    </div>
  )
}

export default ParentComponent
