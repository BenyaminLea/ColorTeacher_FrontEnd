import { postLogin } from "components/api/api";
import React, { useState } from "react";
import { Button, Form, Card } from "react-bootstrap";
import { withRouter } from "react-router";
import auth from '../custom/auth';

function Login(props) {

  const [userEmail, setUserEmail] = useState('')
  const [userPassword, setUserPassword] = useState('')

  const handleOnSubmit = async (event) => {
    event.preventDefault()
    const loginObj = { email: userEmail, password: userPassword }
    const response = await postLogin('http://localhost:5000/api/login/', loginObj);
    console.log(response);
    auth.login(() => {
      props.history.push(`/admin/main`);
    });
  }

  return (
    <Card className="mt-5 bg-transparent">
      <Form className="container mt-5 login-form bg-transparent" onSubmit={(event) => handleOnSubmit(event)}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" onChange={event => setUserEmail(event.target.value)} />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
        </Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={event => setUserPassword(event.target.value)} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
      </Button>
      </Form>
    </Card>
  );
}

export default withRouter(Login);