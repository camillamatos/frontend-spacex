import React, { useState, useEffect } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'

import { Container, Title, Form, Input, TextArea, Buttons, CancelButton, SaveButton } from './styles'
import api from '../../../services/api'
import Header from '../../../components/Header'

const UpdateNews: React.FC = () => {
  const { id } = useParams() 
  const history = useHistory()
  const { register, handleSubmit, errors } = useForm()

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  useEffect(() => {
    api.get(`news/${id}`).then(response => {
      setTitle(response.data.title)
      setDescription(response.data.description)
    })
  }, [id])

  async function handleUpdateNews(data: any) {
    await api.put(`news/${id}`, {
      title: data.title,
      description: data.description
    })

    history.push('/')
  }

  return (
    <>
      <Header />
      <Container>
        <Title>Alterar Notícia</Title>

        <Form onSubmit={handleSubmit(handleUpdateNews)}>
          <Input name="title" defaultValue={title} ref={register({ required: true })} placeholder="Título" />
          {errors.title && <span>Título obrigatório</span>}
          
          <TextArea name="description" defaultValue={description} ref={register({ required: true })} placeholder="Descrição" />
          {errors.description && <span>Descrição obrigatória</span>}

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

export default UpdateNews
