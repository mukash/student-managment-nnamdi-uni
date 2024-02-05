import React, { useEffect, useState } from 'react'
import SideMenu from '../components/SideMenu'
import useGetStudents from '../hooks/useGetStudents';
import SearchBar from '../shared/SearchBar';
import { ISTUDENTS } from '../shared/commonUtils';
import StudentComponent from '../components/StudentComponent';

export default function Graduate() {
  const { loading, students, getStudents } = useGetStudents();
  // Initialize state for counts
  const [yearCounts, setYearCounts] = useState<any>({});
  const [studenRaw, setStudentRaw] = useState<ISTUDENTS[]>([]);
  const [filterdData, setFilterdData] = useState<ISTUDENTS | undefined>({
    Year: "",
    Status: "",
    State: "",
    MiddleName: "",
    LocalGovernment: "",
    datetime: 0,
    RegistrationNo: "",
    StudentId: "",
    AdmissionType: "",
    AdmissionMode: "",
    LastName: "",
    Name: "",
  });
  const [search, setSearch] = useState<string>("");


  useEffect(() => {
    getStudents();
  }, []);
  // Count occurrences
  useEffect(() => {
    if (students) {
      const yearCountsObj: any = {};
      const temp:ISTUDENTS[] = []
      students.forEach((student) => {
        if (student.Status === 'Graduate') {
          const year = student.Year;
          temp.push(student);
          // Count by year
          yearCountsObj[year] = (yearCountsObj[year] || 0) + 1;
        }
      });
      setStudentRaw([...temp])
      
      // Update state with counts
      setYearCounts(yearCountsObj);
    }
  }, [students]); // Run the effect whenever students change
  const handleSearchChange = (event: any) => {
    // Handle search input change if needed
    setSearch(event.target.value);
    // console.log(event.target.value);
  };
  const filterDataHandler = () => {
    if (students) {
      if (search === "") {
        setFilterdData({
          Year: "",
          Status: "",
          State: "",
          MiddleName: "",
          LocalGovernment: "",
          datetime: 0,
          RegistrationNo: "",
          StudentId: "",
          AdmissionType: "",
          AdmissionMode: "",
          LastName: "",
          Name: "",
        });
        return;
      }
      setFilterdData(studenRaw.find(student => student.RegistrationNo === search));
    }
  };
  return (
    <div className="col-md-12">
    <div className="row mr-0">
      <SideMenu />
      <div className="col-md-10 main-container fixed-container">
          <SearchBar
            onPressSearch={filterDataHandler}
            placeholder="Search by registration number..."
            onChange={handleSearchChange}
          />
          {filterdData?.RegistrationNo?<StudentComponent student={filterdData} />:<p className='text-center mt-4'>No Student Found</p>}
      </div>
      </div>
    </div>
  )
}
