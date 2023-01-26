import React, { useCallback } from 'react'
import { uuidv4 } from '@firebase/util';

import { ArticleContentFragment } from 'generated/graphql';
import { swap } from 'utils/helpers';
import { useReactiveVar } from '@apollo/client';
import { contentsVar } from 'models/fragmentVar';
import useContentCollection from './useContentCollection';


const MAX_CARD_PER_COLUMN = 10;

function useContentFunc() {

  const [contentCards, setContentCards] = useContentCollection();
  const columnCards = contentCards.Contents;
  const contentListVar = useReactiveVar(contentsVar);

  
  const settingAllContentCard = useCallback(() => {
    console.log(contentCards);
    setContentCards(() => {
      if(contentListVar === null){
        return {
          Contents: columnCards
        }
      }else{
        return {
          Contents: contentListVar
        }
      }
    })
  }, [setContentCards]);


  const addEmptyContentCard = useCallback(() => {
    setContentCards((allCards) => {
      const columnCards = allCards.Contents;

      if(columnCards.length > MAX_CARD_PER_COLUMN){
        console.log('10개 이상 컨텐츠를 작성할 수 없습니다.');
        return allCards;
      }

      const newColumnCard : ArticleContentFragment = {
        id: Math.floor(Math.random() * (1001)),
        index: null,
        subtitle: "",
        content: "",
        image: null
      }

      return {
        ...allCards,
        Contents: [...columnCards, newColumnCard]
      }
    })
  }, [setContentCards]);

  const deleteContentCard = useCallback(
    (id: ArticleContentFragment['id']) => {
      console.log(`Remove card ${id}`);
      setContentCards((allCards) => {
        const columnCards = allCards.Contents;
        return {
          Contents : columnCards.filter((card) => card.id !== id),
        }
      })
  }, [setContentCards]);


  const updateContentCard = useCallback(
    (id: ArticleContentFragment['id'], updatedCard: Omit<Partial<ArticleContentFragment>, 'id'>) => {
      setContentCards((allCards) => {
        const columnCards = allCards.Contents;
        return {
          ...allCards,
          Contents: columnCards.map((card) => 
            card.id === id ? { ...card, ...updatedCard} : card
          )
        }
      });
    }, [setContentCards]);


  const swapContentCards = useCallback(
      (i: number, j: number) => {
        console.log(`Swapping task ${i} with ${j} in column`);
        setContentCards((allCards) => {
          const columnCards = allCards.Contents;
          return {
            ...allCards,
            Contents: swap(columnCards, i, j),
          };
        });
      },
      [setContentCards],
    );
  
  
    const clearContentsCards = useCallback(() => {
      setContentCards((allCards) => {
        const columnCards = allCards.Contents;
        
        return {
          Contents: columnCards.splice(0, columnCards.length)
        };
      });
      console.log("clear contents", contentCards);

      localStorage.removeItem('contentstorage');

    }, [setContentCards]);


  return {
    contentCards: columnCards,
    setContentCards,
    settingAllContentCard,
    addEmptyContentCard,
    updateContentCard,
    deleteContentCard,
    swapContentCards,
    clearContentsCards
  }
}

export default useContentFunc;