import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { Link } from "react-router-dom";

class SignIn extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="text-center mb-4">Sign in</h1>
        <Form>
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
            <Label check>
              <Input type="checkbox" /> Remember me
            </Label>
          </FormGroup>
          <div className="d-flex justify-content-center">
            <Button className="my-4 btn">SIGN IN</Button>
          </div>

          <div className="d-flex justify-content-between">
            <Link to="/">Forgot password</Link>
            <Link to="/sign-up">Sign up</Link>
          </div>
        </Form>
      </div>
    );
  }
}

export default SignIn;
