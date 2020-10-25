import styled from 'styled-components'
import { shade } from 'polished'

export const Container = styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding: 0 50px;
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

export const Buttons = styled.div`
  display: flex;
`

export const CancelButton = styled.button`
  background-color: transparent;
  padding: 10px 20px;
  color: #E61A72;
  border: 1px solid #E61A72;
  margin: 20px 20px 0 0;
  border-radius: 3px;

  &:hover {
    color: ${shade(0.2, '#E61A72')};
  }
`

export const SaveButton = styled.button`
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