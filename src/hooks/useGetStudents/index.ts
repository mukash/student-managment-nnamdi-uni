import  { useState } from "react";
import { httpGet } from "../../axios/axiosUtils";
import { ISTUDENTS } from "../../shared/commonUtils";

const useGetStudents = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [students, setStudents] = useState<ISTUDENTS[]>();

  const getStudents = async () => {
    setLoading(true);
    try {
      const res = await httpGet("/student/get");
      if (res.status === 200) {
        setStudents(res.data);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  return {
    students,
    getStudents,
    loading,
  };
};

export default useGetStudents;
