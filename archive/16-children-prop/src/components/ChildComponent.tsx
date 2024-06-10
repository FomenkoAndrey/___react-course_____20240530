import { ComponentPropsInterface } from '../types/ComponentProps.interface.ts'

const ChildComponent = ({ children, color }: ComponentPropsInterface) => {
  const componentStyle = {
    backgroundColor: color,
    padding: '10px',
    margin: '10px'
  }

  return <div style={componentStyle}>{children}</div>
}

export default ChildComponent
