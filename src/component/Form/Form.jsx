import React from "react";
import Button from "../Button/Button";
import "./Form.scss";

const Form = () => {
  return (
    <div>
      <form action="" className="form" data-testid="form">
        <h1>Add your course</h1>
        <div className="form-input">
          <div>
            <label htmlFor="for name">Name:</label>
            <input type="search" name="Name" placeholder="name"/>
          </div>

          <div>
            <label htmlFor="for location">Location:</label>
            <input type="search" name="location" placeholder="location"/>
          </div>

          <div>
            <label htmlFor="for price">Price:</label>
            <input type="search" name="price" placeholder="price"/>
          </div>

          <div>
            <label htmlFor="for duration">Duration:</label>
            <input type="search" name="duration" placeholder="duration"/>
          </div>

          <div>
            <label htmlFor="for summary">Summary:</label>
            <input type="search" name="summary" placeholder="summary"/>
          </div>
        </div>

        <div className="button-box">
          <Button buttonText={"Cancel"} className="button" />
          <Button buttonText={"Save"} className="button" />
        </div>
        
      </form>
    </div>
  );
};

export default Form;
