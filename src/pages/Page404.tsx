import React from "react";
import Header from "../components/Header";

const Page404: React.FC = () => {
  return (
    <div>
      <Header />
      <div className="not-found-container">
        <div className="not-found-content">
          <h1>404</h1>
          <p>Oops! The page you're looking for doesn't exist.</p>
          <a href="/">Go back to the homepage</a>
        </div>
      </div>
    </div>
  );
};

export default Page404;
