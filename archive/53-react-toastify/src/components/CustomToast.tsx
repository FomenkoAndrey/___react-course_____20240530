import { FC, MouseEventHandler } from 'react'

interface CustomToastProps {
  closeToast: MouseEventHandler<HTMLButtonElement>
}

const CustomToast: FC<CustomToastProps> = ({ closeToast }) => {
  return (
    <div>
      Custom Toast
      <button onClick={closeToast} className="button-style">
        Close
      </button>
    </div>
  )
}

export default CustomToast
