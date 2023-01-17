import React, { useCallback } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useReactiveVar } from "@apollo/client";

import { removeLoginToken, removeStorage } from "utils/storageUtils";
import { isLoggedVar } from "models/fragmentVar";

// const JWT_EXPIRY_TIME = 24 * 3600 * 1000; // 만료 시간 (24시간 밀리 초로 표현)

const useLogout = () => {

  const logout = useCallback(() => {
    removeLoginToken('accessToken');
    removeLoginToken('refreshToken');
    removeStorage('adminID');
    isLoggedVar(false);
  }, [])


  return {
    logout,
  }
}

export default useLogout;