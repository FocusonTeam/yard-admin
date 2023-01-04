import { memo, useEffect, useState } from 'react';
import styled from 'styled-components';
import _ from 'lodash';
import {RiDeleteBack2Line} from 'react-icons/ri';

import useDragDrop from 'hooks/useDragDrop';
import { ContentModel } from 'models/models';
import { COLORS } from 'styles/colors';
import { IconButton } from '@chakra-ui/react';
import { ImageInputButton } from 'components/atoms/ImageInputButton';
import { UploadImageInput } from '../generated/graphql';

type ContentItemProps = {
  index: number;
  contentsCard: ContentModel;
  onUpdate: (id: ContentModel['id'], updatedContent: ContentModel) => void;
  onDelete: (id: ContentModel['id']) => void;
  onDropHover: (i: number, j: number) => void;
};

function ContentItem({
  index,
  contentsCard,
  onUpdate: handleUpdate,
  onDropHover: handleDropHover,
  onDelete: handleDelete,
}: ContentItemProps) {

  const [image, setImage] = useState([]);

  const { ref, isDragging } = useDragDrop<HTMLDivElement>(
    { contentsCard, index: index },
    handleDropHover,
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    console.log(name, value);
    handleUpdate(contentsCard.id, { ...contentsCard, [name]: value });
  };

  const handleDeleteClick = () => {
    handleDelete(contentsCard.id);
  };

  console.log("image:::", image);
  useEffect(() => {
    if(image !== null){
      handleUpdate(contentsCard.id, {...contentsCard, image:image});
    }
  })

  return (

    <Container
      ref={ref}
      >
      <LabelContainer>
        <Label>컨텐츠 작성</Label>
        <IconButton
            aria-label="delete-task"
            size="lg"
            colorScheme="solid"
            color={'gray.700'}
            icon={<RiDeleteBack2Line />}
            onClick={handleDeleteClick}
          />
      </LabelContainer>
      <ImageInputButton handleImage={setImage}/>
      <SubTitleInput
        name="subtitle"
        placeholder="* 소제목을 입력하세요" 
        required
        type="text" 
        defaultValue={contentsCard.subtitle}
        onChange={(e) => handleChange(e)}
        maxLength={30}/>
      <ContentInput
        name='content'
        placeholder="* 야드의 이야기를 적어보세요..."
        type="text" 
        defaultValue={contentsCard.content}
        onChange={(e) => handleChange(e)}
        maxLength={300}/>
    </Container>
  );
}
export default memo(ContentItem, (prev, next) => {
  if (
    _.isEqual(prev.contentsCard, next.contentsCard) &&
    _.isEqual(prev.index, next.index) &&
    prev.onDelete === next.onDelete &&
    prev.onDropHover === next.onDropHover &&
    prev.onUpdate === next.onUpdate
  ) {
    return true;
  }

  return false;
});



const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background-color: white;
  margin-bottom: 20px;
  gap:1em;
  filter: drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06));
  border-radius: 0.375rem;
`


const LabelContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const Label = styled.div`
  font-size: large;
  font-weight: 600;
  min-width: 80px;
  margin: 10px;
`;

const SubTitleInput = styled.input`
  padding: 0.5em;
  color: ${COLORS.charcol};
  width: 100%;
  font-size: large;
  background: white;
  border: 0.2px solid;
  border-color: ${COLORS.lightGray};
  border-radius: 0.375rem;
`;

const ContentInput = styled.input`
  padding: 0.5em;
  color: ${COLORS.charcol};
  font-size: large;
  height: 200px;
  margin-top: 10px;
  width: 100%;
  background: white;
  border: 0.2px solid;
  border-color: ${COLORS.lightGray};
  border-radius: 0.375rem;
  text-align: start;
`;