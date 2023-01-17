import React from 'react'
import styled from 'styled-components'

import Label from 'components/atoms/Label'
import ManageBasicInfo from 'components/ManageBasicInfo';

export default function YardManage() {

  return (
    <Container>
      <Label text="야드 운영 관리" size="XL"/>      
      <ManageBasicInfo theme="areas" />
      <ManageBasicInfo theme="categories" />
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
