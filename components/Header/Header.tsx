import {ReactElement} from "react";
import styled from "styled-components";
import {FaGithub} from "react-icons/fa";

// Components
import {Container} from "../../styles/GlobalStyle";

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

const StyledLink = styled.a`
  display: flex;
  font-size: 3rem;
  color: ${({theme}) => theme.primary['500']};
`

const Header = (): ReactElement => (
    <StyledHeader>
        <StyledContainer>
            <Row>
                <Col>
                    <div>
                        <h1>Shortly</h1>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <StyledLink href="https://github.com/arminhupka/Shortly">
                        <FaGithub/>
                    </StyledLink>
                </Col>
            </Row>
        </StyledContainer>
    </StyledHeader>
)

export default Header
