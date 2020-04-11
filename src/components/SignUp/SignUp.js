import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { Link } from "react-router-dom";
import { save, load } from "../../helpers/localStorage";

class SignUp extends Component {
  state = {
    user: { firstName: "", lastName: "", password: "", email: "" },
  };

  onChange = (event) => {
    this.setState({
      user: {
        ...this.state.user,
        [event.target.name]: event.target.value,
      },
    });
  };

  onClick = (event) => {
    event.preventDefault();
    let getUsers = load("users") || [];
    save("users", [...getUsers, { ...this.state.user }]);
  };

  render() {
    const {
      user: { firstName, lastName, password, email },
    } = this.state;

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
                value={firstName}
                onChange={this.onChange}
              />
            </FormGroup>
            <FormGroup>
              <Input
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Last name*"
                value={lastName}
                onChange={this.onChange}
              />
            </FormGroup>
          </div>
          <FormGroup>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Email address*"
              value={email}
              onChange={this.onChange}
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="Password*"
              value={password}
              onChange={this.onChange}
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
            <Button className="my-4 btn" onClick={this.onClick}>
              SIGN UP
            </Button>
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
