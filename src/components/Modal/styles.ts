import styled from 'styled-components'

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
  overflow-y: hidden;

  button:first-child {
    position: absolute;
    z-index: 9;
    top: 10px;
    right: 10px;
    border: none;
    background: transparent;

    svg {
      color: #EEEEEE;
      font-size: 36px;
    }
  }
`
