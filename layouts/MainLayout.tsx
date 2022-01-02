import {ReactElement, ReactNode} from "react"
import styled from "styled-components";
import GlobalStyle from "../styles/GlobalStyle";

// Components
import Header from "../components/Header/Header";
import Footer from '../components/Footer/Footer'

// Styled Components
const StyledMain = styled.main`
  flex: 1;
`

interface Props {
    children: ReactNode
}

const MainLayout = ({children}: Props): ReactElement => (
    <>
        <GlobalStyle/>
        <Header/>
        <StyledMain>
            {children}
        </StyledMain>
        <Footer/>
    </>
)

export default MainLayout
