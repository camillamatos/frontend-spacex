import React, { useCallback, useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiEye, FiX, FiEdit2, FiPlus } from 'react-icons/fi'

import Header from '../../components/Header'
import Modal from '../../components/Modal'
import { Container, Content, Table, TableCaption, TableHead, Button } from './styles'
import UserDetails from '../../components/UserDetails'
import NewsDetail from '../../components/NewsDetail'
import Confirm from '../../components/Confirm'

import api from '../../services/api'

interface Users {
  _id: string
  name: string
  email: string
  address: string
  phone: string
}

interface News {
  _id: string
  title: string
  description: string
}

const Dashboard: React.FC = () => {
  const [data, setData] = useState('')

  useEffect(() => {
    const token = localStorage.getItem('@SpaceX:token')

    if(token) {
      setData(token)
    }
  }, [])

  const [users, setUsers] = useState<Users[]>()
  const [news, setNews] = useState<News[]>()
  const history = useHistory()

  async function loadUsers() {
    api.get('users').then(response => {
      setUsers(response.data)
    })
  }

  async function loadNews() {
    api.get('news').then(response => {
      setNews(response.data)
    })
  }

  useEffect(() => {
    loadUsers()
    loadNews()
  }, [])

  async function deleteUser(id: string) {
    await api.delete(`users/${id}`)
    loadUsers()
  }

  async function deleteNews(id: string) {
    await api.delete(`news/${id}`)
    loadNews()
  }

  const navigateToUpdateUser = useCallback(id => {
    history.push(`users/${id}`)
  }, [history])

  const navigateToUpdateNews = useCallback(id => {
    history.push(`news/${id}`)
  }, [history])

  return (
    <>
      <Header />
      <Container>
      {data && (
        <Content>
          <Button><Link to="/users"><FiPlus /></Link></Button>
          <Table>
            <TableCaption>Usuários</TableCaption>
            <TableHead>
              <tr>
                <th style={{ width: 'calc(100% - 90px)'}}>Nome</th>
                <th style={{ width: '30px'}}></th>
                <th style={{ width: '30px'}}></th>
                <th style={{ width: '30px'}}></th>
              </tr>
            </TableHead>
            <tbody>
              {users?.map(user => (
                <tr key={user._id}>
                  <td>{user.name}</td>
                  <td>
                    <Modal component={<UserDetails id={user._id}/>}>
                      {({ open }: any) => (
                        <button onClick={open}><FiEye /></button>
                      )}
                    </Modal>
                  </td>
                  <td onClick={() => navigateToUpdateUser(user._id)} style={{ cursor: "pointer" }}><FiEdit2 /></td>
                  <td>
                    <Confirm cb={() => {
                      deleteUser(user._id)
                    }}>
                      {({ open }: any) => (
                        <button onClick={open}><FiX /></button>
                      )}
                    </Confirm>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Content>
      )}
        <Content>
          {data && <Button><Link to="/news"><FiPlus /></Link></Button> }
          <Table>
            <TableCaption>Notícias</TableCaption>
            <TableHead>
              <tr>
                <th style={{ width: 'calc(100% - 90px)'}}>Título</th>
                <th style={{ width: '30px'}}></th>
                <th style={{ width: '30px'}}></th>
                <th style={{ width: '30px'}}></th>
              </tr>
            </TableHead>
            <tbody>
              {news?.map(n => (
                <tr key={n._id}>
                  <td>{n.title}</td>
                  <td>
                    <Modal component={<NewsDetail id={n._id}/>}>
                      {({ open }: any) => (
                        <button onClick={open}><FiEye /></button>
                      )}
                    </Modal>
                  </td>
                  {data && <td onClick={() => navigateToUpdateNews(n._id)} style={{ cursor: "pointer" }}><FiEdit2 /></td> }
                  {data && <td>
                    <Confirm cb={() => {
                      deleteNews(n._id)
                    }}>
                      {({ open }: any) => (
                        <button onClick={open}><FiX /></button>
                      )}
                    </Confirm>
                  </td> }
                </tr>
                ))}
              </tbody>
            </Table>
          </Content>
        
      </Container>
    </>
  )
}

export default Dashboard
