import {ReactElement} from "react";
import styled from "styled-components";

// Styled Components
const StyledNav = styled.nav`
  display: none;
`

const Nav = ():ReactElement => (
    <StyledNav>
        <h1>This is nav</h1>
    </StyledNav>
)

export default Nav
