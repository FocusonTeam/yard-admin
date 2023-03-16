import CardModal from 'components/atoms/CardModal'
import RadioButton from 'components/atoms/RadioButton';
import SearchBar from 'components/atoms/SearchBar';
import React, { useCallback, useEffect, useState } from 'react'
import Label from 'components/atoms/Label';
import { AreaData, CreateAreaInput, useAddAreaMutation, useSearchAreaDataLazyQuery } from 'generated/graphql';
import { alerts } from 'utils/alerts';
import { AreaPickCell } from 'components/atoms/AreaPickCell';
import { AreaInputCell } from 'components/AreaInputCell';
import styled from 'styled-components';
import { COLORS } from 'styles/colors';


export default function AreaModal() {

  const [keyword, setKeyword] = useState("");
  const [nationalOr, setNationalOr] = useState({ national : false, international: false }); // 지역 국내/외 선택
  const [areaData, setAreaData] = useState<AreaData[]>([]);
  const [pickArea, setPickArea] = useState<AreaData>();
  const [areaItem, setAreaItem] = useState<CreateAreaInput>();

  const [searchAreaData] = useSearchAreaDataLazyQuery({fetchPolicy: 'network-only'});
  const [addAreaData] = useAddAreaMutation();

  const onChangeNational = (e : any) => {
    const { name } = e.target
    if (name === 'international') {
      setNationalOr({ national: false, international: true })
    }
    if (name === 'national') {
      setNationalOr({ national: true, international: false })
    }
  }

  const [isActive, setIsActive] = useState(false);

  const onClickModalOff = () => {
    setIsActive(false);
  };

  const onClickAction = () => {
    addArea()
  }

  const searchArea = async () => {
    const searchAreaResults = await searchAreaData({
      variables: {
        domestic : nationalOr.national,
        keyword: keyword
      }
    });
    console.log(searchAreaResults.data?.searchAreaData);
    if(searchAreaResults.data){
      setAreaData(searchAreaResults.data.searchAreaData);
    }
    if(searchAreaResults.error){
      console.log(searchAreaResults.error);
      alerts({status : "error", title : "지역을 찾을 수 없습니다. 잠시 후 다시 시도해주세요😂"});
    }
  }


  const addArea = useCallback(async () => {
    const input : CreateAreaInput = {
      code: areaItem?.code!,
      activate: areaItem?.activate || false,
      domestic: areaItem?.domestic!,
      region1depth: areaItem?.region1depth,
      region2depth: areaItem?.region2depth!,
      symbol: areaItem?.symbol!,
      name: areaItem?.name,
      longitude: areaItem?.longitude,
      latitude: areaItem?.latitude,
    }

    try{
      const results = await addAreaData({
        variables: {input}
      })

      if(results.errors){
        alerts({status : "error", title : "지역을 추가할 수 없습니다. 잠시 후 다시 시도해주세요"});
        console.log(results.errors);
      }
      if(results.data){
        alerts({status : "info", title : "지역 추가가 완료되었습니다"});
        onClickModalOff();
        window.location.reload();
      }

    }catch(error){
      alerts({status : "error", title : "지역을 추가할 수 없습니다. 잠시 후 다시 시도해주세요"});
    }
    
  }, [areaItem]);

  useEffect(() => {
    console.log("keyword", keyword);
    if(keyword !== ""){
      console.log(keyword);
      searchArea();
    }
  }, [keyword]);

  const onPressArea = async (area : AreaData) => {
    console.log("press Area", area);
    setPickArea(area);
    setAreaItem({...areaItem!, 
      name: area.name, 
      code: area.code, 
      latitude: area.latitude,
      longitude: area.longitude,
      region1depth: area.region1depth,
      region2depth: area.region2depth,
    });
  }

  const handleChange = (e : any) => {
    const {name, value} = e.target;
    if(name === 'activate'){
      if(value === "T"){
        setAreaItem({...areaItem!, [name]: true});
      }else{
        setAreaItem({...areaItem!, [name]: false});
      }
    }else{
      setAreaItem({...areaItem!, [name] : value})
    }
  };

  useEffect(() => {
    console.log("areaItem INPUt", areaItem);
  }, [areaItem]);

  return (
    <CardModal closeEvent={onClickModalOff} title={"지역 추가"} actionMsg="추가" actionEvent={onClickAction}>
      <Label text="지역을 추가하시겠습니까?" size="XL"/>
      <Label text="추가할 지역을 검색해보세요" size="MD"/>
      <div className='flex p-2 gap-4 bg-white items-center justify-center rounded-xl'>
        <RadioButton
          name="national"
          id="national"
          value="national"
          text="국내"
          onChange={onChangeNational}
          checked={nationalOr.national}
        />
        <RadioButton
          name="international"
          id="international"
          value="international"
          text="해외"
          onChange={onChangeNational}
          checked={nationalOr.international}
        />
      </div>
      <SearchBar handleChange={setKeyword} placeholder="* 지역 검색  (Ex) 제주 "/>
      {areaData.map((area) => (
          <AreaPickCell
            key={area.code}
            name={area.region2depth}
            domestic={nationalOr.national}
            onPress={() => onPressArea(area)}
          />
      ))}
        {
          pickArea ? (
            <div className='flex flex-col p-3 border-b-1 content-center'>
              <div className='flex m-1'>
                <span className='w-24'>{"지역코드"}</span>
                <Labeling>{pickArea.code}</Labeling>
              </div>
              <div className='flex m-1'>
                <span className='w-24'>{"위경도"}</span>
                <Labeling>{pickArea.latitude}, {pickArea.longitude}</Labeling>
              </div>
              <div className='flex m-1'>
                <span className='w-24'>{"지역 상세"}</span>
                <Labeling>{pickArea.region1depth}, {pickArea.region2depth}</Labeling>
              </div>
              <Input
                name='symbol'
                placeholder="* symbol 🚩"
                defaultValue={""}
                onChange={(e : any) => handleChange(e)}
                maxLength={10}/>
              <Input
                name='activate'
                placeholder="* 앱 내 활성화 여부 T/F"
                defaultValue={""}
                onChange={(e : any) => handleChange(e)}
                maxLength={10}/>
              <Input
                name='description'
                placeholder="지역 상세 설명"
                defaultValue={""}
                onChange={(e : any) => handleChange(e)}
                maxLength={100}/>
            </div>
          ) : (<></>)
        }
    </CardModal>
  )
}



const Labeling = styled.span`
  flex: auto;
  color: ${COLORS.neutral_500};
  padding: 4px;
  border-width: 1px;
  border-radius: 10px;
  border-color: ${COLORS.neutral_300};

`

const Input = styled.input`
  margin-top: 0.5rem;
  padding: 0.5em;
  color: ${COLORS.charcol};
  width: 100%;
  font-size: large;
  background: white;
  border: 0.2px solid;
  border-color: ${COLORS.lightGray};
  border-radius: 0.375rem;
`;