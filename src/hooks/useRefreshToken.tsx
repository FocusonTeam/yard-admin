import { useLoginExtensionQuery, useRegenerateTokenMutation } from 'generated/graphql';
import React, { useCallback, useEffect } from 'react'
import { getLoginToken, setLoginToken, getStorage } from '../utils/storageUtils';



const useRefreshToken = () => {

  const [regenerateToken] = useRegenerateTokenMutation();

  const adminId = getLoginToken('adminId');
  const refreshtoken = getLoginToken('refreshToken');

  const onSaveTokens = useCallback(async () => {

    const result = await regenerateToken({
      variables : {id : adminId, refreshToken: refreshtoken}
    });

    if(result.data){
      setLoginToken('accessToken', result.data.regenerateToken.accessToken);
      setLoginToken('refreshToken', result.data.regenerateToken.refreshToken);
      return true;
    }
    if(result.errors){
      console.log(result.errors);
      return false;
    }

  }, [setLoginToken]);

  useEffect(() => {
    onSaveTokens()
  }, []);
}


export default useRefreshToken;