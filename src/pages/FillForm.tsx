import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import useRegister from "../hooks/useRegister";
import { ToastContainer } from "react-toastify";
import Row from "react-bootstrap/Row";
import Header from "../components/Header";
import { IREGISTERUSER, NigerianStates } from "../shared/commonUtils";
import { Spinner } from "react-bootstrap";

const FillForm: React.FC = () => {
  const { registerStudentApi, loading } = useRegister();
  const [registrationNo, setRegistrationNo] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [middleName, setMiddleName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [state, setState] = useState<string>("");
  const [localGovernment, setLocalGovernment] = useState<string>("");
  const [admissionMode, setAdmissionMode] = useState<string>("");
  const [year, setYear] = useState<string>("");
  const [admissionType, setAdmissionType] = useState<string>("");
  const startYear = 2000;
  const endYear = 2024;
  const [status, setStatus] = useState<string>("");
  const years = Array.from(
    { length: endYear - startYear + 1 },
    (_, index) => startYear + index
  );
  const onPressSubmit = () => {
    var data: IREGISTERUSER = {
      RegistrationNo: registrationNo,
      Name: name,
      MiddleName: middleName,
      LastName: lastName,
      State: state,
      LocalGovernment: localGovernment,
      AdmissionMode: admissionMode,
      AdmissionType: admissionType,
      Status: status,
      Year: year,
    };
    registerStudentApi(data);
  };
  return (
    <Form className="pt-5 fillFormWrapper">
      <ToastContainer />
      <Form.Group>
        <Header />
      </Form.Group>
      <Form.Group controlId="formGridEmail">
        <Form.Label>Registration Number</Form.Label>
        <Form.Control
          type="text"
          placeholder="eg 20232442"
          onChange={(e) => setRegistrationNo(e.target.value)}
        />
      </Form.Group>
      <Row className="mb-3 mt-3">
        <Col xs={12} md={4}>
          <Form.Group controlId="formGridPassword">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="eg: John"
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col xs={12} md={4}>
          <Form.Group controlId="formGridPassword">
            <Form.Label>Middle Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="eg: Doe"
              onChange={(e) => setMiddleName(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col xs={12} md={4}>
          <Form.Group controlId="formGridPassword">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="eg: Johns"
              onChange={(e) => setLastName(e.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col xs={12} md={6}>
          <Form.Group controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Select
              defaultValue="Please select states"
              onChange={(e) => setState(e.target.value)}
            >
              <option value={""}>Please select states</option>
              {NigerianStates.map((item, index) => {
                return (
                  <option key={index} value={item}>
                    {item}
                  </option>
                );
              })}
              {/* <option>Choose...</option> */}
              {/* <option>...</option> */}
            </Form.Select>
          </Form.Group>
        </Col>
        <Col xs={12} md={6}>
          <Form.Group controlId="formGridState">
            <Form.Label>Local government of origin</Form.Label>
            <Form.Select
              aria-label="Default select example"
              onChange={(e) => setLocalGovernment(e.target.value)}
            >
              <option value={""}>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col xs={12} md={6}>
          <Form.Group controlId="formGridState">
            <Form.Label>Admission mode</Form.Label>
            <Form.Select
              defaultValue="Choose..."
              onChange={(e) => setAdmissionMode(e.target.value)}
            >
              <option value={""}>Choose...</option>
              <option value={"UTME"}>UTME</option>
              <option value={"direct_entry"}>Direct entry</option>
            </Form.Select>
          </Form.Group>
        </Col>
        <Col xs={12} md={6}>
          <Form.Group controlId="formGridState">
            <Form.Label>Admission type</Form.Label>
            <Form.Select
              aria-label="Default select example"
              onChange={(e) => setAdmissionType(e.target.value)}
            >
              <option value={""}>Choose...</option>
              <option value="Regular">Regular</option>
              <option value="CEP">CEP</option>
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>

      <Form.Group controlId="formGridState">
        <Form.Label>Status</Form.Label>
        <Form.Select
          defaultValue="Choose..."
          onChange={(e) => setStatus(e.target.value)}
        >
          <option>Choose...</option>
          <option value={"Current"}>Current</option>
          <option value={"Graduate"}>Graduate</option>
        </Form.Select>
      </Form.Group>
      {status === "Current" && (
        <Form.Group controlId="formGridState">
          <Form.Label>Select your year</Form.Label>
          <Form.Select
            defaultValue="Select the year"
            onChange={(e) => setYear(e.target.value)}
          >
            <option value={""}>Choose...</option>
            <option value={"yearone"}>1st year</option>
            <option value={"yeartwo"}>2nd year</option>
            <option value={"yearthird"}>3rd year</option>
            <option value={"yearfourth"}>4th year</option>
            <option value={"yearfifth"}>5th year</option>
            <option value={"yearsixth"}>6th year</option>
          </Form.Select>
        </Form.Group>
      )}
      {status === "Graduate" && (
        <Form.Group controlId="formGridState">
          <Form.Label>Select the year of graduation</Form.Label>
          <Form.Select
            defaultValue="Select the  year"
            onChange={(e) => setYear(e.target.value)}
          >
            <option value={""}>Choose...</option>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
      )}

      <div className="d-grid gap-2 mt-3 fillFormButton">
        <Button
          variant="primary"
          disabled={loading}
          // type="submit" size="lg"
          onClick={onPressSubmit}
        >
          {!loading ? (
            "Submit"
          ) : (
            <>
              <Spinner
                as="span"
                animation="grow"
                size="sm"
                role="status"
                aria-hidden="true"
              />
              {" Loading..."}
            </>
          )}
        </Button>
      </div>
    </Form>
  );
};

export default FillForm;
