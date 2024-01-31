import  { useState } from "react";
import { httpGet } from "../../axios/axiosUtils";
import { ISTUDENTS } from "../../shared/commonUtils";
import { useNavigate } from "react-router-dom";

const useGetStudents = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [students, setStudents] = useState<ISTUDENTS[]>();
  const naivgation = useNavigate();

  const getStudents = async () => {
    setLoading(true);
    try {
      const res = await httpGet("/student/get");
      if (res.status === 200) {
        setStudents(res.data);
        setLoading(false);
      }
    } catch (error) {
      //@ts-ignore
      if (error.response.status === 401){
        naivgation('/')
      }
      setLoading(false);
    }
  };
  return {
    students,
    getStudents,
    loading,
  };
};

export default useGetStudents;
