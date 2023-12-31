import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *,
  ::before,
  ::after {
    box-sizing: border-box;
    -webkit-appearance: none;
    appearance: none;
  }

  html {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  body {
    margin: 0;
    background: url("/background.svg"), ${(props) =>
      props.theme.colors.primary50};
    background-attachment: fixed;
    background-size: cover;
    background-repeat: no-repeat;
    color: ${(props) => props.theme.colors.gray950};
    overflow-y: scroll;
    
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    font : inherit;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    list-style: none;
  }

  input {
    -webkit-border-radius:0; 
    border-radius:0;
    font: inherit;
    border: none;
  }

  button {
    cursor: pointer;
    font: inherit;
    border: none;
    background-color: transparent;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  p {
    margin: 0;
  } 

  .Toastify__toast--success {
  background-color: ${(props) => props.theme.colors.primary200};
  color: ${(props) => props.theme.colors.gray700}
}

  .Toastify__toast--error {
  background-color: ${(props) => props.theme.colors.accent};
  color: ${(props) => props.theme.colors.gray700}
}
`;

export default GlobalStyle;
