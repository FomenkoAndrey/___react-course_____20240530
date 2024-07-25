import Modal from 'react-modal'
import { useRef, useState } from 'react'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
}

Modal.setAppElement('#modal-root')

const App = () => {
  const subtitle = useRef<HTMLHeadingElement>(null)
  const [modalIsOpen, setIsOpen] = useState(false)

  function openModal() {
    setIsOpen(true)
  }

  function afterOpenModal() {
    if (subtitle.current) {
      subtitle.current.style.color = 'indigo'
    }
  }

  function closeModal() {
    setIsOpen(false)
  }

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        className="custom-modal"
        overlayClassName="custom-overlay"
      >
        <h2 ref={subtitle}>Hello</h2>
        <button onClick={closeModal} className="close-button">
          ✖
        </button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </Modal>
    </div>
  )
}

export default App
