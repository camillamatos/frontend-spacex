import React, { useState, useEffect } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'

import { Container, Title, Form, Input, Buttons, CancelButton, SaveButton } from './styles'
import api from '../../../services/api'
import Header from '../../../components/Header'

const UpdateUser: React.FC = () => {
  const { id } = useParams() 
  const history = useHistory()
  const { register, handleSubmit, errors } = useForm()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [phone, setPhone] = useState('')

  useEffect(() => {
    api.get(`users/${id}`).then(response => {
      setName(response.data.name)
      setEmail(response.data.email)
      setAddress(response.data.address)
      setPhone(response.data.phone)
    })
  }, [id])

  async function handleUpdateUser(data: any) {
    await api.put(`users/${id}`, {
      name: data.name, 
      email: data.email, 
      address: data.address, 
      phone: data.phone,
      password: data.password
    })

    history.push('/')
  }

  return (
    <>
      <Header />
      <Container>
        <Title>Alterar Usuário</Title>

        <Form onSubmit={handleSubmit(handleUpdateUser)}>
          <Input name="name" defaultValue={name} ref={register({ required: true })} placeholder="Nome" />
          {errors.name && <span>Nome obrigatório</span>}

          <Input name="email" defaultValue={email} ref={register({ required: true })} placeholder="Email" />
          {errors.email && <span>Email obrigatório</span>}

          <Input name="address" defaultValue={address} ref={register({ required: true })} placeholder="Endereço" />
          {errors.address && <span>Endereço obrigatório</span>}

          <Input name="phone" defaultValue={phone} ref={register({ required: true })} placeholder="Telefone" />
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

export default UpdateUser
