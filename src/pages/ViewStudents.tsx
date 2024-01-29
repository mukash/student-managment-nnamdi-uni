import React from "react";
import Table from "react-bootstrap/Table";
import Header from "../components/Header";
const ViewStudents: React.FC = () => {
  return (
    <div>
      {/* tod we will use this in futrte */}
      <Header />
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
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>@mdo</td>
            <td>Thornton</td>
            <td>Nigeria</td>
            <td>SSSS</td>
            <td>UTME</td>
            <td>Regular</td>
            <td>Current</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>@fat</td>
            <td>Thornton</td>
            <td>Nigeria</td>
            <td>SSSS</td>
            <td>Direct entry</td>
            <td>CEP</td>
            <td>graduate</td>
          </tr>
          {/* <tr>
            <td>3</td>
            <td colSpan={2}>Larry the Bird</td>
            <td>@twitter</td>
          </tr> */}
        </tbody>
      </Table>
    </div>
  );
};

export default ViewStudents;
