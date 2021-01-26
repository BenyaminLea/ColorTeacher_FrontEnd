/*!

=========================================================
* Paper Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import { updateUser } from "components/lib/api";
import { UserContext } from "context/UserContext";
import React, { useContext, useState } from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from "reactstrap";

function User(props) {

  const context = useContext(UserContext).user;
  const [formFields, setFormFields] = useState(context);
  console.log(formFields);

  function handleChange(e) {
    setFormFields({
      ...formFields,
      [e.target.name]: e.target.value
    });
  }

  async function onSubmit(e) {
    e.preventDefault();
    console.log(formFields);
    const updated = await updateUser(context.id, formFields)
    console.log(updated);
  }
  return (
    <>
      <div className="content">
        <Row>
          <Col md="4">
          </Col>
          <Col md="12">
            <Card className="card-user">
              <CardHeader>
                <CardTitle tag="h5">Edit Profile</CardTitle>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-1" md="6">
                      <FormGroup>
                        <label>Username</label>
                        <Input
                          defaultValue={context.UserName}
                          placeholder="Username"
                          type="text"
                          onChange={handleChange}
                          value={formFields.username}
                          name="username"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-1" md="6">
                      <FormGroup>
                        <label htmlFor="email">
                          Email address
                          </label>
                        <Input
                          placeholder="Email"
                          type="email"
                          defaultValue={context.email}
                          onChange={handleChange}
                          value={formFields.email}
                          name="email"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="6">
                      <FormGroup>
                        <label>First Name</label>
                        <Input
                          defaultValue={context.FirstName}
                          placeholder="First Name"
                          type="text"
                          onChange={handleChange}
                          value={formFields.fName}
                          name="fName"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-1" md="6">
                      <FormGroup>
                        <label>Last Name</label>
                        <Input
                          defaultValue={context.LastName}
                          placeholder="Last Name"
                          type="text"
                          onChange={handleChange}
                          value={formFields.lName}
                          name="lName"
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <label>About Me</label>
                        <Input
                          type="textarea"
                          // defaultValue={context.about}
                          placeholder="About"
                          onChange={handleChange}
                          value={formFields.about}
                          name="about"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <div className="update ml-auto mr-auto">
                      <Button
                        className="btn-round"
                        color="primary"
                        type="submit"
                        onClick={onSubmit}
                      >
                        Update Profile
                        </Button>
                    </div>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );

}

export default User;
