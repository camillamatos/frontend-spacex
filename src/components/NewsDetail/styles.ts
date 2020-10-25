import styled from 'styled-components'

export const Container = styled.div`
  background-color: #EEEEEE;
  max-width: 1300px;
  height: max-content;
  border-radius: 3px;
  padding: 50px;
`

export const Title = styled.h1`
  margin-bottom: 50px;
  color: #E61A72;
`

export const Description = styled.p`
  font-size: 24px;
  margin-right: 20px;

  @media (max-width: 700px) {
    & {
      font-size: 20px;
    }
  }
`
export const Author = styled.p`
  font-size: 24px;
  text-align: right;

  @media (max-width: 700px) {
    & {
      font-size: 20px;
    }
  }
`