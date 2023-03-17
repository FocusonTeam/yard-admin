import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { CreationsType, useChangeCreationsStateMutation, useGetCreationsQuery } from 'generated/graphql';
import { Creations } from '../../generated/graphql';
import DataTable, { ExpanderComponentProps, TableColumn } from 'react-data-table-component';
import Label from 'components/atoms/Label';
import { TypeFill } from 'components/atoms/TableFill';
import { FaRegEyeSlash } from 'react-icons/fa';
import { CLOUD_STORAGE_PROD_URL } from 'utils/constants';
import { useCallback } from 'react';
import ModalBase from 'common/ModalBase';
import CardModal from 'components/atoms/CardModal';
import { alerts } from 'utils/alerts';

const customStyles = {
  rows: {
      style: {
        paddingTop: '4px',
        paddingBottom: '4px',
      },
      highlightOnHoverStyle: {
        backgroundColor: 'rgb(230, 240, 244)',
        borderBottomColor: '#FFFFFF',
        outline: '1px solid #FFFFFF',
      },
  },
  headCells: {
      style: {
        backgroundColor: '#ebebeb',
        fontSize: '14px',
        fontWeight: 600,
        paddingLeft: '8px', // override the cell padding for head cells
        paddingRight: '8px',
      },
  },
  cells: {
      style: {
          paddingLeft: '8px', // override the cell padding for data cells
          paddingRight: '8px',
      },
  },
};

export default function FeedManage() {

  const [itemState, setItemState] = useState({id: 0, type: "", state: true});

  const {data, refetch, loading, error} = useGetCreationsQuery({
    fetchPolicy: 'cache-and-network',
    variables: {type : null, reported: null}
  });

  const [changeState] = useChangeCreationsStateMutation();

  useEffect(() => {
    if(error){
      alert("피드를 불러올 수 없습니다😅");
    }
  }, [data, error])

  const columns = [
    {
      name: 'ID',
      selector: (row : any) => row.id,
      sortable: true,
      maxWidth: '80px',
    },
    {
        name: 'Creator',
        selector: (row : any) => row.creator,
        sortable: true,
        maxWidth: '120px', 
    },
    {
        name: 'contents',
        selector: (row : any) => row.contents,
        cell: (row : any) => (
          <div className="w-96 whitespace-normal">
            {row.contents}
          </div>
        ),
        minWidth: '240px'
    },
    {
      name: 'type',
      selector: (row : any) => row.type,
      cell: (row: any) => (
        TypeFill(row.type)
      ),
      maxWidth: '80px', 
    },
    {
      name : '신고',
      selector: (row : any) => row.reported,
      cell: (row : any) => (
          <div className="flex justify-center">
              <h3>{row.reported ? (`${row.reported}`) : ("")}</h3>
          </div>
      ),
      sortable: true,
      maxWidth: '60px',
    },
    {
      name: '작성일자',
      selector: (row : any) => row.createdAt,
      sortable: true,
      maxWidth: '200px',
    },
    {
      name: '상태',
      cell: (row: any) => (
        <div className='flex justify-center'>
          {row.open ? (<></>) : (<FaRegEyeSlash />)}
        </div>
      ),
      maxWidth: '40px'
    },
    {
      button: true,
      cell: (row: any) => (
        <div className='flex justify-center'>
          {row.open ? (
          <button className='bg-red-100 p-2 rounded-lg' onClick={clickOpenHandler} id={row.id} name={row.type} value={row.open}>
            {"앱에서 내리기"}
          </button>) : (
          <button className='bg-blue-100 p-2 rounded-lg' onClick={clickOpenHandler} id={row.id} name={row.type} value={row.open}>
            {"앱에 올리기"}
          </button>)}
        </div>
      ),
      ignoreRowClick: true,
    }
  ];

  const [isActive, setIsActive] = useState(false);

  const onClickModalOff = () => {
    setIsActive(false);
  };


  const handleChange = ({ selectedRows } : any) => {
    // You can set state or dispatch with something like Redux so we can use the retrieved data
    console.log('Selected Rows: ', selectedRows);
  };

  const clickOpenHandler = (e : any) => {
    const {id, name, value} = e.target;
    console.log(id, name, value);
    setIsActive(true);
    setItemState({id: id, type: name, state: !value});
  }

  const onClickChangeState = useCallback(async () => {
    try{
      const changeResults = await changeState({
        variables : {
          id: itemState.id,
          type: itemState.type === CreationsType.Post ? CreationsType.Post : CreationsType.Comment,
          state: itemState.state
        }
      })
      if(changeResults.data?.changeCreationsState){
        console.log(changeResults.data.changeCreationsState);
      }
      if(changeResults.errors){
        alerts({status : "error", title : "게시글 상태 변경을 할 수 없습니다. 잠시 후 다시 시도해주세요😂"});
      }
    }catch(err){
      console.log(err);
      alerts({status : "error", title : "게시글 상태 변경을 할 수 없습니다. 잠시 후 다시 시도해주세요😂"});
    }
  }, [])

  const ExpandedComponent: React.FC<ExpanderComponentProps<Creations>> = ({ data }) => {
    if(data.images !== null){
      return (
        <div className='flex'>
          <ImageContainer>
            {data.images?.map((i) => (
              <Thumbnail src={CLOUD_STORAGE_PROD_URL! + i.path}/>
            ))}
          </ImageContainer>
        </div>
      )
    }else{
      return <></>
    }

  };


  if(loading){
    return (
      <div>
        <Label text="데이터를 불러오고 있습니다" />
      </div>
    )
  }

  return (
    <Container>
      <>
      <div>
        <DataTable
          title="YARD 피드 관리"
          columns={columns}
          data={data?.getCreations!}
          pagination
          fixedHeader={true}
          expandableRows
          expandableRowsComponent={ExpandedComponent}
          expandOnRowClicked={true}
          onSelectedRowsChange={handleChange}
          customStyles={customStyles}
          highlightOnHover
        />
      </div>
      <ModalBase active={isActive} closeEvent={onClickModalOff}>
        <CardModal closeEvent={onClickModalOff} title="" actionMsg="확인" actionEvent={onClickChangeState}>
          <Label text="게시글 상태를 변경하시겠습니까?" size="XL"/>
        </CardModal>
      </ModalBase>
      </>
    </Container>
  )
}


const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 1000px;
  margin: 3rem;
  padding: 3rem;
  padding-bottom: 5rem;
  background-color: white;
`

const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 50px;
  padding-right: 50px;
`

const Thumbnail = styled.img`
  border-radius: 5px;
  object-fit: scale-down;
  max-height: 240px;
  margin: 10px;
`;