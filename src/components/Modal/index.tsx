import React, { useState } from 'react'
import { Container } from './styles'
import { FiX } from 'react-icons/fi'

interface ModalProps {
  children: any
  component: JSX.Element
}

const Modal: React.FC<ModalProps> = ({ children, component }) => {
  const [opened, setOpened] = useState(false)

  const open = (): void => {
    setOpened(true)
  }

  const close = (): void => {
    setOpened(false)
  }

  return (
    <>
      {children({ open, close })}
      {opened && (
        <Container>
          <button onClick={close}><FiX /></button>
          {component}
        </Container>
      )}
    </>    
  )
}

export default Modal
