import {ReactElement} from "react";
import styled from "styled-components";

// Components
import {Container, Row, Col} from "../../styles/GlobalStyle";

// Styled Components
const StyledFooter = styled.footer`
  padding: 1rem 0;
  color: #fff;
  background: ${({theme}) => theme.primary["500"]};
  border-top: .1rem solid ${({theme}) => theme.primary["700"]};;
`

const StyledCopyright = styled.div`
  font-size: ${({theme}) => theme.fontSize["small"]};
  text-align: center;
`

const Footer = (): ReactElement => (
    <StyledFooter>
        <Container>
            <Row>
                <Col>
                    <StyledCopyright>
                        <a href="https://github.com/arminhupka/">
                            created by @arminhupka
                        </a>
                    </StyledCopyright>
                </Col>
            </Row>
        </Container>
    </StyledFooter>
)

export default Footer
