import { ContentModel } from 'models/models';
import { useLocalStorage } from 'usehooks-ts';
import { ColumnType } from 'utils/enums';

import { v4 as uuidv4 } from 'uuid';

function useContentCollection() {
  return useLocalStorage<{
    [key in ColumnType]: ContentModel[];
  }>('contentsform', {
    Contents: [
      {
        id: uuidv4(),
        image: [],
        subtitle: 'subtitle',
        content: 'content',
      },
    ],
  });
}

export default useContentCollection;
