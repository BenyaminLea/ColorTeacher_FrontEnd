import { postLogin } from "components/api/api";
import React, {useState} from "react";
import { Button, Form, Card } from "react-bootstrap";

export default function Login() {

  const [userEmail, setUserEmail] = useState('')
  const [userPassword, setUserPassword] = useState('')

  const handleOnSubmit = (event) => {
    event.preventDefault()
    const loginObj = {email: userEmail, password: userPassword}
    console.log(loginObj);
    postLogin('http://localhost:5000/api/login/', loginObj)
  }

  return (
    <Card className="mt-5 bg-transparent">
        <Form className="container mt-5 login-form bg-transparent" onSubmit={(event) => handleOnSubmit(event)}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter your email" onChange={event => setUserEmail(event.target.value)}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={event => setUserPassword(event.target.value)}/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </Card>
  );
}