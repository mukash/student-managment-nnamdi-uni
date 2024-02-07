import React, { useEffect, useState } from 'react'
import SideMenu from '../components/SideMenu'
import useGetStudents from '../hooks/useGetStudents';
import SearchBar from '../shared/SearchBar';
import { ISTUDENTS } from '../shared/commonUtils';
import StudentInfoModal from '../components/modals/StudentInfoModal';
export default function Regular() {
  const { students, getStudents } = useGetStudents();
  // Initialize state for counts
  const [yearCounts, setYearCounts] = useState<any>({});
  const [studenRaw, setStudentRaw] = useState<ISTUDENTS[]>([]);
  const [modalShow, setModalShow] = React.useState(false);
const [showNoStudent, setShowNoStudent] = useState(false)
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // Count occurrences
  useEffect(() => {
    if (students) {
      const yearCountsObj: any = {};
      const temp:ISTUDENTS[] = []
      students.forEach((student) => {
        
          if (student.Status === 'Current') {
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
    if (studenRaw) {
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
      let student = studenRaw.find(student => student.RegistrationNo === search);
      if(student){
        setModalShow(true)
        setFilterdData(student);
        setShowNoStudent(false)
      }else{
        setShowNoStudent(true);
      }
    }
  };
  return (
    <div className="col-md-12">
      <div className="row mr-0">
        <SideMenu />
        <div className="col-md-10 main-container fixed-container">
        <div className="omni-content-wrapper">
            <div className="trans-box">
              <div className="trans-box-left mb-4">
                <div className="inner-left">
                  <div className="pending-left">1st Year Studens</div>
                </div>
                <div className="trans-price-left ">{!yearCounts.yearone ? 0 :yearCounts.yearone}</div>
              </div>
              <div className="trans-box-left mb-4">
                <div className="inner-left">
                  <div className="pending-left">2nd Year Studens</div>
                </div>
                <div className="trans-price-left ">{!yearCounts.yeartwo  ? 0 : yearCounts.yeartwo}</div>
              </div>
              <div className="trans-box-left mb-4">
                <div className="inner-left">
                  <div className="pending-left">3rd Year Studens</div>
                </div>
                <div className="trans-price-left ">{!yearCounts.yearthird ? 0 : yearCounts.yearthird}</div>
              </div>
              <div className="trans-box-left mb-4">
                <div className="inner-left">
                  <div className="pending-left">4th Year Studens</div>
                </div>
                <div className="trans-price-left ">{!yearCounts.yearfourth  ? 0 : yearCounts.yearfourth }</div>
              </div>
            </div>
          </div>
          <SearchBar
            onPressSearch={filterDataHandler}
            placeholder="Search by registration number..."
            onChange={handleSearchChange}
          />
          {showNoStudent?<p className='text-center mt-4'>No Student Found</p>:<></>}
          {/* {filterdData?.RegistrationNo?<StudentComponent student={filterdData} />:<p className='text-center mt-4'>No Student Found</p>} */}
          {/* <Button variant="primary" onClick={() => setModalShow(true)}>
                Launch vertically centered modal
              </Button> */}
              <StudentInfoModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    student={filterdData}
                  />
        </div>
      </div>
    </div>
  )
}