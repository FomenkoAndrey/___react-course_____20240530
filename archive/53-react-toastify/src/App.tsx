import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  const notify = () => {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        Math.random() > 0.5 ? resolve('Успіх') : reject('Помилка')
      }, 3000)
    })

    toast.promise(
      promise,
      {
        pending: 'Повідомлення завантажується',
        success: 'Повідомлення успішно завантажене 👌',
        error: 'Помилка завантажене 🤯'
      },
      { position: 'top-center', autoClose: 4000 }
    )
  }

  // const notify = () => {
  // toast('Default Notification!', { position: 'top-center', autoClose: 8000 })
  // toast.success('Success Notification!', { position: 'top-left', autoClose: 5000 })
  // toast.error('Error Notification', { position: 'top-right', autoClose: false })
  // toast.warn('Warning Notification!', { position: 'bottom-center' })
  // toast.info(<CustomToast closeToast={() => toast.dismiss()} />, { position: 'top-center', autoClose: 5000 })
  // toast('Custom Style Notification with css class!', {
  //   position: 'bottom-right',
  //   className: 'foo-bar'
  // })
  // }
  return (
    <div>
      <button onClick={notify}>Notify !</button>
      <ToastContainer />
    </div>
  )
}

export default App
