import { memo, useEffect, useState } from 'react';
import styled from 'styled-components';
import _ from 'lodash';
import {RiDeleteBack2Line} from 'react-icons/ri';
import { IconButton, Textarea } from '@chakra-ui/react';

import useDragDrop from 'hooks/useDragDrop';
import { COLORS } from 'styles/colors';
import { ImageInputButton } from 'components/atoms/ImageInputButton';
import { UploadImageInput, ArticleContentFragment } from '../generated/graphql';
import { CLOUD_STORAGE_BASE_URL } from 'utils/constants';
import { Button } from './atoms/Button';

type ContentItemProps = {
  index: number;
  contentsCard: ArticleContentFragment;
  onUpdate: (id: ArticleContentFragment['id'], updatedContent: ArticleContentFragment) => void;
  onDelete: (id: ArticleContentFragment['id']) => void;
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
  const [originImage, setOriginImage] = useState<Boolean>(false);

  const { ref, isDragging } = useDragDrop<HTMLDivElement>(
    { contentsCard, index: index },
    handleDropHover,
  );

  useEffect(() => {

    //컨텐츠에 이미지 있는 경우 - 이미지 경로
    if(contentsCard.image?.path !== null){
      setOriginImage(true);
    }

    //컨텐츠에 이미지 없는 경우
    if(contentsCard.image === null || contentsCard.image === undefined || _.isEmpty(contentsCard.image)){
      setOriginImage(false);
    }
  }, [contentsCard]);

  useEffect(() => {
    //새로운 이미지로 삽입
    if(originImage === false && image !== null){

      const imageInput = {
        path: image[0],
        mimetype: image[1],
      }
      handleUpdate(contentsCard.id, {...contentsCard, image: imageInput})
    }
  }, [image]);

  const handleChange = (e : any) => {
    const {name, value} = e.target;
    handleUpdate(contentsCard.id, { ...contentsCard, [name]: value });
  };

  const handleDeleteClick = () => {
    handleDelete(contentsCard.id);
  };

  // 기존 이미지 변경
  const onChangeImage = () => {
    setOriginImage(false);
  }

  return (
    <Container
      ref={ref}>
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
      <ImageContainer>
        {originImage ? (<>
          <Image src={CLOUD_STORAGE_BASE_URL! + contentsCard.image?.path}/>
          <Button label='이미지 변경 / 삭제' onClick={onChangeImage} tailStyle='p-2 text-[#19A2F7] mx-2 font-semibold border mt-2'/>
        </>) : (<>
          <ImageInputButton savePath="ARTICLE" handleImage={setImage}/>
        </>)}
      </ImageContainer>
      <SubTitleInput
        name="subtitle"
        placeholder="* 소제목을 입력하세요" 
        required
        type="text" 
        defaultValue={contentsCard.subtitle || ""}
        onChange={(e) => handleChange(e)}
        maxLength={30}/>
      <ContentInput
        name='content'
        placeholder="* 야드의 이야기를 적어보세요..."
        defaultValue={contentsCard.content || ""}
        onChange={(e : any) => handleChange(e)}
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

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Image = styled.img`
  width:100%;
  height: 400px;
  object-fit:contain;
`;

const ContentInput = styled(Textarea)`
  padding: 0.5em;
  color: ${COLORS.charcol};
  font-size: large;
  height: 200px;
  margin-top: 10px;
  margin-bottom: 30px;
  width: 100%;
  background: white;
  border: 0.2px solid;
  border-color: ${COLORS.lightGray};
  border-radius: 0.375rem;
  text-align: start;
  overflow: auto;
`;

// const ContentInput = defineStyle({
//   borderColor: `${COLORS.charcol}`,
//   background: `${COLORS.white}`,
//   fontSize: "lg",
//   _focus: {
//     borderColor: "purple.500"
//   },
//   _dark: {
//     background: "purple.900",
//   }
// });

