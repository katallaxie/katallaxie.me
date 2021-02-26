import React from 'react'
import { useModal } from '@components/modal/Modal'

export const SayHi = (): JSX.Element => {
  const [show, close, Modal] = useModal()
  const handleOpen = () => show()
  const handleClose = () => close()

  return (
    <div>
      <button className="text-lg md:text-xl lg:text-2xl" onClick={handleOpen}>
        Say Hi.
      </button>
      <Modal>
        <div className="fixed flex justify-center items-center top-0 bottom-0 right-0 left-0">
          <div>
            <button onClick={handleClose}>Close</button>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default SayHi
