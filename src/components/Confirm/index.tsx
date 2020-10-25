import React, { useState } from 'react'
import { Container, Buttons } from './styles'

interface ConfirmProps {
  children: any
  cb: () => void
}

const Confirm: React.FC<ConfirmProps> = ({ children, cb }) => {
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
         <div>
          <p>Tem certeza que deseja excluir?</p>
          <Buttons>
              <button onClick={() => {
                cb()
                close()
              }}>
                Sim
              </button>
              <button onClick={close}>Não</button>
          </Buttons>
         </div>
       </Container>
     )}
   </>    
  )
}

export default Confirm
