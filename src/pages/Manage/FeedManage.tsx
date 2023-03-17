import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { CreationsType, useGetCreationsQuery } from 'generated/graphql';
import { Creations } from '../../generated/graphql';
import DataTable, { TableColumn } from 'react-data-table-component';
import Label from 'components/atoms/Label';
import { TypeFill } from 'components/atoms/TableFill';
import { FaRegEyeSlash } from 'react-icons/fa';

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

  const [type, setType] = useState<CreationsType | null>(null);
  const [reported, setReported] = useState<boolean | null>(null);
  const [dataArray, setDataArray] = useState<Creations[]>([]);

  const {data, refetch, loading, error} = useGetCreationsQuery({
    fetchPolicy: 'cache-and-network',
    variables: {type : null, reported: null}
  });

  useEffect(() => {
      if(data){
          console.log("tableData", data.getCreations);
      }
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
              <h3>{row.reported ? ("🚨") : ("")}</h3>
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
      button: true,
      cell: (row: any) => (
        <div className='flex justify-center'>
          {row.open ? (<></>) : (<FaRegEyeSlash />)}
        </div>
      )
    },
    // {
    //   cell: (row : any) => <MaterialMenu on />,
    //   allowOverflow: true,
    //   button: true,
    //   width: '56px',
    // },
  ];


  const handleChange = ({ selectedRows } : any) => {
    // You can set state or dispatch with something like Redux so we can use the retrieved data
    console.log('Selected Rows: ', selectedRows);
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
          selectableRows
          onSelectedRowsChange={handleChange}
          customStyles={customStyles}
          highlightOnHover
        />
      </div>
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