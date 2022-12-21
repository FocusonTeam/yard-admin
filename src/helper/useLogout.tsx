import React from "react";
import { useNavigate } from "react-router-dom";

const useLogout = async () => {

  const navigate = useNavigate();

  try{
    navigate("/yard-admin/login");
  }catch(err) {
    console.error(err);
  }
}

export default useLogout;