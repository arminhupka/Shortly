import {Dispatch, ReactElement, SetStateAction} from "react";
import styled from "styled-components";
import {FaChevronLeft, FaChevronRight} from "react-icons/fa";


interface Props {
    paginationElements: (number | string)[];
    currentPage: number;
    changePage: Dispatch<SetStateAction<number>>;
    totalPages: number;
}

// Styled Components
const PaginationWrapper = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
`

const PaginationBtn = styled.button<{ current: boolean }>`
  width: 3rem;
  height: 3rem;
  margin: 0 .5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({theme, current}) => current && theme.white};;
  background: ${({theme, current}) => current ? theme.primary["500"] : "transparent"};
  border: ${({theme, current}) => current ? `.1rem solid ${theme.black}` : "none"};
  border-radius: ${({theme}) => theme.round.md};
  transition: background-color .3s;
  
  :hover {
    background: ${({theme, current}) => !current && theme.primary["100"]};
  }
`

const Separator = styled.span`
  width: 3rem;
  height: 3rem;
  margin: 0 .5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({theme}) => theme.round.md};
`

const Pagination = ({paginationElements, currentPage, changePage, totalPages}: Props): ReactElement => {

    const handlePrevPageBtn = () => {
        if(currentPage === 1) return;

        changePage(currentPage - 1);
    }

    const handleNextPageBtn = () => {
        if(currentPage === totalPages) return;

        changePage(currentPage + 1);
    }

    return (
        <PaginationWrapper>
            <PaginationBtn current={false} onClick={handlePrevPageBtn}>
                <FaChevronLeft/>
            </PaginationBtn>
            {paginationElements.map((element, index) => {
                if(element !== "...") {
                    return (
                        <PaginationBtn key={index} current={currentPage === element}
                                       onClick={() => changePage(Number(element))}>
                            {element}
                        </PaginationBtn>
                    )
                }

                return <Separator key={index}>...</Separator>
            })}
            <PaginationBtn current={false} onClick={handleNextPageBtn}>
                <FaChevronRight/>
            </PaginationBtn>
        </PaginationWrapper>
    )
}


export default Pagination
