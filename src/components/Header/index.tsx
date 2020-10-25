import React, { useCallback, useEffect, useState } from 'react';
import { FiLogOut, FiUser } from 'react-icons/fi'
import { Link, useHistory } from 'react-router-dom';

import { Container, Title } from './styles'

const Header: React.FC = () => {
  const [data, setData] = useState('')
  const history = useHistory()

  useEffect(() => {
    const token = localStorage.getItem('@SpaceX:token')

    if(token) {
      setData(token)
    }
  }, [data])

  const signOut = useCallback(() => {
    localStorage.removeItem('@SpaceX:token')
    localStorage.removeItem('@SpaceX:user')

    setData('')
    history.push('/login')
  }, [history]);

  return (
    <Container>
      <Link to="/"><Title>SpaceX</Title></Link>
      { data ? <FiLogOut onClick={signOut} /> : <Link to="/login"><FiUser /></Link>}
    </Container>
  );
};

export default Header