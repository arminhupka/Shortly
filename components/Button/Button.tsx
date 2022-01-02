import styled, {css} from "styled-components";

interface ButtonProps {
    alternative?: boolean;
    small?: boolean;
}

const Button = styled.button<ButtonProps>`
  position: relative;
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'DM Sans', sans-serif;
  font-size: 1.6rem;
  font-weight: 500;
  color: #fff;
  background: ${({theme}) => theme.primary["500"]};
  border: none;
  border-radius: ${({theme}) => theme.round.md};
  transition: background-color .3s;
  
  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-shadow: 0 .5rem 2rem ${({theme}) => theme.primary["500"]};
    opacity: 0;
    transition: opacity .3s;
  }
  
  :hover {
    background: ${({theme}) => theme.primary["400"]};
    ::before {
      opacity: .3;
    }
  }

  ${({small}) => small && css`
    padding: .8rem;
    font-size: 1.2rem;
  `}
  
  ${({alternative}) => alternative && css`
    color: ${({theme}) => theme.primary["500"]};
    background: transparent;
    border: .2rem solid ${({theme}) => theme.primary["500"]};
    :hover {
      background: ${({theme}) => theme.primary["100"]};
    }
  `}
`

export default Button
