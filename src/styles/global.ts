import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    html, body, #root {
      height: 100%;
      width: 100%;
    }

    body {
        background: #EEEEEE;
        color: #222223;
        -webkit-font-smoothing: antialiased;
        height: max-content;
    }

    body, input, button, textarea {
      font-family: 'Lato', serif;
      font-size: 16px;
    }

    input::placeholder, textarea::placeholder {
      font-family: 'Lato';
      font-size: 18px;
    }

    h1, h2, h3, h4, h5, h6, strong {
      font-weight: 500;
    }

    button {
      cursor: pointer;
    }
`;
