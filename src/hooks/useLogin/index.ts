import  { useState } from "react";
import { ILOGINFACULTY } from "../../shared/commonUtils";
import { httpPost } from "../../axios/axiosUtils";
import { toast } from "react-toastify";
import LocalStorageComponent from "../../components/LocalStorageComponents";
const useLogin = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const loginFacultyHandler = async (data: ILOGINFACULTY) => {
    setLoading(true);
    try {
      const res = await httpPost("faculty/auth/login", data);
      if (res.status === 200) {
        // console.log('"message": "Registration Successful",');
        toast.success(res?.message);
        LocalStorageComponent.setItemLocally("token", res.token);
        setSuccess(true);
        setLoading(false);
        return true;
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      //@ts-ignore
      toast.error(error?.response?.data?.message);
      return false;
    }
  };
  return {
    loading,
    success,
    loginFacultyHandler,
  };
};

export default useLogin;
