import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { Link } from "react-router-dom";
import { load } from "../../helpers/localStorage";

class SignIn extends Component {
  state = {
    user: { password: "", email: "" },
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
    const {
      user: { password, email },
    } = this.state;
    event.preventDefault();
    let getUsers = load("users") || [];
    getUsers.forEach((user) => {
      if (user.email === email && user.password === password) {
        console.log("success");
      }
    });
  };

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
              onChange={this.onChange}
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="Password*"
              onChange={this.onChange}
            />
          </FormGroup>

          <FormGroup check>
            <Label check>
              <Input type="checkbox" /> Remember me
            </Label>
          </FormGroup>
          <div className="d-flex justify-content-center">
            <Button className="my-4 btn" onClick={this.onClick}>
              SIGN IN
            </Button>
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
