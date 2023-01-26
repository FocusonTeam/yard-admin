import React, { useState } from "react";
import ImageUploading, { ImageListType } from "react-images-uploading";
import { getStorage } from "firebase/storage";
import { Progress } from '@chakra-ui/react';
import { v4 as uuidv4 } from 'uuid';
import imageCompression from 'browser-image-compression';

import firebaseApp from "../../services/firebase";
import { ARTICLES_IMAGES_REF } from "utils/constants";
import AWS from 'aws-sdk';
import { alerts } from "utils/alerts";

const REGION = process.env.REACT_APP_AWS_REGION;
const S3_BUCKET = process.env.REACT_APP_AWS_S3_BUCKET_NAME;
const ACCESS_KEY =process.env.REACT_APP_AWS_ACCESS_KEY_ID;
const SECRET_ACCESS_KEY=process.env.REACT_APP_AWS_SECRET_ACCESS_KEY;


AWS.config.update({
  accessKeyId: ACCESS_KEY,
  secretAccessKey: SECRET_ACCESS_KEY,
});

export function ImageInputButton({handleImage} : any) {

  const [images, setImages] = useState([]);
  const [imgUrl, setImgUrl] = useState(null);
  const [progresspercent, setProgresspercent] = useState(0);
  const [imageFile, setImageFile] = useState<File>();

  const fileName = uuidv4();
  const storage = getStorage(firebaseApp);

  const onChange = (
    imageList: ImageListType,
    addUpdateIndex: number[] | undefined
  ) => {
    // data for submit
    console.log("imageList", imageList[0]);
    setImages(imageList as never[]);

    const file = imageList[0];
    console.log(file);

    if(file === undefined){
      return null;
    }else{
      console.log(file.file);
      compressImage(file.file!);
    }
  };

  const compressImage = async(image: File) => {
    try {
      const options = {
        maxSizeMB: 1,
        maxWidthOrHeight: 1920,
      }
      const compressedImage = await imageCompression(image, options);

      console.log(compressedImage.type);
      const filekey = `${ARTICLES_IMAGES_REF}/${fileName}${compressedImage.name}`

      const params = {
        Bucket: "yard-image-dev",
        Key: filekey,
        Body: compressedImage,
        ACL: 'public-read'
      }

      const upload = new AWS.S3.ManagedUpload({
        params: params
      });

      const promise = upload.promise();
      promise.then(
        function(data){
          const ImageInput = [data.Key, compressedImage.type]
          handleImage(ImageInput)
        },
        function(err){
          if(err){
            alerts({status : "error", title : "이미지 업로드에 실패했습니다"});
          }
        }
      );

    } catch (error) {
      console.log(error);
      alerts({status : "error", title : "이미지를 압축할 수 없습니다"});
    }
  }





  return (
    <>
        <div className="flex	bg-slate-100 rounded-md justify-center content-center p-4">
      <Progress value={progresspercent} size='xs' colorScheme='pink' />
      <ImageUploading
        value={images}
        onChange={onChange}
        maxFileSize={5000000}
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
              {errors.maxFileSize && <span>Selected file size exceed maxFileSize:5MB</span>}
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
    </>
  );
}
