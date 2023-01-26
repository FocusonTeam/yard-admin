import React, { Suspense } from 'react'
import styled from 'styled-components';
import { MdAdd } from 'react-icons/md';

import { COLORS } from 'styles/colors';
import ContentItem from './ContentItem';
import useContentFunc from '../hooks/useContentFunc';


function ContentsList() {

  const {
    contentCards,
    addEmptyContentCard,
    updateContentCard,
    deleteContentCard,
    swapContentCards,
    clearContentsCards
  } = useContentFunc();

  const ColumnTasks = contentCards.map((card, index) => (
    <ContentItem
      key={card.id}
      contentsCard={card}
      index={index}
      onDropHover={swapContentCards}
      onUpdate={updateContentCard}
      onDelete={deleteContentCard}
    />
  ));

  return (
    <Container>
      {ColumnTasks}
      <CircleButton onClick={addEmptyContentCard}>
        <MdAdd />
      </CircleButton>
    </Container>
  )
}


export default ContentsList;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding-bottom: 50px;
  gap:1em;
  border-radius: 0.375rem;
`

const CircleButton = styled.button`
  background: ${COLORS.accentColor};
  &:hover {
    background: ${COLORS.accentColorActive};
  }
  &:active {
    background: #20c997;
  }
  z-index: 30;
  cursor: pointer;
  width: 80px;
  height: 80px;
  display: block;
  align-items: center;
  justify-content: center;
  font-size: 60px;
  position: absolute;
  left: 50%;
  bottom: 0px;
  transform: translate(-50%, -50%);
  color: white;
  border-radius: 50%;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.125s all ease-in;
`;