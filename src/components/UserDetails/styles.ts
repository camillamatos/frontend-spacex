import styled from 'styled-components'

export const Container = styled.div`
  background-color: #EEEEEE;
  height: max-content;
  border-radius: 3px;
  padding: 50px 200px 50px 50px;
  margin: 10px;
`

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 50px;
`

export const Content = styled.div`
  display: flex;
  align-items: baseline;
  margin-bottom: 20px;
`

export const ContentTitle = styled.h2`
  font-size: 28px;
  margin-right: 20px;

  @media (max-width: 700px) {
    & {
      font-size: 20px;
    }
  }
`

export const ContentDescription = styled.p`
  color: #E61A72;
  font-size: 20px;

  @media (max-width: 700px) {
    & {
      font-size: 16px;
    }
  }
`