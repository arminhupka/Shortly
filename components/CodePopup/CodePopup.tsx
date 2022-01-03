import {ReactElement} from "react";
import styled from "styled-components";
import QRCode from 'react-qr-code'

interface Props {
    value: string,
    onClose: () => void;
}

// Styled Components
const PopupWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  background: rgba(0, 0, 0, .5);
  opacity: 1;
  z-index: 1;
`

const CodeWrapper = styled.div`
  width: 500px;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  border-radius: ${({theme}) => theme.round.md};
  box-shadow: ${({theme}) => theme.shadow.regular};
  transform: translateY(4rem);
  overflow: hidden;
`

const CodePopup = ({value, onClose}: Props): ReactElement => (
    <PopupWrapper onClick={onClose}>
        <CodeWrapper onClick={event => {
            event.stopPropagation()
        }}>
            <QRCode value={value} size={450}/>
        </CodeWrapper>
    </PopupWrapper>
)

export default CodePopup