import React from "react";
import { Form, FormGroup, Input, Button } from "reactstrap";

const FindCarForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted!");
  };
  return (
    <Form onSubmit={handleSubmit} className="form">
      <div className="d-flex align-items-center justify-content-between flex-wrap">
        <FormGroup className="form__group">
          <Input type="text" placeholder="From address" required />
        </FormGroup>

        <FormGroup className="form__group">
          <Input type="text" placeholder="To address" required />
        </FormGroup>

        <FormGroup className="form__group">
          <Input type="date" placeholder="Journey date" required />
        </FormGroup>

        <FormGroup className="form__group">
          <Input
            className="journey__time"
            type="time"
            placeholder="Journey time"
            required
          />
        </FormGroup>

        <FormGroup className="select__group">
          <Input type="select">
            <option value="ac">AC Car</option>
            <option value="non-ac">Non AC Car</option>
          </Input>
        </FormGroup>

        <FormGroup className="form__group">
          <Button className="btn find__car-btn">Find Car</Button>
        </FormGroup>
      </div>
    </Form>
  );
};

export default FindCarForm;
