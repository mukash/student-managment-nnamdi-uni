import React, { useRef } from 'react'

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ISTUDENTS } from '../../shared/commonUtils';
import { jsPDF } from "jspdf";

function StudentInfoModal(props: any) {
  const student: ISTUDENTS = props.student;
  const reportTemplateRef = useRef<any>(null);

  const handleDownload = () => {
    const doc = new jsPDF({
      format: "a4",
      unit: "px"
    });

    doc.setLineWidth(100)
    const studentInfoHTML = `
    <div  style="width: 450px; display: flex; align-items: center; justify-content: center;">
      <div style="width: 450px; padding: 20px; box-shadow: 0px 0px 10px 10px rgb(0 0 0 / 4%); border-radius: 20px;">
          <div style="border-bottom: 1px solid #ddd; display: flex; align-items: center; justify-content: space-between;padding: 10px">
            <p style="color: #6b6565; margin:0">Reg no</p>
            <p style="font-size: 16px;font-weight: bold; margin:0">${student.RegistrationNo}</p>
          </div>
           <div style="border-bottom: 1px solid #ddd; display: flex; align-items: center; justify-content: space-between;padding: 10px">
          <p style="color: #6b6565; margin:0">First Name</p>
          <p style="font-size: 16px;font-weight: bold; margin:0">${student.Name}</p>
        </div>
         <div style="border-bottom: 1px solid #ddd; display: flex; align-items: center; justify-content: space-between;padding: 10px">
          <p style="color: #6b6565; margin:0">Middle Name</p>
          <p style="font-size: 16px;font-weight: bold; margin:0">${student.MiddleName}</p>
        </div>
         <div style="border-bottom: 1px solid #ddd; display: flex; align-items: center; justify-content: space-between;padding: 10px">
          <p style="color: #6b6565; margin:0">Last Name</p>
          <p style="font-size: 16px;font-weight: bold; margin:0">${student.LastName}</p>
        </div>

         <div style="border-bottom: 1px solid #ddd; display: flex; align-items: center; justify-content: space-between;padding: 10px">
          <p style="color: #6b6565; margin:0">State</p>
          <p style="font-size: 16px;font-weight: bold; margin:0">${student.State}</p>
        </div>
         <div style="border-bottom: 1px solid #ddd; display: flex; align-items: center; justify-content: space-between;padding: 10px">
          <p style="color: #6b6565; margin:0">Local government</p>
          <p style="font-size: 16px;font-weight: bold; margin:0">${student.LocalGovernment}</p>
        </div>
         <div style="border-bottom: 1px solid #ddd; display: flex; align-items: center; justify-content: space-between;padding: 10px">
          <p style="color: #6b6565; margin:0">Mode</p>
          <p style="font-size: 16px;font-weight: bold; margin:0">${student.AdmissionMode}</p>
        </div>
         <div style="border-bottom: 1px solid #ddd; display: flex; align-items: center; justify-content: space-between;padding: 10px">
          <p style="color: #6b6565; margin:0">Type</p>
          <p style="font-size: 16px;font-weight: bold; margin:0">${student.AdmissionType}</p>
        </div>
        <div style="display: flex; align-items: center; justify-content: space-between;padding: 10px">
          <p style="color: #6b6565; margin:0">Status</p>
          <p style="font-size: 16px;font-weight: bold; margin:0">${student.Status}</p>
        </div>

      </div>
  </div>
    `;
    doc.html(studentInfoHTML, {
      async callback(doc) {
        doc.save("student_info_" + student.RegistrationNo);
      }
    });
  }
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Student Information
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {student !== undefined && student.RegistrationNo !== undefined && student.RegistrationNo !== '' ?
          <div className='view-student-wrapper' ref={reportTemplateRef}>
            <div className="student-wrapper">
              <div className="student-info border-btm">
                <p className="section-title m-0">Reg no</p>
                <p className="section-title-value m-0">{student.RegistrationNo}</p>
              </div>
              <div className="student-info border-btm">
                <p className="section-title m-0">First Name</p>
                <p className="section-title-value m-0">{student.Name}</p>
              </div>
              {student.MiddleName && <div className="student-info border-btm">
                <p className="section-title m-0">Middle Name</p>
                <p className="section-title-value m-0">{student.MiddleName}</p>
              </div>}

              <div className="student-info border-btm">
                <p className="section-title m-0">Last Name</p>
                <p className="section-title-value m-0">{student.LastName}</p>
              </div>

              <div className="student-info border-btm">
                <p className="section-title m-0">State</p>
                <p className="section-title-value m-0">{student.State}</p>
              </div>
              <div className="student-info border-btm">
                <p className="section-title m-0">Local government</p>
                <p className="section-title-value m-0">{student.LocalGovernment}</p>
              </div>
              <div className="student-info border-btm">
                <p className="section-title m-0">Mode</p>
                <p className="section-title-value m-0">{student.AdmissionMode}</p>
              </div>
              <div className="student-info border-btm">
                <p className="section-title m-0">Type</p>
                <p className="section-title-value m-0">{student.AdmissionType}</p>
              </div>
              <div className="student-info">
                <p className="section-title m-0">Status</p>
                <p className="section-title-value m-0">{student.Status}</p>
              </div>

            </div>
          </div> : <p className='text-center mt-4'>No Student Found</p>}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleDownload}>Download</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default StudentInfoModal;