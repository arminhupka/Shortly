import styled from "styled-components";

const TextInput = styled.input.attrs({type: "text"})`
  padding: 1rem 1.5rem;
  font-size: 1.6rem;
  border: .1rem solid ${({theme}) => theme.gray};
  border-radius: ${({theme}) => theme.round.md};
  
  :focus {
    outline: .2rem solid ${({theme}) => theme.primary["500"]};
  }
  
`

export default TextInput
