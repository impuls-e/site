import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`

  :root {
    --secondary: #01a6baeb;
    --primary: #7557c7c7;
    --transparency: #000000bf;
    --black:#1b1919;
    --white: #fff;
    --gray: #707072;
    --breakpoint-sm: 576px;
    --breakpoint-md: 768px;
    --breakpoint-lg: 992px;
    --breakpoint-xl: 1200px;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
  font-size: 14px;
}
body,
input,
button,
a {
  font-size: 13px;
  font-family: "Inconsolata", monospace;
  letter-spacing: 0.5px;
  color: var(--gray);
}
button {
  cursor: pointer;
}
@media (min-width: 760px) {
  html {
    font-size: 16px; 
  }
}
`
