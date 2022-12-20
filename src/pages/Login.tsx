import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import styled from 'styled-components'
import {COLORS, FONTS} from '../styles/index';

export default function Login() {

  const navigate = useNavigate();

  const [adminID, setAdminID] = useState("");
  const [password, setPassword] = useState("");
  const [mismatchError, setMismatchError] = useState<Boolean>();

  const loginWithAccount = () => {

    console.log(adminID, password);

    if(adminID === "admin" && password === "1234"){
      setMismatchError(false);
      navigate("/yard-admin/");
      console.log("로그인 성공!");
    }else{
      setMismatchError(true);
    }
  }

  return (
    <Container>
      <img src={require("../assets/images/yardlogo.png")} alt="yard" />
      <form onSubmit={loginWithAccount}>
        <input
          type="text"
          value={adminID}
          placeholder="ID"
          onChange={({ target }) => setAdminID(target.value)}
        />
        <div>
          <input
            type="password"
            value={password}
            placeholder="PASSWORD"
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>
        { mismatchError ? <ErrorMsg>계정 정보가 일치하지 않습니다.</ErrorMsg> : <></>}
        <button type="submit">Login</button>
      </form>
    </Container>
  )
}


const Container = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20vh;
  background-color: white;
  gap: 5rem;
  img {
    width: auto;
    max-height: 15vh;
  }
  input {
    width: 300px;
    padding: 0.5rem 4rem;
    background-color: white;
    border: 2px solid #eee;
    border-radius: 5rem;
    margin-top: 10px;
  }
  button {
      width: 300px;
      padding: 0.5rem 3rem;
      border-radius: 5rem;
      border: none;
      background-color: ${COLORS.accentColor};
      color: ${COLORS.white};
      font-size: 1rem;
      margin-top: 10px;
      cursor: pointer;
  }
`;

const ErrorMsg = styled.text`
    color: ${COLORS.red};
    font-size: ${FONTS.body.fontSize}px;
    font-weight: ${FONTS.body.fontWeight};
`;