import styled from 'styled-components'
import { shade } from 'polished'

export const Container = styled.div`
  display: flex;

  @media (max-width: 1000px) {
    & {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
`

export const Content = styled.div`
  width: 48%;
  margin: 60px;
  height: max-content;
  -webkit-box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.075);
  -moz-box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.075);
  box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.075);
  padding: 20px;
  border-radius: 3px;

  @media (max-width: 1000px) {
    & {
      width: 86%;
    }
  }
`

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th {
    padding: 5px 10px;
    text-align: left;
  }

  tr {
    border-bottom: 1px solid #c7c3c3; 
  }

  td {
    padding: 5px 10px;
    font-size: 20px;

    button {
      border: none;
    }

    svg {
      color: #222223;
      font-size: 20px;
    }
  }
`

export const TableCaption = styled.caption`
  font-size: 32px;
`

export const TableHead = styled.thead` 
  font-size: 22px;

  tr {
    border-bottom: none;
  }
`

export const Button = styled.button`
  background: #44A048;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 3px;
  
  svg {
    font-size: 26px;
    color: #EEEEEE;
  }

  &:hover {
    background: ${shade(0.2, '#44A048')};
  }
`

