import {ReactElement} from "react";
import styled from "styled-components";

// Components
import {Container} from "../../styles/GlobalStyle";
import Nav from "./Nav/Nav";
import SocialIcon from "../SocialIcon/SocialIcon";

// Styled Components
const StyledHeader = styled.header`
  border-bottom: 1px solid ${({theme}) => theme.gray};
`

const Row = styled.div`
  margin: 0 -1rem;
  display: flex;
  align-items: center;
`

const Col = styled.div`
  padding: 0 1rem;
`

const StyledContainer = styled(Container)`
  padding-top: 2rem;
  padding-bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Header = (): ReactElement => (
    <StyledHeader>
        <StyledContainer>
            <div>
                <h1>Shortly</h1>
            </div>
            <Nav/>
            <Row>
                <Col>
                    <SocialIcon/>
                </Col>
                <Col>
                    <SocialIcon/>
                </Col>
            </Row>
        </StyledContainer>
    </StyledHeader>
)

export default Header
