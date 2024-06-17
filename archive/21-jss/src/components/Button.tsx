import { ReactNode } from 'react'
import { useStyles } from '../hook/useStyles.ts'

const Button = ({ children }: { children: ReactNode }) => {
  const classes = useStyles()
  console.log(classes)
  return <button className={classes.button}>{children}</button>
}

export default Button
