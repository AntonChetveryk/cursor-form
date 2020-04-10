import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { Link } from "react-router-dom";

class SignUp extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="text-center mb-4">Sign up</h1>
        <Form>
          <div className="d-flex justify-content-around">
            <FormGroup className="mr-2">
              <Input
                type="text"
                name="firstName"
                id="firstName"
                placeholder="First name*"
              />
            </FormGroup>
            <FormGroup>
              <Input
                type="text"
                name="lasttName"
                id="lasttName"
                placeholder="Last name*"
              />
            </FormGroup>
          </div>
          <FormGroup>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Email address*"
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="Password*"
            />
          </FormGroup>

          <FormGroup check>
            <Label check className="d-flex align-items-center">
              <Input type="checkbox" />
              <span className="text-center mt-2">
                I want to receive inspiration, marketing promotion and updates
                via email
              </span>
            </Label>
          </FormGroup>
          <div className="d-flex justify-content-center">
            <Button className="my-4 btn">SIGN UP</Button>
          </div>
          <div className="d-flex justify-content-end">
            <Link to="/">SIGN IN</Link>
          </div>
        </Form>
      </div>
    );
  }
}

export default SignUp;
