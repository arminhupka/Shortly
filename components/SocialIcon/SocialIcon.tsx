import {ReactElement} from "react";
import styled from "styled-components";
import {FaGithub} from "react-icons/fa";

// Styled Components
const SocialLinkIcon = styled.a`
  display: flex;
  font-size: 2rem;
  color: ${({theme}) => theme.primary["400"]};
`

const SocialIcon = (): ReactElement => (
    <SocialLinkIcon>
        <FaGithub/>
    </SocialLinkIcon>
)

export default SocialIcon
