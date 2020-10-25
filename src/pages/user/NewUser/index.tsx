import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'

import { Container, Title, Form, Input, Buttons, CancelButton, SaveButton } from './styles'
import api from '../../../services/api'
import Header from '../../../components/Header'

const NewUser: React.FC = () => {
  const { register, handleSubmit, errors } = useForm()
  const history = useHistory()

  async function handleAddUser(data: any) {
    const { name, email, address, phone, password } = data

    await api.post('users', {
      name, 
      email, 
      address, 
      phone,
      password
    })

    const user = await api.post('users/login', {
      email, 
      password
    })

    localStorage.setItem('@SpaceX:token', user.data.token)
    localStorage.setItem('@SpaceX:user', user.data.result.name)

    history.push('/')
  }

  return (
    <>
      <Header />
      <Container>
        <Title>Novo Usuário</Title>

        <Form onSubmit={handleSubmit(handleAddUser)}>
          <Input name="name" ref={register({ required: true })} placeholder="Nome" />
          {errors.name && <span>Nome obrigatório</span>}

          <Input name="email" ref={register({ required: true })} placeholder="Email" />
          {errors.email && <span>Email obrigatório</span>}

          <Input name="address" ref={register({ required: true })} placeholder="Endereço" />
          {errors.address && <span>Endereço obrigatório</span>}

          <Input name="phone" ref={register({ required: true })} placeholder="Telefone" />
          {errors.phone && <span>Telefone obrigatório</span>}

          <Input name="password" type="password" ref={register({ required: true })} placeholder="Senha" />
          {errors.password && <span>Senha obrigatória</span>}
        
          <Buttons>
            <Link to="/">
              <CancelButton type="button">Cancelar</CancelButton>
            </Link>
            <SaveButton type="submit">Salvar</SaveButton>
          </Buttons>
        </Form>
      </Container>
    </>
  )
}

export default NewUser
