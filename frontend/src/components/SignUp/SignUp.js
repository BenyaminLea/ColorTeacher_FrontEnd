import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { postSignUp } from '../lib/api'

export default function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConf, setPasswordConf] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [username, setUsername] = useState("");


  async function handleOnSubmit(event) {
    event.preventDefault();
    if (passwordConf === password) {
      const newUser = {
        UserName: username,
        FirstName: firstName,
        LastName: lastName,
        email: email,
        Phone: phoneNumber,
        password: password,
        password2: passwordConf
      };
      const response = await postSignUp(newUser);
    } else {
      alert("Passwords do not match")
    }
  }

  return (
    <div id="sign-up-form">
      <>
        <Card className="d-flex align-items-center justify-self-center mt-5 bg-transparent">
          <Card.Body>
            <Form onSubmit={(event) => handleOnSubmit(event)}>
              <Form.Group id="username">
                <Form.Label>User Name</Form.Label>
                <Form.Control
                  type="text"
                  required
                  onChange={(event) => setUsername(event.target.value)}
                />
              </Form.Group>
              <Form.Group id="first-name">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  required
                  onChange={(event) => setFirstName(event.target.value)}
                />
              </Form.Group>
              <Form.Group id="last-name">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  required
                  onChange={(event) => setLastName(event.target.value)}
                />
              </Form.Group>
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  required
                  onChange={(event) => setEmail(event.target.value)}
                />
              </Form.Group>
              <Form.Group id="phone">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="number"
                  required
                  onChange={(event) => setPhoneNumber(event.target.value)}
                />
              </Form.Group>
              <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  required
                  onChange={(event) => setPassword(event.target.value)}
                />
              </Form.Group>
              <Form.Group id="password-confirm">
                <Form.Label>Password Confirmation</Form.Label>
                <Form.Control
                  type="password"
                  required
                  onChange={(event) => setPasswordConf(event.target.value)}
                />
              </Form.Group>
              <Button className="w-100" type="submit">
                Sign Up
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </>
    </div>
  );
}
