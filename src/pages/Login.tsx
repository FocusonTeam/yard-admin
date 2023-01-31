import React, { useCallback, useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import styled from 'styled-components'
import {COLORS, FONTS} from '../styles/index';
import { useAdminLoginLazyQuery, useLoginExtensionLazyQuery, useLoginExtensionQuery } from '../generated/graphql';
import { YardLogo } from 'assets/images';
import { setLoginToken, setStorage } from '../utils/storageUtils';
import { isLoggedVar, userIdVar, userNameVar } from '../models/fragmentVar';

const Login = () => {

  console.log("endpoint :: ", process.env.REACT_APP_GRAPHQL_ENDPOINT);

  const navigate = useNavigate();

  const [adminID, setAdminID] = useState("");
  const [password, setPassword] = useState("");
  const [mismatchError, setMismatchError] = useState<Boolean>();

  const [loginResult, setLoginResult] = useAdminLoginLazyQuery();
  const [loginExt, loginExtResult] = useLoginExtensionLazyQuery();


  // 쿠키에 있는 토큰 먼저 꺼내서 로그인 되어있는지 확인
  // 새로고침시 로그인 자동 연장

  const onChange = useCallback((e : any) => {
    const {name, value} = e.target;
    if(name === "adminID"){
      setAdminID(value);
    }
    if(name === "password"){
      setPassword(value);
    }
  }, [adminID, password]);

  const handleEnterPress = (e:any) => {
    if(e.key === 'Enter'){
      loginWithAccount();
    }
  }

  const loginWithAccount = useCallback(async() => {

    const result = await loginResult({variables: {id : adminID, password: password}});
    if(result.data){

      console.log(adminID, password);
      setMismatchError(false);

      setLoginToken('accessToken', result.data.adminLogin.accessToken);
      setLoginToken('refreshToken', result.data.adminLogin.refreshToken);
      setStorage('adminID', adminID);

      userIdVar(adminID);
      userNameVar(result.data.adminLogin.owner || "user");
      isLoggedVar(true);

      navigate("/");
    }
    if(result.error){
      console.log(result.error);
      isLoggedVar(false);
      setMismatchError(true);
    }

  }, [loginResult, setLoginToken, navigate, adminID, password, userNameVar]);

  return (
    <Container>
      <Logo src={YardLogo} alt="yard" />
      <AccountInput
        name="adminID"
        placeholder="* ID" 
        required
        type="text" 
        defaultValue={adminID}
        onChange={onChange} />
      <AccountInput
        name="password"
        placeholder="* Password" 
        required
        type="password"
        defaultValue={password}
        onKeyPress={handleEnterPress}
        onChange={onChange} />
      { mismatchError ? <ErrorMsg>계정 정보가 일치하지 않습니다.</ErrorMsg> : <></>}
      <LoginButton onClick={loginWithAccount} >Login</LoginButton>
    </Container>
  )
}

export default Login

const Container = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20vh;
  background-color: white;
`;

const Logo = styled.img`
  min-width: 200px;
  max-height: 10vh;
  margin-bottom: 100px;
`

const AccountInput = styled.input`
  width: 300px;
  padding: 0.5rem 3rem;
  color: ${COLORS.charcol};
  font-size: large;
  background: white;
  border: 0.2px solid;
  border-color: ${COLORS.lightGray};
  border-radius: 1rem;
  margin-bottom: 20px;
`;

const LoginButton = styled.div`
  width: 300px;
  padding: 0.5rem 3rem;
  border-radius: 1rem;
  background-color: ${COLORS.accentColor};
  color: ${COLORS.white};
  font-size: 1.2rem;
  text-align: center;
  font-weight: 800;
`

const ErrorMsg = styled.div`
    color: ${COLORS.red};
    font-size: ${FONTS.body.fontSize}px;
    font-weight: ${FONTS.body.fontWeight};
`;