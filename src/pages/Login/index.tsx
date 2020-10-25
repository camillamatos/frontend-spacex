import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'

import { Container, Title, Form, Input, LoginButton, CreateAccountText } from './styles'
import api from '../../services/api'
import Header from '../../components/Header'

const Login: React.FC = () => {
  const [error, setError] = useState('')
  const { register, handleSubmit, errors } = useForm()
  const history = useHistory()

  async function handleLogin(data: any) {
    const { email, password } = data
    const user = await api.post('users/login', {
      email, 
      password
    })

    if(user.data) {
      history.push('/')
      localStorage.setItem('@SpaceX:token', user.data.token)
      localStorage.setItem('@SpaceX:user', user.data.result.name)
    }

    setError('Usuário incorreto!')
  }

  return (
    <>
      <Header />
      <Container>
        <Title>LOGIN</Title>

        <Form onSubmit={handleSubmit(handleLogin)}>
          <Input name="email" ref={register({ required: true })} placeholder="Email" />
          {errors.email && <span>Email obrigatório</span>}

          <Input name="password" type="password" ref={register({ required: true })} placeholder="Senha" />
          {errors.password && <span>Senha obrigatória</span>}

          <LoginButton type="submit">Entrar</LoginButton>     

          {error && <span style={{ fontSize: 24, marginTop: 20}}>{error}</span>}    
        </Form>

        <Link to="/users"><CreateAccountText>Criar conta</CreateAccountText></Link>
      </Container>
    </>
  )
}

export default Login
