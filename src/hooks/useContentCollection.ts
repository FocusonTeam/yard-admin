import { ArticleContentFragment } from 'generated/graphql';
import { ContentModel } from 'models/models';
import { useLocalStorage } from 'usehooks-ts';
import { ColumnType } from 'utils/enums';

function useContentCollection() {
  return useLocalStorage<{[key in ColumnType]: ArticleContentFragment[];}>('contentstorage', {
    Contents: [],
  });
}

export default useContentCollection;
