import React, { useState } from "react";
import { IREGISTERUSER } from "../../shared/commonUtils";
import { httpPost } from "../../axios/axiosUtils";
import { toast } from "react-toastify";
const useRegister = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const registerStudentApi = async (data: IREGISTERUSER) => {
    setLoading(true);
    try {
      const res = await httpPost("student/register", data);
      if (res.status === 200) {
        console.log('"message": "Registration Successful",');
      }
      setLoading(false);
    } catch (error) {
        console.log(error);
      setLoading(false);
      //@ts-ignore
      toast(error?.response?.data?.message);
    }
  };
  return {
    loading,
    registerStudentApi,
  };
};

export default useRegister;
