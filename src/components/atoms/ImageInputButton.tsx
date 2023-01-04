import React, { useState } from "react";
import ImageUploading, { ImageListType } from "react-images-uploading";
import { getStorage, ref, uploadBytes, getDownloadURL, uploadBytesResumable, deleteObject } from "firebase/storage";
import { Progress } from '@chakra-ui/react';
import { v4 as uuidv4 } from 'uuid';

import { UploadImageInput } from "generated/graphql";
import firebaseApp from "../../services/firebase";
import { ARTICLES_IMAGES_REF } from "utils/constants";

export function ImageInputButton({handleImage} : any) {
  const [images, setImages] = useState([]);
  const [imgUrl, setImgUrl] = useState(null);
  const [progresspercent, setProgresspercent] = useState(0);
  const maxNumber = 1;

  const fileName = uuidv4();
  const storage = getStorage(firebaseApp);

  const onChange = (
    imageList: ImageListType,
    addUpdateIndex: number[] | undefined
  ) => {
    // data for submit
    console.log("imageList", imageList[0]);
    setImages(imageList as never[]);

    const file = imageList[0].file;
    if(!file){
      return null;
    }

    const storageRef = ref(storage, `${ARTICLES_IMAGES_REF}/${fileName}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on("state_changed",
      (snapshot) => {
        const progress =
          Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
          setProgresspercent(progress);
      },
      (error) => {
        alert(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL : any) => {
          setImgUrl(downloadURL);
          console.log(downloadURL);
        });
        const ImageInput = [`${ARTICLES_IMAGES_REF}/${fileName}`, file.type];
        handleImage(ImageInput);
      }
    );

    
  };



  // const DeleteImage = () => {
  //   if(imgUrl!==null){
  //     deleteObject(ref(storage, imgUrl));
  //   }
  // }



  return (
    <div className="flex	bg-slate-100 rounded-md justify-center content-center p-4">
      <Progress value={progresspercent} size='xs' colorScheme='pink' />
      <ImageUploading
        value={images}
        onChange={onChange}
        maxFileSize={2000000}
      >
        {({
          imageList,
          onImageUpload,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
          errors
        }) => (
          // write your building UI
          <div>
            <button
              className="flex justify-center text-xl text-slate-800"
              style={isDragging ? { color: "red" } : undefined}
              onClick={onImageUpload}
              {...dragProps}
            >
              Click or Drop here
            </button>
            {errors && <div>
              {errors.maxNumber && <span>Number of selected images exceed maxNumber</span>}
              {errors.acceptType && <span>Your selected file type is not allow</span>}
              {errors.maxFileSize && <span>Selected file size exceed maxFileSize</span>}
            </div>}
            {/* <button onClick={onImageRemoveAll}>Remove all images</button> */}
            {imageList.map((image, index) => (
              <div key={index}>
                <img src={image.dataURL} alt="" width="300" />
                <div>
                  <button className="mt-2 text-slate-800 p-2 rounded-md" onClick={() => onImageUpdate(index)}>Update</button>
                  <button className="mt-2 text-rose-700 p-2 bg-red-200 rounded-md" 
                    onClick={() => {
                      onImageRemove(index)
                    }}>Remove</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
    </div>
  );
}
