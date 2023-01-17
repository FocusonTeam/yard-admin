import React, { useCallback, useEffect } from 'react'
import { isLoggedVar } from '../models/fragmentVar';
import { useRegenerateTokenMutation } from 'generated/graphql';
import { getLoginToken, setLoginToken, getStorage, removeLoginToken, removeStorage } from '../utils/storageUtils';
import { useLoginExtensionLazyQuery } from '../generated/graphql';
import { Navigate, useNavigate } from 'react-router-dom';
import useLogout from './useLogout';


function useLoginRefresh(){

  const [regenerateToken, setRegenrateToken] = useRegenerateTokenMutation();
  const [loginExtension, setLoginExtension] = useLoginExtensionLazyQuery();

  const userId = getStorage('adminID');
  const accessToken = getLoginToken('accessToken');
  const refreshToken = getLoginToken('refreshToken');
  const navigate = useNavigate();

  const loginWithRefreshToken = useCallback(async() => {

    console.log(userId, refreshToken);

    const result = await regenerateToken({
      variables: {
        id: userId!,
        refreshToken: refreshToken
      },
    });

    console.log(result);

    if(result.data){
      removeLoginToken('accessToken');
      removeLoginToken('refreshToken');
      setLoginToken('accessToken', result.data.regenerateToken.accessToken);
      setLoginToken('refreshToken', result.data.regenerateToken.refreshToken);
      isLoggedVar(true);
    }
    if(result.errors){
      alert("세션이 만료되었습니다");
      removeLoginToken('accessToken');
      removeLoginToken('refreshToken');
      removeStorage('adminID');
      isLoggedVar(false);
      navigate('/yard-admin/login');
    }
  }, [isLoggedVar]);

  const loginWithAccessToken = useCallback(async() => {

    const result = await loginExtension({
      variables: {
        id: userId!
      }
    })
    
    if(result.data){
      removeLoginToken('accessToken');
      removeLoginToken('refreshToken');
      setLoginToken('accessToken', result.data.loginExtension.accessToken);
      setLoginToken('refreshToken', result.data.loginExtension.refreshToken);
      isLoggedVar(true);
    }
    if(result.error){
      alert("세션이 만료되었습니다");
      removeLoginToken('accessToken');
      removeLoginToken('refreshToken');
      removeStorage('adminID');
      navigate('/yard-admin/login');
    }

  }, [isLoggedVar])

  return {
    loginWithRefreshToken,
    loginWithAccessToken
  }
}


export default useLoginRefresh