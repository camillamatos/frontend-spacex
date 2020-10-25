import styled from 'styled-components'
import { shade } from 'polished'

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9;
  justify-content: center;
  align-items: center;
  
  & > div {
    background-color: #EEEEEE;
    width: 20%;
    height: max-content;
    border-radius: 3px;
    padding: 15px;

    @media (max-width: 1300px) {
      & {
        width: 30%;
        height: 30%;
      }
    }

    @media (max-width: 700px) {
      & {
        width: 70%;
        height: 30%;
      }
    }

    p {
      margin: 30px auto;
      text-align: center;
    }
  }
`
export const Buttons = styled.div`
  display: flex;
  justify-content: center;

  button {
    background-color: #E61A72;
    padding: 10px 30px;
    color: #fff;
    border-radius: 3px;
    border: 1px solid #E61A72;
    margin: 0 20px;
    

    &:hover {
    background-color: ${shade(0.2, '#E61A72')};
    }
  }
`
