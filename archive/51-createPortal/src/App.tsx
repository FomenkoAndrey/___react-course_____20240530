import { useState } from 'react'
import Modal from './components/Modal.tsx'
import { createPortal } from 'react-dom'

const App = () => {
  const [showModal, setShowModal] = useState(false)

  const handleShowModal = () => {
    setShowModal(true)
  }

  const handleHideModal = () => {
    setShowModal(false)
  }

  const modalRoot = document.getElementById('modal')
  const modal = showModal && modalRoot ? createPortal(<Modal onClose={handleHideModal} />, modalRoot) : null

  return (
    <div>
      <h1>Hello createPortal!</h1>

      <button onClick={handleShowModal}>Show Modal</button>
      {modal}
    </div>
  )
}

export default App
