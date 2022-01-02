import styled, {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
  #__next {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
  
  *, *::before, *::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.6%;
  }

  body {
    font-family: 'DM Sans', sans-serif;
    font-size: 1.6rem;
    color: #333;
  }

  input {
    font-family: 'DM Sans', sans-serif;
  }
  
  button {
    font-family: 'DM Sans', sans-serif;
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }
`

export const Container = styled.div`
  width: 100%;
  max-width: 135rem;
  padding: 0 2.4rem;
  margin: 0 auto;
`

export const Section = styled.section`
  padding: 4rem 0;
`

export const Row = styled.div`
  margin: 0 -1rem;
  display: flex;
  align-items: center;
`

export const Col = styled.div`
  width: 100%;
  padding: 0 1rem;
`

export default GlobalStyle
