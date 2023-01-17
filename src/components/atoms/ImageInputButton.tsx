import React, { useState } from "react";
import ImageUploading, { ImageListType } from "react-images-uploading";
import { getStorage, ref, uploadBytes, getDownloadURL, uploadBytesResumable, deleteObject } from "firebase/storage";
import { Progress } from '@chakra-ui/react';
import { v4 as uuidv4 } from 'uuid';
import imageCompression from 'browser-image-compression';

import firebaseApp from "../../services/firebase";
import { ARTICLES_IMAGES_REF } from "utils/constants";
import AWS from 'aws-sdk';

const REGION = process.env.REACT_APP_AWS_REGION;
const S3_BUCKET = process.env.REACT_APP_AWS_S3_BUCKET_NAME;
const ACCESS_KEY =process.env.REACT_APP_AWS_ACCESS_KEY_ID;
const SECRET_ACCESS_KEY=process.env.REACT_APP_AWS_SECRET_ACCESS_KEY;

// const config = {
//   bucketName: S3_BUCKET,
//   dirName: ARTICLES_IMAGES_REF, /* optional */
//   region: REGION,
//   accessKeyId: ACCESS_KEY,
//   secretAccessKey:  SECRET_ACCESS_KEY,
// }

AWS.config.update({
  accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
});

const s3Bucket = new AWS.S3({
  params: {bucket : S3_BUCKET},
  region: REGION
})

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

  const uploadFile = () => {

    //TODO :: 스토리지에 올리기 전, 이미지 1MB 이하로 압축할것
    // const storageRef = ref(storage, `${ARTICLES_IMAGES_REF}/${fileName}`);
    // const uploadTask = uploadBytesResumable(storageRef, file);

    // uploadTask.on("state_changed",
    //   (snapshot) => {
    //     const progress =
    //       Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
    //       setProgresspercent(progress);
    //   },
    //   (error) => {
    //     alert(error);
    //   },
    //   () => {
    //     getDownloadURL(uploadTask.snapshot.ref).then((downloadURL : any) => {
    //       setImgUrl(downloadURL);
    //       console.log(downloadURL);
    //     });
    //     const ImageInput = [ARTICLES_IMAGES_REF + fileName, file.type];
    //     handleImage(ImageInput);
    //   }
    // );
  }


  const compressImage = async(image: File) => {
    try {
      const options = {
        maxSizeMB: 1,
        maxWidthOrHeight: 1920,
      }
      const compressedImage = await imageCompression(image, options);

      console.log(compressedImage);

      // const upload = new AWS.S3.ManagedUpload({
      //   params: {
      //     Bucket: bucket!,
      //     Key: `${ARTICLES_IMAGES_REF}/${fileName}` + compressedImage.type,
      //     Body: compressedImage
      //   }
      // })
      const params = {
        Bucket: S3_BUCKET!,
        Key: `${ARTICLES_IMAGES_REF}/${fileName}` + compressedImage.type,
        Body: compressedImage,
        ACL: 'public-read'
      }

      s3Bucket.putObject(params)
        .on('httpUploadProgress', (evt) => {
          setProgresspercent(Math.round((evt.loaded / evt.total) * 100));
        })
        .send((err) => {
          if(err) alert("이미지 업로드에 실패했습니다");
          console.log(err);
        })


      // const promise = upload.promise();
      // promise.then(
      //   function (data) {
      //     alert("이미지 업로드에 성공했습니다.")
      //   },
      //   function (err) {
      //     return alert("오류가 발생했습니다: " + err);
      //   }
      // )

    } catch (error) {
      console.log(error);
      alert("이미지를 압축할 수 없습니다");
    }
  }



  return (
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
  );
}
