import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Header from "../components/Header";

import useGetStudents from "../hooks/useGetStudents";
import { Pagination } from "react-bootstrap";
import SearchBar from "../shared/SearchBar";
import { ISTUDENTS } from "../shared/commonUtils";
import NoRecordsFound from "../shared/NoRecordsFound";
const ViewStudents: React.FC = () => {
  const { loading, students, getStudents } = useGetStudents();
  const [filterdData, setFilterdData] = useState<ISTUDENTS[]>([]);
  const [search, setSearch] = useState<string>("");
  const handleSearchChange = (event: any) => {
    // Handle search input change if needed
    setSearch(event.target.value);
    // console.log(event.target.value);
  };
  const filterDataHandler = () => {
    if (students) {
      if (search === "") {
        setFilterdData(students);
        return;
      }
      setFilterdData(students.filter((item) => item.RegistrationNo === search));
    }
  };
  useEffect(() => {
    getStudents();
  }, []);
  useEffect(() => {
    if (students) {
      setFilterdData(students);
    }
  }, [students]);

  return (
    <div>
      {/* tod we will use this in futrte */}
      <Header />
      {/* <Pagination> */}
      <SearchBar
        onPressSearch={filterDataHandler}
        placeholder="Search by registration number..."
        onChange={handleSearchChange}
      />
      <Table striped="columns" responsive>
        <thead>
          <tr>
            <th>Registration #</th>
            <th>First Name</th>
            <th>Middle Name</th>
            <th>Last Name</th>
            <th>State</th>
            <th>Local government of origin</th>
            <th>Admission Mode</th>
            <th>Admission Type</th>
            <th>Status</th>
            <th>Year</th>
          </tr>
        </thead>
        {!loading && filterdData && (
          <>
            <tbody>
              {filterdData.map((item, index) => {
                return (
                  <tr>
                    <td>{item.RegistrationNo}</td>
                    <td>{item.Name}</td>
                    <td>{item.MiddleName}</td>
                    <td>{item.LastName}</td>
                    <td>{item.State}</td>
                    <td>{item.LocalGovernment}</td>
                    <td>{item.AdmissionMode}</td>
                    <td>{item.AdmissionType}</td>
                    <td>{item.Status}</td>
                    <td>{item.Year}</td>
                  </tr>
                );
              })}
            </tbody>
          </>
        )}
      </Table>
      {filterdData.length === 0 && <NoRecordsFound />}
    </div>
  );
};

export default ViewStudents;
