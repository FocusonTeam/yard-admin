import { ContentModel } from 'models/models';
import { useCallback } from 'react';
import { swap } from 'utils/helpers';
import { v4 as uuidv4 } from 'uuid';
import useContentCollection from './useContentCollection';

const MAX_CARD_PER_COLUMN = 10;

function useContentsFunc() {
  const [contentCards, setContentCards] = useContentCollection();

  const columnTasks = contentCards.Contents;

  const addEmptyContentCard = useCallback(() => {
    setContentCards((allTasks) => {
      const columnTasks = allTasks.Contents;

      if (columnTasks.length > MAX_CARD_PER_COLUMN) {
        console.log('10개 이상 컨텐츠를 작성할 수 없습니다.');
        return allTasks;
      }

      const newColumnTask: ContentModel = {
        id: uuidv4(),
        image: [],
        subtitle: "",
        content: "",
      };

      return {
        ...allTasks,
        Contents: [newColumnTask, ...columnTasks],
      };
    });
  }, [setContentCards]);

  const deleteContentCard = useCallback(
    (id: ContentModel['id']) => {
      // console.log(`Removing task ${id}..`);
      setContentCards((allTasks) => {
        const columnTasks = allTasks.Contents;
        return {
          ...allTasks,
          Contents: columnTasks.filter((task) => task.id !== id),
        };
      });
    },
    [setContentCards],
  );

  const updateContentCard = useCallback(
    (id: ContentModel['id'], updatedTask: Omit<Partial<ContentModel>, 'id'>) => {
      // console.log(`Updating task ${id} with ${JSON.stringify(updateContentCard)}`);
      setContentCards((allTasks) => {
        const columnTasks = allTasks.Contents;
        return {
          ...allTasks,
          Contents: columnTasks.map((task) =>
            task.id === id ? { ...task, ...updatedTask } : task,
          ),
        };
      });
    },
    [setContentCards],
  );


  const swapContentCards = useCallback(
    (i: number, j: number) => {
      console.log(`Swapping task ${i} with ${j} in column`);
      setContentCards((allTasks) => {
        const columnTasks = allTasks.Contents;
        return {
          ...allTasks,
          Contents: swap(columnTasks, i, j),
        };
      });
    },
    [setContentCards],
  );

  return {
    contentCards: columnTasks,
    addEmptyContentCard,
    updateContentCard,
    deleteContentCard,
    swapContentCards,
  };
}

export default useContentsFunc;
