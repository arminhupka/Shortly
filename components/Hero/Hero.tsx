import {ReactElement} from "react";
import styled from "styled-components";

// Components
import {Container} from "../../styles/GlobalStyle";

// Styled Components
const StyledSection = styled.section`
  margin-bottom: 2rem;
`

const HeroWrapper = styled.div`
  min-height: 35rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  background: ${({theme}) => `linear-gradient(60deg ,${theme.primary["500"]}, ${theme.primary["600"]})`};
  border-radius: ${({theme}) => theme.round.md};
`

const Title = styled.h1`
  margin-bottom: 2rem;
  font-family: 'DM Sans', sans-serif;
  font-size: ${({theme}) => theme.fontSize["large"]};
  font-weight: 700;
`

const Description = styled.p`
    font-size: ${({theme}) => theme.fontSize["medium"]};
`


const Hero = (): ReactElement => (
    <StyledSection>
        <Container>
            <HeroWrapper>
                <Title>Shorten, share and track</Title>
                <Description>
                    Use our URL Shortener to create a shortened link making it easy to remember
                </Description>
            </HeroWrapper>
        </Container>
    </StyledSection>
)

export default Hero
