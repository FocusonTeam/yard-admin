import React, { useCallback, useEffect } from 'react'
import { isLoggedVar, userNameVar } from '../models/fragmentVar';
import { useRegenerateTokenMutation } from 'generated/graphql';
import { getLoginToken, setLoginToken, getStorage, removeLoginToken, removeStorage } from '../utils/storageUtils';
import { useLoginExtensionLazyQuery } from '../generated/graphql';
import { Navigate, useNavigate } from 'react-router-dom';
import { alerts } from 'utils/alerts';


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
      alerts({status : "info", title : "세션이 만료되었습니다", desc:"다시 로그인해주세요"});
      removeLoginToken('accessToken');
      removeLoginToken('refreshToken');
      removeStorage('adminID');
      isLoggedVar(false);
      navigate('/login');
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
      userNameVar(result.data.loginExtension.owner || "user");
      isLoggedVar(true);
    }
    if(result.error){
      alerts({status : "info", title : "세션이 만료되었습니다", desc:"다시 로그인해주세요"});
      removeLoginToken('accessToken');
      removeLoginToken('refreshToken');
      removeStorage('adminID');
      navigate('/login');
    }

  }, [isLoggedVar, userNameVar])

  return {
    loginWithRefreshToken,
    loginWithAccessToken
  }
}


export default useLoginRefresh