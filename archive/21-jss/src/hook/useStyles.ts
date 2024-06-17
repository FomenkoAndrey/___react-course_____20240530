import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({
  button: {
    fontSize: '2rem',
    padding: '10px 20px',
    backgroundColor: 'blue',
    color: 'white',
    borderRadius: '5px',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: 'darkblue'
    }
  }
})
