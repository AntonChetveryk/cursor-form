import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { Link } from "react-router-dom";
import { save, load } from "../../helpers/localStorage";

class SignUp extends Component {
  state = {
    user: {
      firstName: "",
      lastName: "",
      password: "",
      email: "",
      isChecked: false,
    },
    errors: {},
  };

  onChange = (event) => {
    event.persist();
    const errors = {};

    this.setState(
      (state) => {
        return {
          user: {
            ...state.user,
            [event.target.name]: event.target.value,
          },
        };
      },
      () => {
        this.validation(errors);

        this.setState(
          (state) => {
            return {
              errors: {
                ...state.errors,
                [event.target.name]: errors[event.target.name],
              },
            };
          },

          () =>
            this.state.errors[event.target.name]
              ? (event.target.style.border = "1px solid red")
              : (event.target.style.border = "1px solid green")
        );
      }
    );
  };

  onChangeIsChecked = (e) => {
    this.setState({
      user: {
        ...this.state.user,
        isChecked: e.target.checked,
      },
    });
  };

  onClick = (event) => {
    event.preventDefault();
    const errors = {};
    let getUsers = load("users") || [];
    this.validation(errors);

    if (Object.keys(errors).length > 0) {
      this.setState({
        errors: errors,
      });
    } else {
      this.setState({
        errors: {},
      });
      if (getUsers.some((user) => user.email === this.state.user.email)) {
        alert("This email already exist");
      } else {
        save("users", [...getUsers, { ...this.state.user }]);
        alert("You have successfully registered!");
      }
    }
  };

  validation = (errors) => {
    const {
      user: { lastName, firstName, password, email },
    } = this.state;

    if (!/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i.test(email)) {
      errors.email = "Invalid email";
    }
    if (firstName.length < 3) {
      errors.firstName = "Must be 3 characters or more";
    }

    if (lastName.length < 3) {
      errors.lastName = "Must be 3 characters or more";
    }

    if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/.test(password)) {
      errors.password = "Wrong password";
    }
  };

  render() {
    const {
      user: { firstName, lastName, password, email, isChecked },
      errors,
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
              {errors.firstName ? (
                <div className="error">{errors.firstName}</div>
              ) : null}
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
              {errors.lastName ? (
                <div className="error">{errors.lastName}</div>
              ) : null}
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
              value={password}
              onChange={this.onChange}
            />
            {errors.password ? (
              <div className="error">{errors.password}</div>
            ) : null}
          </FormGroup>

          <FormGroup check>
            <Label check className="d-flex align-items-center">
              <Input
                type="checkbox"
                checked={isChecked}
                onChange={this.onChangeIsChecked}
              />
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
