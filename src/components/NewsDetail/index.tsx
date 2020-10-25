import React, { useEffect, useState } from 'react'
import api from '../../services/api'

import { Container, Title, Description, Author } from './styles'

interface DetailProps {
  id: string
}

const NewsDetail: React.FC<DetailProps> = ({ id }) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [author, setAuthor] = useState('')

  useEffect(() => {
    api.get(`news/${id}`).then(response => {
      setTitle(response.data.title)
      setDescription(response.data.description)
      setAuthor(response.data.author)
    })
  }, [id])

  return (
    <>
      <Container id="news-details">
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Author>{author}</Author>
      </Container>
    </>
  );
};

export default NewsDetail
