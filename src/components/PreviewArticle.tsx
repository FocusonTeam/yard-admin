import React, {useEffect, useState} from 'react';

import { COLORS, FONTS } from '../styles';
import { SPACING } from '../utils';
import styled from 'styled-components';
import SelectBox from './atoms/SelectBox';
import RadioButton from './atoms/RadioButton';
import { phoneSize } from '../utils/provider';

let SCREEN_WIDTH = 0;

const tagstyle = `
  <style>
    div > h2 {
      background-color: white;
      color: #19A2F7;
      font-weight: normal;
      font-size: 16px;
      padding: 0 20px 0 20px;
    }
    div > h1 {
      font-weight: bold;
      background-color: white;
      font-size: 22px;
      padding-top: 10px;
      padding: 0 20px 0 20px;
    }
    div > p {
      color:#1c1d20;
      padding: 10px 20px 50px 20px;
      background-color: white;
      font-size: 16px;
    }
    img {
      max-width: 100%;
    }
    div > h3 {
      font-size: 18px;
      background-color: white;
      padding: 0 20px 0 20px;
    }

  </style>
`

const PreviewArticle = (props: any) => {

  const [device, setDevice] = useState(0);

  const [theme, setTheme] = useState({ dark: false, light: false });
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [deviceContainer, setDeviceContainer] = useState("");
  const [deviceImage, setDeviceImage] = useState("");

  const [text, setText] = useState(props.htmltext);

  const onChangeTheme = (e : any) => {
    const { name } = e.target
    if (name === 'light') {
      setTheme({ dark: false, light: true })
    }
    if (name === 'dark') {
      setTheme({ dark: true, light: false })
    }
  }
  useEffect(() => {
    let phone = phoneSize[device];
    console.log(phoneSize, device);
    setWidth(phone?.size.width || 0);
    setHeight(phone?.size.height || 0);
    setDeviceContainer(phone?.className || "");
    setDeviceImage(phone?.safeArea || "");

    console.log("w, h", width, height, deviceContainer);
    SCREEN_WIDTH = width;
  }, [width, height, device, deviceImage]);
  
  return (
    <Container>
      <div className='flex p-2 gap-4 bg-white items-center justify-center rounded-xl drop-shadow-md'>
        <RadioButton
            name="dark"
            id="dark"
            value="Dark"
            text="Dark"
            onChange={onChangeTheme}
            checked={theme.dark}
          />
          <RadioButton
            name="light"
            id="light"
            value="Light"
            text="Light"
            onChange={onChangeTheme}
            checked={theme.light}
          />
          <SelectBox theme="device" handleChange={setDevice}/>
      </div>
      <div className={`z-0 border-gray-300 border ${deviceContainer} mt-5 `}>
        {device !== 0 && <DeviceContent dangerouslySetInnerHTML={{ __html: tagstyle + text }}/>}
      </div>
    </Container>
  )
}

const Container = styled.div`
  flex: 1;
  padding: 3rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 800px;
`


const DeviceContent=styled.div`
  height: 100%;
`

export default PreviewArticle;
