import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'

import { Container, Title, Form, Input, TextArea, Buttons, CancelButton, SaveButton } from './styles'
import api from '../../../services/api'
import Header from '../../../components/Header'

const NewNews: React.FC = () => {
  const { register, handleSubmit, errors } = useForm()
  const history = useHistory()

  async function handleAddNews(data: any) {
    const { title, description } = data
    const author = localStorage.getItem('@SpaceX:user')

    await api.post('news', {
      title,
      description,
      author
    })

    history.push('/')
  }

  return (
    <>
      <Header />
      <Container>
        <Title>Nova Notícia</Title>

        <Form onSubmit={handleSubmit(handleAddNews)}>
          <Input name="title" ref={register({ required: true })} placeholder="Título" />
          {errors.title && <span>Título obrigatório</span>}

          <TextArea name="description" ref={register({ required: true })} placeholder="Descrição" />
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

export default NewNews
