import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { Link } from "react-router-dom";
import { load } from "../../helpers/localStorage";

class SignIn extends Component {
  state = {
    user: { password: "", email: "" },
    errors: {},
  };

  onChange = (event) => {
    this.setState({
      user: {
        ...this.state.user,
        [event.target.name]: event.target.value,
      },
    });
  };

  validation = (errors) => {
    const {
      user: { password, email },
    } = this.state;

    if (!/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i.test(email)) {
      errors.email = "Ivalid email";
    }

    if (password < 4) {
      errors.password = "Must be 4 characters or more";
    }
  };

  onClick = (event) => {
    event.preventDefault();
    const {
      user: { password, email },
    } = this.state;
    const errors = {};
    this.validation(errors);

    if (Object.keys(errors).length > 0) {
      this.setState({
        errors: errors,
      });
    } else {
      this.setState({
        errors: {},
      });
      let getUsers = load("users") || [];

      if (
        getUsers.some(
          (user) => user.email === email && user.password === password
        )
      ) {
        this.props.changeIsAuth();
      } else {
        alert("Wrong password or email");
      }
    }
  };

  render() {
    const { errors } = this.state;

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
            {errors.email ? (
              <div className="error mt-2">{errors.email}</div>
            ) : null}
          </FormGroup>
          <FormGroup>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="Password*"
              onChange={this.onChange}
            />
            {errors.password ? (
              <div className="error">{errors.password}</div>
            ) : null}
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
