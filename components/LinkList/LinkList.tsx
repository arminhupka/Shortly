import {ReactElement, useEffect, useState} from "react";
import styled from "styled-components";
import axios from "axios";
import useSWR from 'swr'
import {FaQrcode, FaCopy} from "react-icons/fa";

// Interface
import {LinkResponseInterface} from "../../interface/LinkResponseInterface";

// Components
import {Container, Section} from "../../styles/GlobalStyle";
import devices from "../../styles/devices";
import Button from "../Button/Button";
import CodePopup from "../CodePopup/CodePopup";
import Pagination from "../Pagination/Pagination";

// Hooks
import usePagination from "../../hooks/usePagination";

// Styled Components
const StyledTable = styled.table`
  margin: auto;
  width: 100%;
  border-collapse: collapse;
  color: #333;
  border-radius: .4em;
  overflow: hidden;
  box-shadow: ${({theme}) => theme.shadow.regular};
`

const StyledRow = styled.tr`
  border-color: #bfbfbf;

  :first-of-type {
    border-top: none;
    background: ${({theme}) => theme.primary['500']};
    color: #fff;
  }

  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  background-color: #f5f9fc;

  :nth-child(odd):not(:first-child) {
    background-color: #ebf3f9;
  }

  @media screen and ${devices.lg} {
    :hover:not(:first-child) {
      background-color: #d8e7f3;
    }
  }
`

const StyledTD = styled.td`
  padding: .5em 1em;
  display: block;
  text-align: left;

  :first-child {
    margin-top: .5em;
  }

  :last-child {
    margin-bottom: .5em;
  }

  :nth-child(2) {
    text-overflow: ellipsis;
    overflow: hidden;
    max-width: 50rem;
    white-space: nowrap;
  }

  ::before {
    content: attr(data-th) ": ";
    font-weight: bold;
    width: 120px;
    display: inline-block;
    color: #000;
  }

  :last-child::before {
    display: none;
  }

  :last-child {
    display: flex;
    flex-direction: column;
    justify-content: center;

    ${Button}:first-of-type {
      margin-bottom: 1rem;
    }
  }

  @media screen and ${devices.lg} {
    :first-child {
      padding-left: 0;
    }

    :last-child {
      padding-right: 0;
      flex-direction: row;
      align-items: center;

      ${Button}:first-of-type {
        margin-bottom: 0;
        margin-right: 1rem;
      }
    }

    :before {
      display: none;
    }

    display: table-cell;
    padding: 2rem !important;

  }
`

const StyledTH = styled.th`
  padding: .5em 1em;
  display: none;
  text-align: left;

  @media screen and ${devices.lg} {
    display: table-cell;
    //padding: .25em .5em;
    padding: 2rem !important;

    :first-child {
      padding-left: 0;
    }

    :last-child {
      padding-right: 0;
    }
  }
`


interface DataProps {
    currentPage: number;
    links: LinkResponseInterface[];
    totalLinks: number;
    totalPages: number;
}

const LinkList = (): ReactElement => {

    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalLinks, setTotalLinks] = useState<number>(0);
    const [totalPages, setTotalPages] = useState<number>(0);
    const [isVisible, setIsVisible] = useState<boolean>(false);

    const pagination = usePagination({
        currentPage,
        pageSize: 15,
        totalCount: totalLinks
    })

    const fetcher = async (url: string) => {
        const {data} = await axios(url)
        return data
    }

    const {
        data,
        error
    } = useSWR<DataProps, any>(`${process.env.NEXT_PUBLIC_API_URL}/links?page=${currentPage}`, fetcher)

    const handleCopy = (text: string) => navigator.clipboard.writeText(text)

    const handleVisible = (): void => setIsVisible(!isVisible);

    useEffect(() => {
        if (data) {
            setTotalLinks(data.totalLinks)
            setTotalPages(data.totalPages)
        }
    }, [data])


    if (!data) 'Loading ...'
    if (error) 'Error during fetching data from API ...'


    return (
        <>
            {isVisible && <CodePopup onClose={handleVisible}/>}
            <Section>
                <Container>
                    <StyledTable>
                        <tbody>
                        <StyledRow>
                            <StyledTH>Short Link</StyledTH>
                            <StyledTH>Page Title</StyledTH>
                            <StyledTH>Visits</StyledTH>
                            <StyledTH>Added</StyledTH>
                            <StyledTH/>
                        </StyledRow>
                        {data && data.links.map((link: LinkResponseInterface) => (
                            <StyledRow key={link._id}>
                                <StyledTD data-th="Short Link">
                                    {process.env.NEXT_PUBLIC_HOST}/{link.slug}
                                </StyledTD>
                                <StyledTD data-th="Page Title">
                                    {link.title}
                                </StyledTD>
                                <StyledTD data-th="Visits">
                                    {link.visits}
                                </StyledTD>
                                <StyledTD data-th="Added">
                                    {new Date(link.createdAt).toLocaleDateString()}
                                </StyledTD>
                                <StyledTD>
                                    <Button
                                        onClick={() => handleCopy(`${process.env.NEXT_PUBLIC_HOST}/${link.slug}`)}><FaCopy/> &nbsp; Copy
                                        link</Button>
                                    <Button onClick={handleVisible}><FaQrcode/> &nbsp; Show QR</Button>
                                </StyledTD>
                            </StyledRow>
                        ))}
                        </tbody>
                    </StyledTable>
                    <Pagination paginationElements={pagination} currentPage={currentPage} changePage={setCurrentPage} totalPages={totalPages}/>
                </Container>
            </Section>
        </>
    )
}

export default LinkList