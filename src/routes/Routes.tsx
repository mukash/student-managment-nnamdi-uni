import React, { lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const Page404 = lazy(() => import("../pages/Page404"));
const FillForm = lazy(() => import("../pages/FillForm"));
const Login = lazy(() => import("../pages/Login"));
const ViewStudents = lazy(() => import("../pages/ViewStudents"));
const RoutesPage: React.FC = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<FillForm />} />
          <Route path="/login" element={<Login />} />
          <Route path="/view-students" element={<ViewStudents />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Router>
    </div>
  );
};

export default RoutesPage;
