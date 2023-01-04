import React, {useEffect, useState} from 'react';

import { COLORS, FONTS } from '../styles';
import { SPACING } from '../utils';
import styled from 'styled-components';
import SelectBox from './atoms/SelectBox';
import RadioButton from './atoms/RadioButton';
import { phoneSize } from '../utils/provider';
import { AppleIphone11, AppleIphone14Pro, SamsungGalaxyS21, SamsungGalaxyZFlip3 } from 'assets/images';

let SCREEN_WIDTH = 0;

const tagsStyles = {
	body: {
			color: '#1c1d20',
			fontSize: 16,
			lineHeight: FONTS.title.fontSize + 2,
			paddingLeft: SPACING.wide,
			paddingRight: SPACING.wide,
			paddingTop: 10,
			paddingBottom: 50,
			backgroundColor: '#ffffff',
	},
	h1: {
			marginTop: 5,
			fontSize: 22,
			fontWeight: 'bold',
	},
	h2: {
			color: '#19A2F7' ,
			fontSize: 16,
			fontWeight: 'normal',
	},
	h3: {
			fontSize: 18,
			fontWeight: 'bold',
	},
	img: {
			width: SCREEN_WIDTH,
			height: SCREEN_WIDTH,
	},
};

const PreviewArticle = (props: any) => {

  const [device, setDevice] = useState("");

  const [theme, setTheme] = useState({ dark: false, light: false });
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [deviceImage, setDeviceImage] = useState("");

  const [text, setText] = useState(props.htmltext);

  console.log(text);

  const onChangeTheme = (e : any) => {
    const { name } = e.target
    if (name === 'light') {
      setTheme({ dark: false, light: true })
    }
    if (name === 'dark') {
      setTheme({ dark: true, light: false })
    }
  }

  console.log("device :: ", device);
  useEffect(() => {
    let phone = phoneSize.find(function(data){return data.name === device})
    setWidth(phone?.size.width || 0);
    setHeight(phone?.size.height || 0);
    setDeviceImage(phone?.className || "");

    console.log(width, height, deviceImage);
    SCREEN_WIDTH = width;
  }, [width, height, device])

  // TODO :: html css 추가
  
  return (
    <Container>
      <div className='flex p-2.5 gap-4 bg-white items-center justify-center rounded-xl drop-shadow-md'>
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
      <div className={`z-0 border-gray-300 border ${deviceImage} mt-5 `}>
        {device !== "" && <DeviceContent dangerouslySetInnerHTML={{ __html: text }}/>}
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
  max-width: 700px;
`

const SelectContainer = styled.div`
  display: flex;
  background-color: white;
  gap:1rem;
  z-index: 2;
  align-items: center;
  justify-content: center;
  width : 500px;
  padding: 10px;
  border-radius: 0.375rem;
`

// const HtmlContainer = styled.div<{width : number, height: number}>`
//   width: ${props => props.width}px;
//   height: ${props => props.height}px;
//   margin-top: 20px;
//   border-radius: 3rem;
//   padding-top: 20px;
//   background-color: white;
//   overflow-y: scroll;
//   ::-webkit-scrollbar {
//     display: none;
//   }
// `;

const DeviceContent=styled.div`

`

export default PreviewArticle;
