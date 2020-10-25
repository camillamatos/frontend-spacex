import styled from 'styled-components'

export const Container = styled.div`
  background-color: #EEEEEE;
  height: max-content;
  border-radius: 3px;
  max-height: calc(100% - 100px);
  margin: 10px;
  padding: 30px;
  overflow-y: auto;
`

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 50px;
`

export const Content = styled.div`
  display: flex;
  align-items: baseline;
  margin-bottom: 20px;

  @media (max-width: 400px) {
    & {
      flex-direction: column;
    }
  }
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