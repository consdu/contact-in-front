import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
   *,
  ::before,
  ::after {
    box-sizing: border-box;
  }

  html {
    font-family: Inter, system-ui, -apple-system, 'Segoe UI', Roboto, Ubuntu, 'Open Sans', 'Helvetica Neue', sans-serif
  }

  body {
    margin: 0;
    background: url("background.svg"), #f1f8f4;
    background-attachment: fixed;
    background-size: cover;
    background-repeat: no-repeat;
    color: #000;
    min-height:100vh;
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
    font-family: inherit;
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
`;

export default GlobalStyle;
