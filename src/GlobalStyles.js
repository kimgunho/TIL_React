import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    font-family: "Helvetica", "Arial", sans-serif;
    line-height: 1.5;
    font-size:16px;
  }

  ul{
      padding:0;
      margin:0;
      list-style:none;
  }
  p,h1,h2,h3,h4,h5,h6{
      margin:0;
      color:#111;
      font-size:1rem;      
  }
  a{
      color:#111;
      text-decoration:none;
      font-size:1rem;
  }
  input, button{
    font-size:1rem;
  }
`;

export default GlobalStyle;
