import React, { useEffect, useState } from 'react'
import api from '../../services/api'

import { Container, Title, Content, ContentTitle, ContentDescription } from './styles'

interface DetailProps {
  id: string
}

const UserDetails: React.FC<DetailProps> = ({ id }) => {
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

  return (
    <>
      <Container id="user-details">
        <Title>Usuário</Title>

        <Content>
          <ContentTitle>Nome</ContentTitle>
          <ContentDescription>{name}</ContentDescription>
        </Content>

        <Content>
          <ContentTitle>Email</ContentTitle>
          <ContentDescription>{email}</ContentDescription>
        </Content>

        <Content>
          <ContentTitle>Endereço</ContentTitle>
          <ContentDescription>{address}</ContentDescription>
        </Content>

        <Content>
          <ContentTitle>Telefone</ContentTitle>
          <ContentDescription>{phone}</ContentDescription>
        </Content>
      </Container>
    </>
  );
};

export default UserDetails
