import React, { lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Regular from "../pages/Regular";
import CEP from "../pages/CEP";
import Diploma from "../pages/Diploma";
import Gradulate from "../pages/Gradulate";
const Page404 = lazy(() => import("../pages/Page404"));
const FillForm = lazy(() => import("../pages/FillForm"));
const Login = lazy(() => import("../pages/Login"));
// const ViewStudents = lazy(() => import("../pages/ViewStudents"));
const RoutesPage: React.FC = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<FillForm />} />
          <Route path="/login" element={<Login />} />
          <Route path="/regular" element={<Regular />} />
          <Route path="/cep" element={<CEP />} />
          <Route path="/diploma" element={<Diploma />} />
          <Route path="/graduates" element={<Gradulate />} />
          {/* <Route path="/view-students" element={<ViewStudents />} /> */}
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Router>
    </div>
  );
};

export default RoutesPage;
