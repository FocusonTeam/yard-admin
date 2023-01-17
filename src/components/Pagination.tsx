import React from "react";
import styled from "styled-components";

const Pagination = ({ totalPosts, postsPerPage, setCurrentPage, currentPage } : any) => {
    let pages = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pages.push(i);
    }

    return (
        <PageContainer>
            {pages.map((page, index) => {
                return (
                    <PageButton
                        key={index}
                        onClick={() => setCurrentPage(page)}
                        className={page == currentPage ? "active" : ""}>
                        {page}
                    </PageButton>
                );
            })}
        </PageContainer>
    );
};

const PageContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 1rem;
    margin-bottom: 1rem;
`

const PageButton = styled.button`
  width: 40px;
  height: 40px;
  font-family: inherit;
  font-weight: 600;
  font-size: 16px;
  margin: 0 10px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
  background: transparent;
  color: #101010;
  border-color: #101010;
  &:active,
  &:foucus {
    font-weight: 900;
    border-color: #101010;
    background: #e5dc8a;
    color: #101010;
  }
`

export default Pagination;