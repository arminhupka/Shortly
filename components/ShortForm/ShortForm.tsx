import {ReactElement, useState, useRef, useEffect, MutableRefObject, ChangeEvent} from "react";
import styled from "styled-components";
import {FaLink, FaCopy, FaPlus, FaQrcode} from "react-icons/fa";
import {AxiosResponse} from "axios";
import {useRouter} from "next/router";

// Utils
import api from "../../lib/api";
import checkUrl from "../../lib/checkUrl";

// Interface
import {NewLinkInterface} from "../../interface/NewLinkInterface";

// Components
import {Container} from "../../styles/GlobalStyle";
import Button from "../Button/Button";
import TextInput from '../TextInput/TextInput'
import CodePopup from "../CodePopup/CodePopup";
import devices from "../../styles/devices";

// Styled Components
const ShortFormWrapper = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  background: ${({theme}) => theme.primary["50"]};
  border-radius: ${({theme}) => theme.round.md};
  box-shadow: ${({theme}) => theme.shadow.regular};

  @media screen and ${devices.lg} {
    flex-direction: row;

    ${TextInput} {
      flex: 1;
      margin-bottom: 0;
    }

  }
`

const ButtonWrapper = styled.div`
  display: flex;

  & > * {
    margin-left: 1rem;
  }
`

const ShortForm = (): ReactElement => {
    const router = useRouter();

    const resultInputRef = useRef() as MutableRefObject<HTMLInputElement>;
    const submitButtonRef = useRef() as MutableRefObject<HTMLButtonElement>;

    const [data, setData] = useState<NewLinkInterface | null>(null);
    const [url, setUrl] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isShorten, setIsShorten] = useState<boolean>(false);
    const [showQR, setShowQR] = useState(false);

    const handleSubmit = async (): Promise<any> => {
        if (!checkUrl(url)) return

        setIsLoading(true)
        try {
            const {data}: AxiosResponse<NewLinkInterface> = await api({
                url: "/links",
                method: "POST",
                data: {
                    url
                }
            })
            setData(data)
            setIsLoading(false)
            setIsShorten(true)
            await router.replace(router.asPath);
        } catch (err: any) {
            console.log(err.response)
        }
    }
    const handleClipboardCopy = async (): Promise<void> => {
        await navigator.clipboard.writeText(resultInputRef.current.value)
    }
    const handleInputValue = (e: ChangeEvent<HTMLInputElement>) => setUrl(e.target.value);
    const handleCodeButton = () => setShowQR(!showQR)
    const handleReset = () => {
        setUrl("");
        setIsShorten(false);
    };

    useEffect(() => {
        window.addEventListener('keypress', (e: KeyboardEvent) => {
            if (e.key === 'Enter') {
                submitButtonRef.current.click()
            }
        })
    }, [])

    return (
        <section>
            {showQR && <CodePopup onClose={handleCodeButton}/>}
            <Container>
                <ShortFormWrapper>
                    {!isShorten &&
                        <>
                            <TextInput placeholder="Paste link to short" value={url} disabled={isLoading}
                                       onChange={handleInputValue}/>
                            <Button ref={submitButtonRef} onClick={handleSubmit}>
                                {!isLoading && <><FaLink/> &nbsp; Short Link</>}
                                {isLoading && <>Loading ...</>}
                            </Button>
                        </>
                    }
                    {isShorten && !isLoading &&
                        <>
                            <TextInput ref={resultInputRef} readOnly
                                       value={`${process.env.NEXT_PUBLIC_HOST}/${data?.data.slug}`}/>
                            <ButtonWrapper>
                                <Button onClick={handleClipboardCopy}><FaCopy/> &nbsp; Copy link</Button>
                                <Button alternative onClick={handleReset}><FaPlus/> &nbsp; Short new URL</Button>
                                <Button alternative onClick={handleCodeButton}><FaQrcode/> &nbsp; QR Code</Button>
                            </ButtonWrapper>
                        </>
                    }
                </ShortFormWrapper>
            </Container>
        </section>
    )
}

export default ShortForm
