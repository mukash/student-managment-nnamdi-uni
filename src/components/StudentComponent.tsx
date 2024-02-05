import React from 'react'
import { ISTUDENTS } from '../shared/commonUtils';

export default function StudentComponent(props:any) {
    const student: ISTUDENTS = props.student;
    return (
        <div className='view-student-wrapper'>
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
        </div>
    )
}
