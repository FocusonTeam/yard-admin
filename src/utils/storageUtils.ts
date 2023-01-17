import { Cookies } from 'react-cookie';
import { accessTokenVar } from '../models/fragmentVar';
import moment from 'moment';

const cookies = new Cookies();

export const setLoginToken = (key : string, value: any) => {
  if(key === "accessToken"){
    accessTokenVar(value);
    const expired =  moment().add('60','m').toDate()
    return cookies.set(key, value, {path : '/', expires : expired});
  }
  if(key === 'refreshToken'){
    return cookies.set(key, value, {path : '/'});
  }
}

export const getLoginToken = (key : string) => {
  const token = cookies.get(key);
  return token;
}

export const removeLoginToken = (key: string) => {
  return cookies.remove(key, {path: '/'});
}



export const setCookie = (key: string, value :any) => {
  return cookies.set(key, value, {path : '/'});
}

export const getCookie = (key: string) => {
  const cookie = cookies.get(key);
  return cookie
}

export const removeCookie = (key: string) => {
  return cookies.remove(key, {path: '/'});
}



export const setStorage = (key : string, value: any) => {
  localStorage.setItem(key, value);
}

export const getStorage = (key : string) => {
  const localvalue = localStorage.getItem(key);
  return localvalue;
}

export const removeStorage = (key: string) => {
  return localStorage.removeItem(key);
}