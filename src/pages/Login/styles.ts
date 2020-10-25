import styled from 'styled-components'
import { shade } from 'polished'

export const Container = styled.div`
  max-width: 400px;
  margin: 0 auto;

  a {
    text-decoration: none;
  }
`

export const Title = styled.h1`
  text-align: center;
  margin: 40px 0;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  span {
    color: red;
    margin-bottom: 10px;
  }
`

export const Input = styled.input`  
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #E61A72;
  border-radius: 3px;
  background-color: #EEEEEE;
`

export const LoginButton = styled.button`
  background-color: #E61A72;
  padding: 10px 20px;
  color: #fff;
  margin-top: 20px;
  border-radius: 3px;
  border: 1px solid #E61A72;

  &:hover {
    background-color: ${shade(0.2, '#E61A72')};
  }
`

export const CreateAccountText = styled.p`
  text-align: center;
  margin-top: 20px;
  color: #E61A72;
  cursor: pointer;
`