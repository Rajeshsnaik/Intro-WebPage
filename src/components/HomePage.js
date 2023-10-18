import React from "react";
import devImg from "../assets/a3.gif";
import "bootstrap/dist/css/bootstrap.min.css";

const HomePage = () => {
  return (
    <>
      <div className="parent-container">
        <div className="row h-100 align-items-center">
          <div className="col-md-6">
            <img src={devImg} alt="loading" height={500} />
          </div>
          <div className="col-md-6">
            <div className="brand-container">
              <h1>
                <b> Rajesh Naik </b>
              </h1>
              <p> Full - Stack Developer </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
