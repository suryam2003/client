/* eslint-disable react/jsx-pascal-case */
import React from "react";
import Button from "./Components/Button";
import Input from "./Components/Input";
import Img from "./Img1.jpg";
import "./Form.css";
import Nav_side from "../../Nav_side";


function Form() {
  return (
    <>
      <Nav_side />
      <div className="Maincontainer">
        <img id="img" src={Img} alt="Img" />
        <div className="Formcontainer">
          <div className="headingg">&nbsp;&nbsp;Provide Training</div>
          <Input Placeholder="Trainer Name" />
          <Input Placeholder="Traning Subject" />
          <Input Placeholder="Company or Organization Name" />
          <Input Placeholder="Training Period ( In day's )" />
          <Input Placeholder="Start Date" />
          <Input Placeholder="Start Time" />
          <Input Placeholder="Student Enrolled" />
          <Button title="Set Training" />
        </div>
      </div>

    </>
  );
}

export default Form;
