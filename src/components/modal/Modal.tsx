import React, { useState } from 'react'
import ReactDOM from 'react-dom'

interface ModalProps {
  children: React.ReactNode
  close: () => void
}

const Modal = React.memo(
  ({ children }: ModalProps): JSX.Element => {
    const domEl = document.getElementById('modal-root')

    if (!(process.browser && domEl)) {
      return null
    }

    return ReactDOM.createPortal(<div>{children}</div>, domEl)
  }
)

if (process.env.NODE_ENV === 'development') {
  Modal.displayName = 'Modal'
}

interface RenderModalProps {
  children: React.ReactNode
}

export const useModal = () => {
  const [show, setShow] = useState(false)

  const open = () => setShow(true)
  const close = () => setShow(false)

  const RenderModal = ({ children }: RenderModalProps) => (
    <>{show && <Modal close={close}>{children}</Modal>}</>
  )

  return [open, close, RenderModal, show] as const
}

export default Modal
